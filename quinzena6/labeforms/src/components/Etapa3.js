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

export default class Etapa3 extends React.Component {



    render() {

        return <Formulario>

            <h2>ETAPA 3: Informações sobre quem não se formou no ensino superior nem está cursando</h2>

            <label>Por que você não terminou um curso de graduação?</label>
            <input type={'text'} name={'nao-concluiu'}></input>
            
            <label>Você fez algum curso complementar?</label>
            <select name={'curso-complementar'}>
                <option value={'Curso técnico'}>Curso técnico</option>
                <option value={'Cursos de inglês'}>Cursos de inglês</option>
                <option value={'Não fiz curso complementar'}>Não fiz curso complementar</option>
            </select>

            </Formulario>

    }
        
}