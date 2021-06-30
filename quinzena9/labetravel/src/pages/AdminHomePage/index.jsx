import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";

export default function AdminHomePage(props) {

  // useEffect(() => {
  //   if (!localStorage.getItem("token")){
  //     history.push('/login')
  //   }
  // }, [])

  const [tripDetails, setTripDetails] = useState('')

  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }

  const getTripDetail = (id) => {

    const token = localStorage.getItem("token")

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-rosa-munoz/trip/${id}`, {
      headers: {
        auth: token
      }
    })
      .then((response) => {
        console.log(response.data.trip.candidates)
        setTripDetails(response.data.trip)
      }).catch((err) => {
        console.log('err', err);
      })
  }

  const lista = props.tripsList.map((trip) => {
    return (
      <div key={trip.id}>
        <h2>{trip.name}</h2>
        <button onClick={() => getTripDetail(trip.id)}>x</button>
      </div>
    )
  })

  let candidates
  if (tripDetails) {
    candidates = tripDetails.candidates.map((candidate) => {
      return (
        <div key={candidate.id}>
          <h2>{candidate.name}</h2>
        </div>
      )
    })
  }

  return (
    <div>
      <Header />
      <p>AdminHomePage</p>
      <button onClick={goToHomePage}>Voltar para Home</button>
      {lista}
      {candidates}
    </div>
  );
}
