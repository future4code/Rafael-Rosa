import { useHistory, useParams } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { PageContainer, TitleContainer, ListContainer, CardTrip, EmptyListMessage } from './styled'
import { SolidYellowButton, SolidGreenButton } from "../../styles/styles";
import { useEffect, useState } from "react";
import { deleteTrip, getTripDetails, putDecide } from "../../requests/API";

export default function TripDetailsPage() {

  const history = useHistory()
  const pathParams = useParams()

  const [trip, setTrip] = useState({})

  useEffect(() => {
    getTripDetails(pathParams.id, setTrip)
    if (!localStorage.getItem("token")) {
      history.push('/login')
    }
  }, [])


  const changePage = (path) => {
    history.push(path)
  }

  const goBackPage = () => {
    history.goBack()
  }

  const deleteSelectedTrip = (tripId) => {
    const confirm = window.confirm('Você realmente deseja apagar essa viagem? Os dados não poderão ser recuperados.')

    if (confirm) {
      deleteTrip(tripId, changePage)
    }
  }

  const decideApplication = (candidateId, response) => {
    const body = {
      "approve": response
    }

    putDecide(trip.id, candidateId, body)

    // Possível problema de atualização de página
    getTripDetails(pathParams.id, setTrip)
  }

  let candidatesList
  if (trip.candidates) {
    if (trip.candidates.length === 0) {
      candidatesList = <EmptyListMessage>Não há pessoas inscritas</EmptyListMessage>
    } else {
      candidatesList = trip.candidates.map((person) => {
        return (
          <CardTrip key={person.id}>
            <div>
              <h2>{person.name}</h2>
              <p>{person.applicationText}</p>
              <p>
                <strong>Idade: </strong>{person.age} •
                <strong> Profissão: </strong>{person.profession} •
                <strong> País: </strong>{person.country}
              </p>
            </div>
            <div>
              <SolidYellowButton onClick={() => decideApplication(person.id, true)}>
                Aceitar
              </SolidYellowButton>
              <SolidYellowButton onClick={() => decideApplication(person.id, false)}>
                Recusar
              </SolidYellowButton>
            </div>
          </CardTrip>
        )
      })
    }
  }

  let candidatesApproved
  if (trip.approved) {
    if (trip.approved.length === 0) {
      candidatesApproved = <EmptyListMessage>Não há candidatos aprovados.</EmptyListMessage>
    } else {
      candidatesApproved = trip.approved.map((person) => {
        return (
          <CardTrip key={person.id}>
            <div>
              <h2>{person.name}</h2>
              <p>{person.applicationText}</p>
              <p>
                <strong>Idade: </strong>{person.age} •
                <strong> Profissão: </strong>{person.profession} •
                <strong> País: </strong>{person.country}
              </p>
            </div>
          </CardTrip>
        )
      })
    }
  }


  return (
    <PageContainer>
      <Header />

      <TitleContainer>
        <h1>
          Detalhes da Viagem
        </h1>
      </TitleContainer>

      <div>
        <SolidGreenButton onClick={goBackPage}>
          {'<'} Voltar
        </SolidGreenButton>
      </div>

      <ListContainer>
        <CardTrip key={trip.id}>
          <div>
            <h2>{trip.name}</h2>
            <p>{trip.description}</p>
            <p>
              <strong>Local: </strong>{trip.planet} •
              <strong> Data: </strong>{trip.date} •
              <strong> Duração: </strong>{trip.durationInDays} dias
            </p>
          </div>
          <div>
            <SolidYellowButton onClick={() => deleteSelectedTrip(trip.id)}>
              Deletar Viagem
            </SolidYellowButton>
          </div>
        </CardTrip>

        <h2>Candidatos para aprovar</h2>
        {candidatesList}

        <h2>Candidatos Aprovados</h2>
        {candidatesApproved}
      </ListContainer>

      <Footer />
    </PageContainer>
  );
}
