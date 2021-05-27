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

const UsersList = styled.div`
  
  div{
    display: flex;
    justify-content: center;
    align-items: center;
  }

`

export default class UsersPage extends React.Component {
  
  componentDidMount = () => {
    this.props.getAllUsers()
  }


  render(){

    return (
      <PageContainer>
        <button onClick={() => this.props.onClickChangePage('home')}>Voltar para Home</button>
        <Title>Lista de Usuários</Title>
        <UsersList>
          {this.props.usersList.map((user) => {
            return <div>
              <p>{user.name}</p>
              <button onClick={() => this.props.deleteUser(user.id)}>Delete</button>
            </div>
          })}
        </UsersList>
      </PageContainer>
    );
  }
  
}

