import React from 'react'
import { ListBox, ItemList } from './styled'

export default class ShowDetailsPlaylists extends React.Component {

  render() {
    const showPlaylists = this.props.selectedPlaylistDetails.map((track, index) => {
      return (
        <ItemList key={index}>
          <p>{track.artist} - {track.name}</p>
          <a href={track.url}>URL:{track.url}</a>
        </ItemList>
      )
    })

    return (
      <ListBox>
        <h1>Lista de Músicas</h1>
        {showPlaylists}
      </ListBox >
    )
  }
}