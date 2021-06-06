import React from 'react'
import axios from 'axios'

import { FormBox, Title } from './styled'

export default class CreatePlaylistForm extends React.Component {

  state = {
    inputData: ""
  }

  handleInput = (e) => {
    this.setState({ inputData: e.target.value })
  }

  createPlaylist = () => {
    const body = {
      "name": this.state.inputData
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
      headers: {
        Authorization: "rafael-rosa-munoz"
      }
    }).then((response) => {
      alert('Playlist criada')
      this.setState({ inputData: "" })
    }).catch((error) => {
      alert('Erro ao cadastrar a Playlist')
    })
  }

  render() {
    return (
      <FormBox>
        <Title>Crie sua playlist</Title>
        <input
          type={"text"}
          placeholder={"Nome da Playlist"}
          onChange={this.handleInput}
          value={this.state.inputData}
        />
        <button onClick={this.createPlaylist}>
          Cadastrar
        </button>
      </FormBox >
    )
  }
}