import axios from "axios";

const BASE_URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX'

export const getTripsList = (setData) => {

  axios.get(`${BASE_URL}/rafael-rosa-munoz/trips`)
    .then((response) => {
      setData(response.data.trips)
    }).catch((err) => {
      console.log('err', err);
    })
}

export const getTripDetails = (id, setData) => {

  axios.get(`${BASE_URL}/rafael-rosa-munoz/trip/${id}`, {
    headers: {
      auth: localStorage.getItem("token")
    }
  })
    .then((response) => {
      setData(response.data.trip)
    }).catch((err) => {
      console.log('err', err);
    })
}

export const postCreateTrip = (body, setClear, redirect) => {

  const headers = {
    auth: localStorage.getItem("token")
  }

  axios.post(`${BASE_URL}/rafael-rosa-munoz/trips`, body, { headers })
    .then((response) => {
      if (setClear) {
        setClear(true)
      }
      redirect('/trips/list')
    }).catch((err) => {
      console.log('err', err.response);
      alert("Ops! Houve um erro. Por favor, tente novamente ou entre em contato conosco.")
    })
}

export const postApplyToTrip = (tripId, body, setClear, redirect) => {
  axios.post(`${BASE_URL}/rafael-rosa-munoz/trips/${tripId}/apply`, body)
    .then((response) => {
      alert("Seu cadastro foi enviado. Entraremos em contato em breve.")
      if (setClear) {
        setClear(true)
      }
      redirect('/trips/list')
    }).catch((err) => {
      console.log('err', err);
      alert("Ops! Houve um erro. Por favor, tente novamente ou entre em contato conosco.")
    })
}

export const postLogin = (body, redirect) => {
  axios.post(`${BASE_URL}/rafael-rosa-munoz/login`, body)
    .then((response) => {
      alert("Sucesso! Caso a lista não apareça, atualize a página, por favor.")
      localStorage.setItem("token", response.data.token)
      localStorage.setItem( "user", response.data.user.email)
      redirect('/admin/trips/list')
    }).catch((err) => {
      console.log('err', err);
      alert("Ops! Houve um erro. Por favor, tente novamente ou entre em contato conosco.")
    })
}

export const putDecide = (tripId, candidateId, body) => {

  const headers = {
    auth: localStorage.getItem("token")
  }

  axios.put(`${BASE_URL}/rafael-rosa-munoz/trips/${tripId}/candidates/${candidateId}/decide`, body, { headers })
    .then((response) => {
    }).catch((err) => {
      console.log('err', err.response);
      alert("Ops! Houve um erro. Por favor, tente novamente ou entre em contato conosco.")
    })
}

export const deleteTrip = (id, redirect) => {

  const headers = {
    auth: localStorage.getItem("token")
  }

  axios.delete(`${BASE_URL}/rafael-rosa-munoz/trips/${id}`, { headers })
    .then((response) => {
      redirect('/admin/trips/list')
    }).catch((err) => {
      console.log('err', err.response.data);
    })
}