import React from 'react'

import {HeaderContainer} from './styled'

export default class Header extends React.Component {
    
    render() {
        return (
            <HeaderContainer>
                <div>LOGO</div>
                <button
                onClick={() => {this.props.changePage(this.props.buttonClickArgument)}}
                >{this.props.buttonLabel}</button>
            </HeaderContainer>
        )
    }
}