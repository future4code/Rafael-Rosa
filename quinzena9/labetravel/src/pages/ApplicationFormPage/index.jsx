import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import { getTripsList, postApplyToTrip } from "../../requests/API";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { PageContainer, TitleContainer, FormContainer, Form } from './styled'
import { SolidGreenButton, SolidYellowButton } from "../../styles/styles"


export default function ListTripsPage(props) {

  const history = useHistory()
  const [tripsList, setTripsList] = useState([])
  const [selectedTrip, setSelectedTrip] = useState(props.selectedTripToApply)
  const [clearForm, setClearForm] = useState(false)
  const { form, onChange, clearFields } = useForm({ name: "", age: '', applicationText: "", profession: "", country: "" })

  useEffect(() => {
    getTripsList(setTripsList)
    if (clearForm) {
      clearFields()
      setClearForm(false)
    }
  }, [clearForm])

  const changePage = (path) => {
    history.push(path)
  }

  const goBackPage = () => {
    history.goBack()
  }

  const handleSelectedTrip = (event) => {

    tripsList.forEach((trip) => {
      if (trip.name === event.target.value) {
        setSelectedTrip(trip)
      }
    })
  }

  const submitForm = (event) => {
    event.preventDefault()

    postApplyToTrip(selectedTrip.id, form, setClearForm, changePage)
  }

  const selectViagens = tripsList.map((trip) => {
    return (
      <option required key={trip.id}>
        {trip.name}
      </option>
    )
  })

  return (
    <PageContainer>
      <Header />

      <TitleContainer>
        <h1>
          Embarque nessa viagem
        </h1>
      </TitleContainer>

      <div>
        <SolidGreenButton onClick={goBackPage}>{'<'} Voltar</SolidGreenButton>
      </div>

      <FormContainer>
        <Form onSubmit={submitForm}>
          <select value={selectedTrip.name} onChange={handleSelectedTrip}>
            {selectViagens}
          </select>
          <input
            name={'name'}
            value={form.name}
            onChange={onChange}
            type={'text'}
            placeholder={'Nome'}
            required
          />
          <input
            name={'age'}
            value={form.age}
            onChange={onChange}
            type={'number'}
            placeholder={'Idade'}
            required
          />
          <input
            name={'applicationText'}
            value={form.applicationText}
            onChange={onChange}
            type={'text'}
            placeholder={'Texto de Candidatura'}
            required
          />
          <input
            name={'profession'}
            value={form.profession}
            onChange={onChange}
            type={'text'}
            placeholder={'Profissão'}
            required
          />
          <input
            name={'country'}
            value={form.country}
            onChange={onChange}
            type={'text'}
            placeholder={'País (Ex.: BRA)'}
            pattern={'[A-Z]{3}'}
            title={'Código do País com 3 letras maiúsculas'}
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