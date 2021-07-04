import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { PageContainer, TitleContainer, ListContainer, CardTrip } from './styled'
import { useEffect, useState } from "react";
import { getTripsList } from "../../requests/API";


export default function ListTripsPage(props) {
  const history = useHistory()

  const [tripsList, setTripsList] = useState([])

  useEffect(() => {
    getTripsList(setTripsList)
  }, [])

  // const goToHomePage = () => {
  //   history.push("/")
  // }

  const goToApplicationFormPage = (trip) => {
    history.push("/trips/application")
    props.selectTripToApply(trip)
  }


  const lista = tripsList.map((trip) => {
    return (
      <CardTrip key={trip.id}>
        <h2>{trip.name}</h2>
        <p>{trip.description}</p>
        <p><strong>Local: </strong>{trip.planet}</p>
        <p><strong>Data: </strong>{trip.date}</p>
        <p><strong>Duração: </strong>{trip.durationInDays} dias</p>
        <button onClick={() => goToApplicationFormPage(trip)}>Quero me cadastrar!</button>
      </CardTrip>
    )
  })

  return (
    <PageContainer>
      <Header />

      <TitleContainer>
        <h1>
          Viagens
        </h1>

        {/* <button onClick={goToHomePage}>Voltar para Home</button> */}

      </TitleContainer>
      <ListContainer>
        {lista}
      </ListContainer>

      <Footer />
    </PageContainer>
  );
}
