import React from 'react'
import Logo from '../../assets/Labefy-logo-transparent.png'

import { HeaderContainer, ButtonTheme } from './styled'

export default class Header extends React.Component {

  render() {
    return (
      <HeaderContainer>
        <div>
          <img src={Logo} alt={"Logotipo Labefy"} />
        </div>
        <ButtonTheme
          onClick={() => { this.props.changePage(this.props.buttonClickArgument) }}
        >
          {this.props.buttonLabel}
        </ButtonTheme>
      </HeaderContainer>
    )
  }
}