import React from 'react'

import { ListBox, ItemList, PlaylistName, PlaylistButton } from './styled'

export default class ShowPlaylistsList extends React.Component {

  render() {
    const showPlaylists = this.props.allPlaylists.map((playlist, index) => {
      return (
        <ItemList key={index}>
          <PlaylistName onClick={() => this.props.getPlaylistData(playlist.id)}>
            {playlist.name}
          </PlaylistName>
          <PlaylistButton onClick={() => this.props.deletePlaylist(playlist.id, playlist.name)}>
            X
          </PlaylistButton>
        </ItemList>
      )
    })

    return (
      <ListBox>
        {showPlaylists}
      </ListBox >
    )
  }
}