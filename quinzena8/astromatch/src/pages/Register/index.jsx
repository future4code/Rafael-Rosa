import React, { useState } from 'react'
import Logo from '../../assets/astromatch-logo.gif'
import { PageContainer, RegisterBox } from './styled'


export default function Register(props) {

  const [inputUser, setInputUser] = useState('')

  const handleInputUser = (e) => {
    setInputUser(e.target.value)
  }

  const formatUsername = (inputUser) => {
    const splittedInput = inputUser
      .toLowerCase()
      .split(' ')

    let usernameHandled = ''
    for (let index = 0; index < splittedInput.length; index++) {
      index === 0 ?
        usernameHandled = splittedInput[index] :
        usernameHandled = `${usernameHandled}-${splittedInput[index]}`
    }

    props.RegisterUser(usernameHandled)
  }

  return (
    <PageContainer>
      <RegisterBox>
        <img src={Logo} alt={'Logotipo Astromatch'}></img>
        <p>Olá! Informe seu nome para iniciar</p>
        <input
          type={'text'}
          onChange={handleInputUser}
          value={inputUser}
        />
        <button
          onClick={() => { formatUsername(inputUser) }}
        >Registrar</button>
      </RegisterBox>
    </PageContainer>
  );
}
