import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { PageContainer, TitleContainer, ListContainer, CardTrip } from './styled'

// const viagens = [
//   {
//     "id": "fASyoxeM4ksQzcrEZD5a",
//     "name": "Festança Marciana",
//     "durationInDays": 228,
//     "date": "21/12/21",
//     "description": "Uma viagem bem legal, na melhor época de marte",
//     "planet": "Marte"
//   },
//   {
//     "id": "jF6FCruXkzSaBW9e16vk",
//     "description": "Único tour que fazemos em planeta anão no sistema solar! Levem casacos que a previsão é de −230 °C",
//     "name": "Picnic de Inverno em Plutão",
//     "planet": "Plutão",
//     "durationInDays": 980,
//     "date": "21/12/20"
//   },
//   {
//     "id": "k5LYmxl7xGgRIHOnaOAE",
//     "description": "Noite mágica, com vista para as 69 luas de Jupiter",
//     "date": "21/12/20",
//     "name": "Multi luau em Jupiter",
//     "planet": "Jupiter",
//     "durationInDays": 540
//   },
//   {
//     "id": "zdUqOQUPLzSFGKiCX1Wj",
//     "description": "Nenhum surfista intergalático pode ficar fora dessa!",
//     "date": "21/12/20",
//     "name": "Surfando em Netuno",
//     "durationInDays": 540,
//     "planet": "Netuno"
//   }
// ]

export default function ListTripsPage(props) {
  const history = useHistory()

  // const goToHomePage = () => {
  //   history.push("/")
  // }

  const goToApplicationFormPage = (trip) => {
    history.push("/trips/application")
    props.selectTripToApply(trip)
  }


  const lista = props.tripsList.map((trip) => {
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
