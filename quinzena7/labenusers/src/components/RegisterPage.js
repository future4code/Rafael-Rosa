import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
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

  input{
    margin: 0 5px;
  }
`

export default class RegisterPage extends React.Component {
  
  render(){
    console.log("name" ,this.props.valueInputName)
    console.log("email" ,this.props.valueInputEmail)

    return (
      <PageContainer>
        <button
        onClick={() => this.props.onClickChangePage('users')}>Lista de Usuários</button>
        <Title>Cadastrar Usuário</Title>
        <DivInput>
          <input 
          type={"text"}
          value={this.props.valueInputName}
          onChange={this.props.onChangeInputName}
          >
          </input>
          <input 
          type={"email"}
          value={this.props.valueInputEmail}
          onChange={this.props.onChangeInputEmail}
          >
          </input>
          <button 
          onClick={this.props.createUser}
          > Criar Usuário </button>
        </DivInput>
      </PageContainer>
    )

  }
  
}

