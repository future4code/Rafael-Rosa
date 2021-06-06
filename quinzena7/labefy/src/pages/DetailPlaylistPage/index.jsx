import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ShowDetailsPlaylists from '../../components/ShowDetailsPlaylists'

import { PageContainer, MainContainer } from './styled'

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
          <ShowDetailsPlaylists 
            selectedPlaylistDetails={this.props.selectedPlaylistDetails}
          />
        </MainContainer>
        <Footer />
      </PageContainer>
    );
  }
}