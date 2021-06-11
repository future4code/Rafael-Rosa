import React from 'react'
import {FooterTag, FooterContainer} from './styled'

export default class Footer extends React.Component {

    render() {
        return (
            <FooterTag>
              <FooterContainer>
                Desenvolvido por <a href={"https://www.linkedin.com/in/rafaelsilveiradarosa"} target={"_blank"} rel={"noreferrer"}> Rafael S. da Rosa</a>
              </FooterContainer>
            </FooterTag>
        )
    }
}