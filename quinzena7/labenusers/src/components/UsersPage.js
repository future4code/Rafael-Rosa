import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PageContainer = styled.div`
  text-align: center;
  background-color: #282c34;
  padding-top: 20px;
`
const Title = styled.h1`
  color: white;
  font-size: calc(10px + 2vmin);
  margin-top: 0;
`
const UsersList = styled.div`

  padding-bottom: 20px;

`
const UserBox = styled.div`
  width: 50%;
  border: 1px solid #000;
  margin: 2px auto;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div{
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  button{
    margin: 0 5px;
  }
`

export default class UsersPage extends React.Component {

  state = {
    usersList: [],
    userData: ''
  }

  componentDidMount = () => {
    this.getAllUsers()
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
      console.log(response);
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
      }).then(() => {
        this.getAllUsers()
      }).catch((error) => {
        console.log(error.message)
      })
    }
  }

  showUserDetails = (name, email) => {
    alert("Nome: " + name + "\nEmail: " + email)
  }

  render() {

    return (
      <PageContainer>
        <Title>Lista de Usuários</Title>
        <UsersList>
          {this.state.usersList.map((user) => {
            return (
              <UserBox key={user.id}>
                <p>{user.name}</p>
                <div>
                  <button onClick={() => this.getUserData(user.id)}>Detalhes</button>
                  <button onClick={() => this.deleteUser(user.id, user.name)}>X</button>
                </div>
              </UserBox>
            )
          })}
        </UsersList>
        <button onClick={() => this.props.onClickChangePage('RegisterPage')}>Voltar para Home</button>
      </PageContainer>
    );
  }

}

