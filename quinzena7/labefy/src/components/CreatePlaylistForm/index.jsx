import React from 'react'
import axios from 'axios'
import { FormBox } from './styled'

export default class CreatePlaylistForm extends React.Component {

    state = {
        inputData: ""
    }

    handleInput = (e) => {
        this.setState({
            inputData: e.target.value
        })
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
            this.setState({inputData: ""})
        }).catch((error) => {
            alert('Erro ao cadastrar a Playlist')
        })
    }

    render() {

        return(
            <FormBox>
                <h1>Crie sua playlist</h1>
                <p>Nome da Playlist</p>
                <input 
                    type={"text"}
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