import { useHistory } from "react-router-dom"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

import { PageContainer, TitleContainer, ListContainer, CardTrip } from './styled'
import { SolidGreenButton, SolidYellowButton } from "../../styles/styles"
import { useEffect, useState } from "react"
import { getTripsList } from "../../requests/API"


export default function ListTripsPage(props) {
  const history = useHistory()

  const [tripsList, setTripsList] = useState([])

  useEffect(() => {
    getTripsList(setTripsList)
  }, [])

  const goToApplicationFormPage = (trip) => {
    history.push("/trips/application")
    props.selectTripToApply(trip)
  }

  const goBackPage = () => {
    history.goBack()
  }

  const lista = tripsList.map((trip) => {
    return (
      <CardTrip key={trip.id}>
        <h2>{trip.name}</h2>
        <p>{trip.description}</p>
        <p><strong>Local: </strong>{trip.planet}</p>
        <p><strong>Data: </strong>{trip.date}</p>
        <p><strong>Duração: </strong>{trip.durationInDays} dias</p>
        <SolidYellowButton onClick={() => goToApplicationFormPage(trip)}>Quero me cadastrar!</SolidYellowButton>
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
      </TitleContainer>

      <div>
        <SolidGreenButton onClick={goBackPage}>{'<'} Voltar</SolidGreenButton>
      </div>

      <ListContainer>
        {lista}
      </ListContainer>

      <Footer />
    </PageContainer>
  );
}
