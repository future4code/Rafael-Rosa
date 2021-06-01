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

const DivInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;

  input{
    margin: 0 5px;
  }
`

export default class RegisterPage extends React.Component {
  
  state = {
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


  render(){

    return (
      <PageContainer>
        <Title>Cadastrar Usuário</Title>
        <DivInput>
          <input 
          type={"text"}
          value={this.state.valueInputName}
          onChange={this.onChangeInputName}
          >
          </input>
          <input 
          type={"email"}
          value={this.statevalueInputEmail}
          onChange={this.onChangeInputEmail}
          >
          </input>
          <button 
          onClick={this.createUser}
          > Criar Usuário </button>
        </DivInput>
        <button onClick={() => this.props.onClickChangePage('UsersPage')}>Lista de Usuários</button>
      </PageContainer>
    )

  }
  
}

