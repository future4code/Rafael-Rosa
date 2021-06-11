import React from 'react'
import axios from 'axios'
import CreatePlaylistPage from './pages/CreatePlaylistPage'
import ShowPlaylistsPage from './pages/ShowPlaylistsPage'
import DetailPlaylistPage from './pages/DetailPlaylistPage'

import { AppContainer } from './components/AppStyles'

export default class App extends React.Component {

  state = {
    currentPage: "createPlaylist",
    selectedPlaylistDetails: [],
    idSelectedPlaylist: ""
  }

  changePage = (page) => {
    this.setState({ currentPage: page })
  }

  setSelectedPlaylist = (idPlaylist, playlistTracks) => {
    this.setState({ selectedPlaylistDetails: playlistTracks, idSelectedPlaylist: idPlaylist })
  }

  getPlaylistData = (idPlaylist) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks`, {
      headers: {
        Authorization: "rafael-rosa-munoz"
      }
    }).then((response) => {
      this.setSelectedPlaylist(idPlaylist, response.data.result.tracks)
      this.changePage('detailPlaylist')
    }).catch((error) => {
      console.log(error.message)
    })
  }

  renderPage = () => {
    switch (this.state.currentPage) {
      case 'createPlaylist':
        return (
          <CreatePlaylistPage
            currentPage={this.state.currentPage}
            changePage={this.changePage}
          />
        )
      case 'showPlaylists':
        return (
          <ShowPlaylistsPage
            currentPage={this.state.currentPage}
            changePage={this.changePage}
            setSelectedPlaylist={this.setSelectedPlaylist}
            getPlaylistData={this.getPlaylistData}
          />
        )
      case 'detailPlaylist':
        return (
          <DetailPlaylistPage
            changePage={this.changePage}
            selectedPlaylistDetails={this.state.selectedPlaylistDetails}
            idSelectedPlaylist={this.state.idSelectedPlaylist}
            getPlaylistData={this.getPlaylistData}
          />
        )
      default:
        <CreatePlaylistPage
          currentPage={this.state.currentPage}
          changePage={this.changePage}
        />
    }
  }

  render() {
    return (
      <AppContainer>
        {this.renderPage()}
      </AppContainer>
    );
  }
}
