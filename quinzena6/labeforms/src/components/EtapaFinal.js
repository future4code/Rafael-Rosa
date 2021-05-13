import React from 'react'
import styled from 'styled-components'

const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
`

export default class EtapaFinal extends React.Component {


    render() {

        return <Formulario>

        <h2>ETAPA FINAL: O formulário acabou</h2>

        <p>Agradecemos sua participação!</p>


        </Formulario>

    }
        
}