import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        
        <Post
          nomeUsuario={'Roberto'}
          fotoUsuario={'https://picsum.photos/50/49'}
          fotoPost={'https://picsum.photos/200/149'}
        />
        
        <Post
          nomeUsuario={'Joana'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/151'}
        />
        
      </MainContainer>
    );
  }
}

export default App;
