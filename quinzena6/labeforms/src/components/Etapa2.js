import React from 'react'
import styled from 'styled-components'

const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;

  label {
      margin-top: 10px;
  }
`

export default class Etapa2 extends React.Component {



    render() {

        return <Formulario>

            <h2>ETAPA 2: Informações educacionais para quem está cursando (ou já terminou) o ensino superior</h2>

            <label>Qual o curso?</label>
            <input type={'text'} name={'curso'}></input>

            <label>Qual a unidade de ensino?</label>
            <input type={'text'} name={'IE'}></input>

            </Formulario>

    }
        
}