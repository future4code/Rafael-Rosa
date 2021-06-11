import React from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ShowPlaylistsList from '../../components/ShowPlaylistsList'

import { PageContainer, MainTag, MainContainer, Title } from './styled'

export default class ShowPlaylistPage extends React.Component {

  state = {
    allPlaylists: []
  }

  getAllPlaylists = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers: {
        Authorization: "rafael-rosa-munoz"
      }
    }).then((response) => {
      this.setState({ allPlaylists: response.data.result.list })
    }).catch((error) => {
      console.log(error)
    })
  }

  deletePlaylist = (id, name) => {

    const confirmation = window.confirm("Você tem certeza que deseja deletar a playlist " + name + " da lista?")

    if (confirmation) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
        headers: {
          Authorization: "rafael-rosa-munoz"
        }
      }).then(() => {
        this.getAllPlaylists()
      }).catch((error) => {
        console.log(error.message)
      })
    }
  }

  componentDidMount = () => {
    this.getAllPlaylists()
  }

  render() {
    return (
      <PageContainer>
        <Header
          buttonLabel={'Criar Playlist'}
          buttonClickArgument={'createPlaylist'}
          changePage={this.props.changePage}
        />
        <MainTag>
          <MainContainer>
            <Title>Selecione a Playlist</Title>
            <ShowPlaylistsList
              allPlaylists={this.state.allPlaylists}
              getAllPlaylists={this.getAllPlaylists}
              deletePlaylist={this.deletePlaylist}
              getPlaylistData={this.props.getPlaylistData}
            />
          </MainContainer>
        </MainTag>
        <Footer />
      </PageContainer>
    );
  }
}