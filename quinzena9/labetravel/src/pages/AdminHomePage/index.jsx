import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { PageContainer, TitleContainer, ListContainer, CardTrip } from './styled'
import { useEffect, useState } from "react";
import { getTripsList } from "../../requests/API";

export default function AdminHomePage(props) {

  const history = useHistory()

  const [tripsList, setTripsList] = useState([])

  useEffect(() => {
    getTripsList(setTripsList)
    if (!localStorage.getItem("token")) {
      history.push('/login')
    }
  }, [])

  const goToDetails = (trip) => {
    console.log(trip)
    changePage(`/admin/trips/${trip.id}`)
  }

  const changePage = (path) => {
    history.push(path)
  }

  const lista = tripsList.map((trip) => {
    return (
      <CardTrip key={trip.id} onClick={() => goToDetails(trip)}>
        <div>
          <h2>{trip.name}</h2>
          <p>
            <strong>Local: </strong>{trip.planet} •
            <strong> Data: </strong>{trip.date} •
            <strong> Duração: </strong>{trip.durationInDays} dias
          </p>
        </div>
        <div>
          <button>Deletar</button>
        </div>
      </CardTrip>
    )
  })

  return (
    <PageContainer>
      <Header />

      <TitleContainer>
        <h1>
          Painel
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
