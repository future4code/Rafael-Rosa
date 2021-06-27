import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { PageContainer, TitleContainer, FormContainer, FormApply } from './styled'
import { useState } from "react";


export default function ListTripsPage(props) {

  const [choosenTripName, setChoosenTripName] = useState(props.selectedTripToApply.name)
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

  const handleSubmitForm = () => {
    console.log('form enviado');
  }

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
        <FormApply action={'/trips/list'} onSubmit={handleSubmitForm}>
          <select value={choosenTripName} onChange={handleSelectTrip}>
            {selectViagens}
          </select>
          <input required type={'text'} placeholder={'Nome'} />
          <input required type={'number'} placeholder={'Idade'} />
          <input required type={'text'} placeholder={'Texto de Candidatura'} />
          <input required type={'text'} placeholder={'Profissão'} />
          <input required type={'text'} placeholder={'País'} />
          <button>Enviar</button>
        </FormApply>
      </FormContainer>

      <Footer />
    </PageContainer>
  );
}
