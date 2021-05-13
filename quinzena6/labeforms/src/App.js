import React from 'react'
import styled from 'styled-components'
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import EtapaFinal from './components/EtapaFinal'

const Main = styled.main`
  background-color: #eaeaea;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
`
const Botao = styled.button`
  margin: 10px;
`

class App extends React.Component {

  state = {
    etapa: 1
  }

  mudarEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
  }

  renderizarEtapa = () =>{
    switch (this.state.etapa){
      case 1:
        return <Etapa1 />
      case 2:

        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <EtapaFinal />
      default:
        return <Etapa1 />
    
    }
  }

  render() {
    return (
      <Main>
        {this.renderizarEtapa()}
        {this.state.etapa !== 4 && <Botao onClick={this.mudarEtapa}>Próxima Etapa</Botao>}
        
      </Main>
    );
  }
}

export default App;