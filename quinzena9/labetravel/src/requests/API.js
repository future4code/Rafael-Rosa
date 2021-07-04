import axios from "axios";

export const getTripsList = (setData) => {
  
  axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-rosa-munoz/trips`)
    .then((response) => {
      console.log('Fez a requisição!', response.data.trips);
      setData(response.data.trips)
    }).catch((err) => {
      console.log('err', err);
    })
}

export const getTripDetails = (id, setData) => {

  axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-rosa-munoz/trip/${id}`, {
    headers: {
      auth: localStorage.getItem("token")
    }
  })
    .then((response) => {
      console.log('Fez a requisição getTripDetails!', response.data.trip);
      setData(response.data.trip)
    }).catch((err) => {
      console.log('err', err);
    })
}

export const postApplyToTrip = (travelId, body, setClear) => {
  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-rosa-munoz/trips/${travelId}/apply`, body)
    .then((response) => {
      console.log(response.data);
      alert("Seu cadastro foi enviado. Entraremos em contato em breve.")
      setClear(true)
    }).catch((err) => {
      console.log('err', err);
      alert("Ops! Houve um erro. Por favor, tente novamente ou entre em contato conosco.")
    })
}

export const postLogin = (body, redirect) => {
  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-rosa-munoz/login`, body)
    .then((response) => {
      console.log(response.data);
      localStorage.setItem("token", response.data.token)
      // setData(response.data.trips)
      console.log('Enviou! ', response.data)
      redirect('/admin/trips/list')
    }).catch((err) => {
      console.log('err', err);
      alert("Ops! Houve um erro. Por favor, tente novamente ou entre em contato conosco.")
    })
}