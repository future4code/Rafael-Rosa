import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ShowDetailsPlaylists from '../../components/ShowDetailsPlaylists'

import { PageContainer, MainContainer, Title } from './styled'

export default class DetailPlaylistPage extends React.Component {

  render() {
    console.log(this.props.selectedPlaylistDetails);
    return (
      <PageContainer>
        <Header
          buttonLabel={'Voltar para Lista'}
          buttonClickArgument={'showPlaylists'}
          changePage={this.props.changePage}
        />
        <MainContainer>
          <Title>Lista de Músicas</Title>
          <ShowDetailsPlaylists 
            selectedPlaylistDetails={this.props.selectedPlaylistDetails}
            idSelectedPlaylist={this.props.idSelectedPlaylist}
            getPlaylistData={this.props.getPlaylistData}
          />
        </MainContainer>
        <Footer />
      </PageContainer>
    );
  }
}