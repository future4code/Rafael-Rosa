import React from 'react'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'

import {AppContainer} from './components/AppStyles'


export default class App extends React.Component {
  
  state = {
    currentPage: "createPlaylist"
  }

  changePage = (page) => {
    console.log(page);
    this.setState({ currentPage: page})
  }

  render(){
    return (
      <AppContainer>
        <Header 
          changePage={this.changePage}
        />
        <Main />
        <Footer />
      </AppContainer>
    );
  }
}
