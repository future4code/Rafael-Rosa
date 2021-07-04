import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import { postCreateTrip, postLogin } from "../../requests/API";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { PageContainer, TitleContainer, FormContainer, Form } from './styled'
import { SolidYellowButton, SolidGreenButton } from "../../styles/styles";

export default function LoginPage() {

  const { form, onChange } = useForm({ email: "", password: "" })
  const [refresh, setRefresh] = useState(false)



  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push('/admin/trips/list')
    }
  }, [])

  const history = useHistory()

  const changePage = (path) => {
    history.push(path)
    setRefresh(!refresh)
  }

  const goBackPage = (event) => {
    event.preventDefault()
    history.goBack()
  }

  const onSubmitLogin = (event) => {

    event.preventDefault()

    postLogin(form, changePage)

  }

  return (
    <PageContainer>
      <Header />

      <TitleContainer>
        <h1>
          Login
        </h1>
      </TitleContainer>

      <FormContainer>
        <Form onSubmit={onSubmitLogin}>
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
            type={'password'}
            placeholder={'Senha'}
          />
          <div>
            <SolidYellowButton type={"submit"}>
              Conectar
            </SolidYellowButton>
            <SolidGreenButton onClick={goBackPage}>
              Cancelar
            </SolidGreenButton>
          </div>
        </Form>
      </FormContainer>

      <Footer />
    </PageContainer>
  );
}
