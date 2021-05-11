import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const DivInputs = styled.div`
  display: flex;
  padding: 10px 0;

  input {
    margin: 0 2px;
  }
`


const arrayPosts = [
    {
      nomeUsuario: 'Paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'Roberto',
      fotoUsuario: 'https://picsum.photos/50/49',
      fotoPost: 'https://picsum.photos/200/149'
    },
    {
      nomeUsuario: 'Marcela',
      fotoUsuario: 'https://picsum.photos/50/51',
      fotoPost: 'https://picsum.photos/200/151'
    }
]

class App extends React.Component {
  state = {
    post: [...arrayPosts],
    valorInputPessoa: "",
    valorImagemUsuario: "",
    valorImagemPost: ""
  }

  onChangeInputPessoa = (event) => {
    this.setState({ valorInputPessoa: event.target.value });
  };
  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorImagemUsuario: event.target.value });
  };
  onChangeInputFotoPost = (event) => {
    this.setState({ valorImagemPost: event.target.value });
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputPessoa, fotoUsuario: this.state.valorImagemUsuario, fotoPost: this.state.valorImagemPost
    }

    const arrayNovoPost = [novoPost, ...this.state.post];

    this.setState(
      { 
        post: arrayNovoPost,
        valorInputPessoa: "",
        valorImagemUsuario: "",
        valorImagemPost: ""
      }
      );
  };


  render() {
    return (
      <MainContainer>
        
        <DivInputs>
          <input
            value={this.state.valorInputPessoa}
            onChange={this.onChangeInputPessoa}
            placeholder={"Nome do usuário"}
          ></input>
          <input
            value={this.state.valorImagemUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Url da Foto de Usuário"}
          ></input>
          <input
            value={this.state.valorImagemPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Url da foto do post"}
          ></input>
        </DivInputs>

        <button onClick={this.adicionaPost}>Adicionar</button>

        {this.state.post.map(
          (post) => {
          return <Post {...post} />
          }
        )}

      </MainContainer>
    );
  }
}

export default App;
