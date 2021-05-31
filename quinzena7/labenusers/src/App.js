import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
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
    usersList: [],
    userData: '',
    inputName: '',
    inputEmail: ''
  }

  onChangeInputName = (event) => {
    this.setState({
      inputName: event.target.value
    })
  }

  onChangeInputEmail = (event) => {
    this.setState({
      inputEmail: event.target.value
    })
  }

  createUser = () => {

    if (this.state.inputName.length > 2 && this.state.inputEmail.length > 5 && this.state.inputEmail.includes('@')) {
      const body = {
        name: this.state.inputName,
        email: this.state.inputEmail
      }

      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
        headers: {
          Authorization: "rafael-rosa-munoz"
        }
      }).then((response) => {
        alert('Usuário criado')
      }).catch((error) => {
        alert('Erro ao cadastrar o usuário')
      })

      this.setState({ inputName: '', inputEmail: '' })
    } else {
      alert('Por favor, verifique os campos e preencha corretamente.')
    }
  }

  getAllUsers = () => {

    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "rafael-rosa-munoz"
      }
    }).then((response) => {
      this.setState({ usersList: response.data })
    }).catch((error) => {
      console.log(error.message)
    })
  }

  getUserData = (idUser) => {

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUser}`, {
      headers: {
        Authorization: "rafael-rosa-munoz"
      }
    }).then((response) => {
      this.setState({ userData: response.data })
      this.showUserDetails(response.data.name, response.data.email)
    }).catch((error) => {
      console.log(error.message)
    })
  }

  deleteUser = (id, name) => {

    const confirmation = window.confirm("Você tem certeza que deseja deletar " + name + " da lista?")

    if (confirmation) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
        headers: {
          Authorization: "rafael-rosa-munoz"
        }
      }).then((response) => {
        this.getAllUsers()
      }).catch((error) => {
        console.log(error.message)
      })
    }
  }

  onClickChangePage = (page) => {
    this.setState({
      currentPage: page
    })
  }

  showUserDetails = (name, email) => {
    alert("Nome: " + name + "\nEmail: " + email)
  }


  render() {

    return (
      <MainContainer>
        {
          this.state.currentPage === 'UsersPage' ?
            <UsersPage
              onClickChangePage={this.onClickChangePage}
              getAllUsers={this.getAllUsers}
              usersList={this.state.usersList}
              deleteUser={this.deleteUser}
              getUserData={this.getUserData}
            ></UsersPage> :
            <RegisterPage
              onClickChangePage={this.onClickChangePage}
              valueInputName={this.state.inputName}
              valueInputEmail={this.state.inputEmail}
              onChangeInputName={this.onChangeInputName}
              onChangeInputEmail={this.onChangeInputEmail}
              createUser={this.createUser}
            ></RegisterPage>
        }
      </MainContainer>
    );
  }

}


