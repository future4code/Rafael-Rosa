import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { PageContainer, TitleContainer, ListContainer, CardTrip } from './styled'
import { SolidGreenButton } from "../../styles/styles";
import { useEffect, useState } from "react";
import { getTripsList } from "../../requests/API";

export default function AdminHomePage(props) {

  const history = useHistory()

  const [tripsList, setTripsList] = useState([])

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push('/login')
    }
    getTripsList(setTripsList)
  }, [])

  const goToDetails = (trip) => {
    changePage(`/admin/trips/${trip.id}`)
  }

  const changePage = (path) => {
    history.push(path)
  }

  const goBackPage = () => {
    history.goBack()
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
          <i className="fas fa-angle-double-right fa-2x"></i>
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
      </TitleContainer>

      <div>
        <SolidGreenButton onClick={goBackPage}>
          {'<'} Voltar
        </SolidGreenButton>
        <SolidGreenButton onClick={() => changePage('/admin/trips/create')}>
          Criar Viagem
        </SolidGreenButton>
      </div>

      {tripsList.length !== 0 ?
        <ListContainer>
          {lista}
        </ListContainer>
        :
        <ListContainer>
          OPS! Houve um erro ao carregar a lista.
          Por favor, atualize a página ou tente novamente mais tarde.
        </ListContainer>

      }

      <Footer />
    </PageContainer>
  );
}
