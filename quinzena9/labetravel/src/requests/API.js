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

export const postCreateTrip = (body, setClear, redirect) => {

  const headers = {
    auth: localStorage.getItem("token")
  }

  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-rosa-munoz/trips`, body, { headers })
    .then((response) => {
      console.log('Enviou! ', response.data)
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
  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-rosa-munoz/trips/${tripId}/apply`, body)
    .then((response) => {
      console.log(response.data);
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
  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-rosa-munoz/login`, body)
    .then((response) => {
      console.log(response.data);
      localStorage.setItem("token", response.data.token)
      localStorage.setItem( "user", response.data.user.email)
      // setData(response.data.trips)
      console.log('Enviou! ', response.data)
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

  axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-rosa-munoz/trips/${tripId}/candidates/${candidateId}/decide`, body, { headers })
    .then((response) => {
      console.log('Enviou! ', response.data)
    }).catch((err) => {
      console.log('err', err.response);
      alert("Ops! Houve um erro. Por favor, tente novamente ou entre em contato conosco.")
    })

  // console.log("ENTROU NO PUTDECIDE", "\ntripId: ", tripId, "\ncandidateId: ", candidateId, "\nbody: ", body, "\nheaders: ", headers);
}

export const deleteTrip = (id, redirect) => {

  const headers = {
    auth: localStorage.getItem("token")
  }

  axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-rosa-munoz/trips/${id}`, { headers })
    .then((response) => {
      console.log('Deletou a viagem!', response.data);
      redirect('/admin/trips/list')
    }).catch((err) => {
      console.log('err', err.response.data);
    })
}