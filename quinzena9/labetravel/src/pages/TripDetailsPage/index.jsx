import { useHistory, useParams } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { PageContainer, TitleContainer, ListContainer, CardTrip } from './styled'
import { useEffect, useState } from "react";
import { getTripDetails, getTripsList } from "../../requests/API";

export default function TripDetailsPage() {

  const history = useHistory()
  const pathParams = useParams()

  const [trip, setTrip] = useState({})

  console.log('RENDERIZOU');

  useEffect(() => {
    getTripDetails(pathParams.id, setTrip)
    if (!localStorage.getItem("token")) {
      history.push('/login')
    }
  }, [])
  
  useEffect(() => {
    console.log('ATUALIZOU TRIP', trip);
  }, [trip])


  const changePage = (path) => {
    history.push(path)
  }


  // const candidatesList = trip.candidates.map((person) => {
  //   return (
  //     <CardTrip key={person.id}>
  //       <div>
  //         <h2>{person.name}</h2>
  //         <p>{person.applicationText}</p>
  //         <p>
  //           <strong>Idade: </strong>{person.age} •
  //           <strong> Profissão: </strong>{person.profession} •
  //           <strong> País: </strong>{person.country} dias
  //         </p>
  //       </div>
  //       <div>
  //         <button>Aceitar</button>
  //         <button>Recusar</button>
  //       </div>
  //     </CardTrip>
  //   )
  // })
  
  // const candidatesApproved = trip.approved.map((person) => {
  //   return (
  //     <CardTrip key={person.id}>
  //       <div>
  //         <h2>{person.name}</h2>
  //         <p>{person.applicationText}</p>
  //         <p>
  //           <strong>Idade: </strong>{person.age} •
  //           <strong> Profissão: </strong>{person.profession} •
  //           <strong> País: </strong>{person.country} dias
  //         </p>
  //       </div>
  //       <div>
  //         <button>Remover</button>
  //       </div>
  //     </CardTrip>
  //   )
  // })


  return (
    <PageContainer>
      <Header />

      <TitleContainer>
        <h1>
          Detalhes da Viagem
        </h1>
      </TitleContainer>

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
            <button>Aceitar</button>
          </div>
        </CardTrip>

        <h2>Candidatos para aprovar</h2>
        {/* {candidatesList} */}

        {/* <h2>Candidatos Recusados</h2>
        {candidatesApproved} */}
      </ListContainer>

      <Footer />
    </PageContainer>
  );
}
