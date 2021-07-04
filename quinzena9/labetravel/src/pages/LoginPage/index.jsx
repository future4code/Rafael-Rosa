import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import useForm from "../../hooks/useForm";
import { postLogin } from "../../requests/API";

export default function LoginPage() {

  const {form, onChange} = useForm({ email: "", password: "" })


  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push('/admin/trips/list')
    }
  }, [])

  const history = useHistory()

  const changePage = (path) => {
    history.push(path)
  }

  const onSubmitLogin = (event) => {

    event.preventDefault()

    postLogin(form, changePage)
  }

  console.log('Form: ', form);

  return (
    <div>
      <Header />
      <p>LoginPage</p>
      <form onSubmit={onSubmitLogin}>
        <input
          name={'email'}
          value={form.email}
          onChange={onChange}
          type={'email'}
          placeholder={'Email'}
        />
        <input
          name={'password'}
          value={form.password}
          onChange={onChange}
          type={'text'}
          placeholder={'Senha'}
        />
        <input
          type={"submit"}
          value={"Enviar"}
        />
      </form>
      <button onClick={() => changePage("/")}>Voltar para Home</button>
    </div>
  );
}
