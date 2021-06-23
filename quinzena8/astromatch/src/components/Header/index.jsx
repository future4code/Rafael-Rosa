import React from 'react'

import Logo from '../../assets/astromatch-logo.svg'
import ClearIcon from '../../assets/clear-list.png'
import MatchIcon from '../../assets/match-list.png'
import HomeIcon from '../../assets/home.png'

import { HeaderTag, ImageLogo, ClearListButton, ChangePageButton, IconButton } from './styled'


export default function Header(props) {

  const renderButton = () => {
    switch (props.currentPage) {
      case 'homepage':
        return (
          <ChangePageButton
            onClick={() => { props.changePage('matches') }}
          >
            <IconButton src={MatchIcon} alt="MatchIcon" />
          </ChangePageButton>
        )
      case 'matches':
        return (
          <ChangePageButton
            onClick={() => { props.changePage('homepage') }}
          >
            <IconButton src={HomeIcon} alt="HomeIcon" />
          </ChangePageButton>
        )
      default:
        return (
          <ChangePageButton
            onClick={() => { props.changePage('homepage') }}
          >
            <IconButton src={HomeIcon} alt="HomeIcon" />
          </ChangePageButton>
        )

    }
  }

  return (
    <HeaderTag>
      <ClearListButton
        onClick={props.putClear}
      >
        <IconButton src={ClearIcon} alt="ClearIcon" />
      </ClearListButton>
      <ImageLogo src={Logo} alt="logo" />
      {renderButton()}
    </HeaderTag>
  );
}
