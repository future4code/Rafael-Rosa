import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CreatePlaylistForm from '../../components/CreatePlaylistForm'

import { PageContainer, MainTag, MainContainer, Title } from './styled'

export default class CreatePlaylistPage extends React.Component {

  render() {
    return (
      <PageContainer>
        <Header
          buttonLabel={'Ver Playlists'}
          buttonClickArgument={'showPlaylists'}
          changePage={this.props.changePage}
        />
        <MainTag>
          <MainContainer>
            <Title>Crie sua playlist</Title>
            <CreatePlaylistForm />
          </MainContainer>
        </MainTag>
        <Footer />
      </PageContainer>
    );
  }
}