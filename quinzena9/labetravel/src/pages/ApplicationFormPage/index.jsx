import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { PageContainer, TitleContainer, FormContainer, Form } from './styled'
import { useState } from "react";


export default function ListTripsPage(props) {

  const [choosenTripName, setChoosenTripName] = useState(props.selectedTripToApply.name)
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [applicationText, setApplicationText] = useState('')
  const [profession, setProfession] = useState('')
  const [country, setCountry] = useState('')

  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }

  const goToListTrips = () => {
    history.push("/trips/list")
  }

  const handleSelectTrip = (event) => {
    setChoosenTripName(event.target.value)
  }

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleAge = (event) => {
    setAge(event.target.value)
  }

  const handleApplicationText = (event) => {
    setApplicationText(event.target.value)
  }

  const handleProfession = (event) => {
    setProfession(event.target.value)
  }
  
  const handleCountry = (event) => {
    setCountry(event.target.value)
  }

  const onSubmitForm = (event) => {
    event.preventDefault()

    const body = {
      name: name,
      age: age,
      applicationText: applicationText,
      profession: profession,
      country: country,
      trip: props.selectedTripToApply.id
    }

    console.log(body);
  }
  console.log(props.selectedTripToApply);

  const selectViagens = props.tripsList.map((trip) => {
    return (
      <option required key={trip.id}>
        {trip.name}
      </option>
    )
  })


  // console.log('selectedTripToApply', props.selectedTripToApply);
  // console.log('choosenTripName', choosenTripName);

  return (
    <PageContainer>
      <Header />

      <TitleContainer>
        <h1>
          Embarque nessa viagem
        </h1>
        <button onClick={goToHomePage}>Voltar para Home</button>
        <button onClick={goToListTrips}>goToListTrips</button>
      </TitleContainer>

      <FormContainer>
        <Form onSubmit={onSubmitForm}>
          <select value={choosenTripName} onChange={handleSelectTrip}>
            {selectViagens}
          </select>
          <input required type={'text'} placeholder={'Nome'} onChange={handleName}/>
          <input required type={'number'} placeholder={'Idade'} onChange={handleAge}/>
          <input required type={'text'} placeholder={'Texto de Candidatura'} onChange={handleApplicationText}/>
          <input required type={'text'} placeholder={'Profissão'} onChange={handleProfession}/>
          <input required type={'text'} placeholder={'País'} onChange={handleCountry}/>
          <button>Enviar</button>
        </Form>
      </FormContainer>

      <Footer />
    </PageContainer>
  );
}
