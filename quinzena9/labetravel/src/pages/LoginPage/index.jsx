import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header";

export default function LoginPage() {

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push('/admin/trips/list')
    }
  }, [])

  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }

  const handleInputEmail = (event) => {
    setUserEmail(event.target.value)
  }

  const handleInputPassword = (event) => {
    setUserPassword(event.target.value)
  }

  const submitLogin = () => {

    const body = {
      email: userEmail,
      password: userPassword
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-rosa-munoz/login', body)
      .then((response) => {
        console.log(response.data.token)
        localStorage.setItem("token", response.data.token)
        history.push('/admin/trips/list')
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div>
      <Header />
      <p>LoginPage</p>
      <input
        type={'email'}
        placeholder={'Email'}
        onChange={handleInputEmail}
        value={userEmail}
      />
      <input
        type={'text'}
        placeholder={'Senha'}
        onChange={handleInputPassword}
        value={userPassword}
      />
      <button onClick={submitLogin}>Entrar</button>
      <button onClick={goToHomePage}>Voltar para Home</button>
    </div>
  );
}
