import React from 'react';
import styled from 'styled-components';

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
  
  render(){

    return (
      <PageContainer>
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
        <button onClick={() => this.props.onClickChangePage('UsersPage')}>Lista de Usuários</button>
      </PageContainer>
    )

  }
  
}

