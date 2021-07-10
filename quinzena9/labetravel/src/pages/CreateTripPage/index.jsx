import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import { postCreateTrip } from "../../requests/API";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { PageContainer, TitleContainer, FormContainer, Form } from './styled'
import { SolidGreenButton, SolidYellowButton } from "../../styles/styles";


export default function CreateTripPage() {

  const history = useHistory()

  const { form, onChange, clearFields } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })
  const [clearForm, setClearForm] = useState(false)

  useEffect(() => {
    if (clearForm) {
      clearFields()
      setClearForm(false)
    }
  }, [clearForm])

  const changePage = (path) => {
    history.push(path)
  }

  const goBackPage = (event) => {
    event.preventDefault()
    history.goBack()
  }

  const submitForm = (event) => {
    event.preventDefault()

    postCreateTrip(form, setClearForm, changePage)
  }

  return (
    <PageContainer>
      <Header />

      <TitleContainer>
        <h1>
          Criar Viagem
        </h1>
      </TitleContainer>

      <div>
        <SolidGreenButton onClick={goBackPage}>{'<'} Voltar</SolidGreenButton>
      </div>

      <FormContainer>
        <Form onSubmit={submitForm}>
          <input
            name={'name'}
            value={form.name}
            onChange={onChange}
            type={'text'}
            placeholder={'Nome da viagem'}
            pattern={'^.{5,}$'}
            title={'O nome do planeta deve ter pelo menos 5 letras'}
            required
          />
          <input
            name={'planet'}
            value={form.planet}
            onChange={onChange}
            type={'text'}
            placeholder={'Planeta'}
            required
          />
          <input
            name={'date'}
            value={form.date}
            onChange={onChange}
            type={'text'}
            placeholder={'Data'}
            required
          />
          <input
            name={'description'}
            value={form.description}
            onChange={onChange}
            type={'text'}
            placeholder={'Descrição'}
            pattern={'^.{30,}$'}
            title={'Descreva sua motivação em, no mínimo, 30 letras'}
            required
          />
          <input
            name={'durationInDays'}
            value={form.durationInDays}
            onChange={onChange}
            type={'number'}
            placeholder={'Duração (em dias)'}
            required
          />
          <div>
            <SolidYellowButton type={'submit'}>
              Enviar
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