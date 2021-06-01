import React from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import RegisterPage from './components/RegisterPage';
import UsersPage from './components/UsersPage';


const MainContainer = styled.div`
  color: #FFF;
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;

  button{
    cursor: pointer;
  }
`

export default class App extends React.Component {

  state = {
    currentPage: 'RegisterPage',
  }

  onClickChangePage = (page) => {
    this.setState({
      currentPage: page
    })
  }

  renderPage = () => {
    switch (this.state.currentPage) {
      case 'RegisterPage':
        return (
          <RegisterPage
            onClickChangePage={this.onClickChangePage}
          ></RegisterPage>
        )
      case 'UsersPage':
        return (
          <UsersPage
            onClickChangePage={this.onClickChangePage}
          ></UsersPage>
        )
      default:
        return (
          <RegisterPage
            onClickChangePage={this.onClickChangePage}
          ></RegisterPage>
        )
    }
  }

  render() {

    return (
      <MainContainer>
        {this.renderPage()}
      </MainContainer>
    );
  }

}


