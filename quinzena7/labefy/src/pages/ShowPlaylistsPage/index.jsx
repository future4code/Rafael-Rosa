import React from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ShowPlaylistsList from '../../components/ShowPlaylistsList'

import { PageContainer, MainContainer } from './styled'

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

  getPlaylistData = (idPlaylist) => {

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks`, {
      headers: {
        Authorization: "rafael-rosa-munoz"
      }
    }).then((response) => {
      this.props.setSelectedPlaylist(response.data.result.tracks)
      this.props.changePage('detailPlaylist')
    }).catch((error) => {
      console.log(error.message)
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
        <MainContainer>
          <ShowPlaylistsList
            changePage={this.props.changePage}
            allPlaylists={this.state.allPlaylists}
            getAllPlaylists={this.getAllPlaylists}
            getPlaylistData={this.getPlaylistData}
            deletePlaylist={this.deletePlaylist}
          />
        </MainContainer>
        <Footer />
      </PageContainer>
    );
  }
}