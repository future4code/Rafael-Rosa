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

export default class Etapa1 extends React.Component { 
    

    render() {

        return <Formulario>

            <h2>ETAPA 1: Dados gerais</h2>

            <label>Nome</label>
            <input type={'text'} name={'nome'}></input>

            <label>Idade</label>
            <input type={'text'} name={'idade'}></input>
            
            <label>Email</label>
            <input type={'email'} name={'email'}></input>
            
            <label>Qual o grau de escolaridade?</label>
            <select name={'escolaridade'}>
                <option value={'Ensino Médio Incompleto'}>Ensino Médio Incompleto</option>
                <option value={'Ensino Médio Completo'}>Ensino Médio Completo</option>
                <option value={'Ensino Superior Incompleto'}>Ensino Superior Incompleto</option>
                <option value={'Ensino Superior Completo'}>Ensino Superior Completo</option>
            </select>

            </Formulario>

    }
        
}