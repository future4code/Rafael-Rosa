import React from 'react'

import { ListBox, ItemList } from './styled'

export default class ShowPlaylistsList extends React.Component {

  render() {
    const showPlaylists = this.props.allPlaylists.map((playlist, index) => {
      return (
        <ItemList key={index}>
          <p>{playlist.name}</p>
          <div>
            <button onClick={() => this.props.getPlaylistData(playlist.id)}>Detalhes</button>
            <button onClick={() => this.props.deletePlaylist(playlist.id, playlist.name)}>X</button>
          </div>
        </ItemList>
      )
    })

    return (
      <ListBox>
        <h1>Lista de Playlists</h1>
        {showPlaylists}
      </ListBox >
    )
  }
}