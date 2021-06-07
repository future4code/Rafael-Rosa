import React from 'react'

import UpArrow from '../../assets/up-arrow.svg'

import { IconContainer, AddMusicBox, InputField, FormButton } from './styled'

export default class AddMusicForm extends React.Component {

  render() {
    return (
      <AddMusicBox>
        <IconContainer
          onClick={this.props.hideForm}
        >
          <img src={UpArrow} alt={"Up Arrow Icon"}/>
          <p>Incluir nova música</p>
        </IconContainer>
        <InputField
          type={"text"}
          placeholder={"Nome da música"}
          onChange={this.props.onChangeName}
          value={this.props.stateName}
        />
        <InputField
          type={"text"}
          placeholder={"Artista"}
          onChange={this.props.onChangeArtist}
          value={this.props.stateArtist}
        />
        <InputField
          type={"text"}
          placeholder={"URL (arquivo .mp3)"}
          onChange={this.props.onChangeURL}
          value={this.props.stateURL}
        />
        <FormButton onClick={() => { this.props.addTrackToPlaylist(this.props.idSelectedPlaylist) }}>
          Enviar
          </FormButton>
      </AddMusicBox >
    )
  }
}