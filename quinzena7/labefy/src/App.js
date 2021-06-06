import React from 'react'
import CreatePlaylistPage from './pages/CreatePlaylistPage'
import ShowPlaylistsPage from './pages/ShowPlaylistsPage'
import DetailPlaylistPage from './pages/DetailPlaylistPage'

import { AppContainer } from './components/AppStyles'

export default class App extends React.Component {

  state = {
    currentPage: "createPlaylist",
    selectedPlaylistDetails: []
  }

  changePage = (page) => {
    this.setState({ currentPage: page })
  }

  setSelectedPlaylist = (playlistTracks) => {
    this.setState({ selectedPlaylistDetails: playlistTracks })
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
          />
        )
      case 'detailPlaylist':
        return (
          <DetailPlaylistPage
            changePage={this.changePage}
            selectedPlaylistDetails={this.state.selectedPlaylistDetails}
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
