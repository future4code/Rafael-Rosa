import React from 'react'
import axios from 'axios'
import { ListBox, ItemList, TrackName, AddMusicBox, InputField, FormButton } from './styled'

export default class ShowDetailsPlaylists extends React.Component {

  state = {
    tracks: this.props.selectedPlaylistDetails
  }

  state = {
    onChangeName: "",
    onChangeArtist: "",
    onChangeURL: ""
  }

  onChangeName = (e) => {
    this.setState({ onChangeName: e.target.value })
  }
  onChangeArtist = (e) => {
    this.setState({ onChangeArtist: e.target.value })
  }
  onChangeURL = (e) => {
    this.setState({ onChangeURL: e.target.value })
  }

  addTrackToPlaylist = (playlistId) => {
    const body = {
      "name": this.state.onChangeName,
      "artist": this.state.onChangeArtist,
      "url": this.state.onChangeURL
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, body, {
      headers: {
        Authorization: "rafael-rosa-munoz"
      }
    }).then((response) => {
      alert('Música adicionada')
      this.setState({ onChangeName: "", onChangeArtist: "", onChangeURL: "" })
      this.props.getPlaylistData(playlistId)
    }).catch((error) => {
      alert('Erro ao cadastrar a Playlist')
    })
  }


  deleteTrack = (playlistId, trackId, trackName) => {
    console.log('entrou');
    const confirmation = window.confirm("Você tem certeza que deseja deletar a música " + trackName + " da lista?")

    if (confirmation) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${trackId}`, {
        headers: {
          Authorization: "rafael-rosa-munoz"
        }
      }).then(() => {
        alert('Musica Removida');
        this.props.getPlaylistData(playlistId)
      }).catch((error) => {
        console.log(error.message)
      })
    }
  }

  render() {
    const showTracks = this.props.selectedPlaylistDetails.map((track, index) => {
      return (
        <ItemList key={index}>
          <TrackName>
            {track.artist} - {track.name}
          </TrackName>
          <a href={track.url} target={"_blank"} rel={"noreferrer"}>URL:{track.url}</a>
          <button onClick={() => { this.deleteTrack(this.props.idSelectedPlaylist, track.id, track.name) }}>Remover música</button>
        </ItemList>
      )
    })

    return (
      <ListBox>
        <AddMusicBox>
          <InputField
            type={"text"}
            placeholder={"Adicionar nova música"}
            onChange={this.onChangeName}
            value={this.state.onChangeName}
          />
          <InputField
            type={"text"}
            placeholder={"Artista"}
            onChange={this.onChangeArtist}
            value={this.state.onChangeArtist}
          />
          <InputField
            type={"text"}
            placeholder={"URL"}
            onChange={this.onChangeURL}
            value={this.state.onChangeURL}
          />
          <FormButton onClick={() => {this.addTrackToPlaylist(this.props.idSelectedPlaylist)}}>
            Incluir Música
        </FormButton>
        </AddMusicBox >
        {showTracks}
      </ListBox >
    )
  }
}