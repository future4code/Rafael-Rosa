import React from 'react'
import axios from 'axios'
import { ListBox, IndividualPlaylistBox } from './styled'

export default class ShowPlaylistsList extends React.Component {

    state = {
        allPlaylists: []
    }

    getAllPlaylists = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: "rafael-rosa-munoz"
            }
        }).then((response) => {
            console.log(response.data.result.list)
            this.setState({ allPlaylists: response.data.result.list })
        }).catch((error) => {
            console.log(error)
        })
    }

    getPlaylistData = (idPlaylist) => {

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idPlaylist}`, {
          headers: {
            Authorization: "rafael-rosa-munoz"
          }
        }).then((response) => {
          console.log(response);
          this.setState({ playlistData: response.data })
        //   this.showUserDetails(response.data.name, response.data.email)
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
        console.log(this.state.playlistData);
        const showPlaylists = this.state.allPlaylists.map((playlist, index) => {
            return (
                <IndividualPlaylistBox key={index}>
                    <p>{playlist.name}</p>
                    <div>
                        {/* <button onClick={() => this.getplaylistData(playlist.id)}>Detalhes</button> */}
                        <button onClick={() => this.deletePlaylist(playlist.id, playlist.name)}>X</button>
                    </div>
                </IndividualPlaylistBox>
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