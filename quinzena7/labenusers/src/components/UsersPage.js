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
const UsersList = styled.div`

  padding-bottom: 20px;
  
  div{
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p{
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div div{
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button{
    margin: 0 5px;
  }

`

export default class UsersPage extends React.Component {

  componentDidMount = () => {
    this.props.getAllUsers()
  }

  render() {

    return (
      <PageContainer>
        <Title>Lista de Usuários</Title>
        <UsersList>
          {this.props.usersList.map((user) => {
            return <div>
              <p>{user.name}</p>
              <div>
                <button onClick={() => this.props.deleteUser(user.id, user.name)}>Delete</button>
                <button onClick={() => this.props.getUserData(user.id)}>Detalhes do usuário</button>
              </div>
            </div>
          })}
        </UsersList>
        <button onClick={() => this.props.onClickChangePage('RegisterPage')}>Voltar para Home</button>
      </PageContainer>
    );
  }

}

