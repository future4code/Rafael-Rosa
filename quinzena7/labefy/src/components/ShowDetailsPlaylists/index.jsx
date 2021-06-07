import React from 'react'
import axios from 'axios'
import AddMusicForm from '../AddMusicForm'

import DownArrow from '../../assets/down-arrow.svg'

import { ListBox, ItemList, TrackName, DeleteButton, FormClosed, IconContainer, NoMusicMessage } from './styled'

export default class ShowDetailsPlaylists extends React.Component {

  state = {
    tracks: this.props.selectedPlaylistDetails,
    onChangeName: "",
    onChangeArtist: "",
    onChangeURL: "",
    formOpen: false
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
  showForm = () => {
    this.setState({ formOpen: !this.state.formOpen })
  }

  addTrackToPlaylist = (playlistId) => {

    if (this.state.onChangeURL.toLowerCase().includes('.mp3')) {
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
    } else {
      alert('Por favor, insira um link de arquivo no formato .mp3')
    }
  }

  deleteTrack = (playlistId, trackId, trackName) => {
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
    const showTracks = this.state.tracks.map((track, index) => {
      return (
        <ItemList key={index}>
          <div>
            <TrackName>
              {track.artist} - {track.name}
            </TrackName>
            <DeleteButton onClick={() => { this.deleteTrack(this.props.idSelectedPlaylist, track.id, track.name) }}>x</DeleteButton>
          </div>
          <audio controls src={track.url}></audio>
        </ItemList>
      )
    })

    return (
      <>
        {this.state.formOpen ?
          <AddMusicForm
            hideForm={this.showForm}
            onChangeName={this.onChangeName}
            stateName={this.state.onChangeName}
            onChangeArtist={this.onChangeArtist}
            stateArtist={this.state.onChangeArtist}
            onChangeURL={this.onChangeURL}
            stateURL={this.state.onChangeURL}
            idSelectedPlaylist={this.props.idSelectedPlaylist}
            addTrackToPlaylist={this.addTrackToPlaylist}
          /> :
          <FormClosed
            onClick={this.showForm}
          >
            <IconContainer>
              <img src={DownArrow} alt={"Down Arrow Icon"} />
              <p>Incluir nova música</p>
            </IconContainer>
          </FormClosed>
        }
        <ListBox>
          {this.state.tracks.length === 0 ? <NoMusicMessage>Não há nenhuma música na Playlist. Adicione no botão acima!</NoMusicMessage> : showTracks}
        </ListBox >
      </>
    )
  }
}