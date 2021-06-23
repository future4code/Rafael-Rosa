import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Register from './pages/Register'
import Homepage from './pages/Homepage'
import Matches from './pages/Matches'
import Header from './components/Header'
import { urlAPI } from './constants/api'

import { AppContainer, Loader, AlertMatch } from './styled'


function App() {

  const [user, setUser] = useState('rafael-rosa')
  const [profileToChose, setProfileToChose] = useState('')
  const [currentPage, setCurrentPage] = useState('register')
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(false)
  const [newMatch, setNewMatch] = useState(false)


  useEffect(() => {
    getProfileToChose()
    getMatches()
  }, [])

  useEffect(() => {
    setLoading(false)
  }, [profileToChose, currentPage, user])


  const getProfileToChose = () => {
    setLoading(true)
    axios.get(`${urlAPI}/${user}/person`)
      .then((response) => {
        setProfileToChose(response.data.profile)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const postChoosePerson = (id, choice) => {
    setLoading(true)

    const body = {
      "id": id,
      "choice": choice
    }

    axios.post(`${urlAPI}/${user}/choose-person`, body)
      .then((response) => {
        if (response.data.isMatch === true) {
          getMatches()
          matchAlert()
        }
        getProfileToChose()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const putClear = () => {
    setLoading(true)
    axios.put(`${urlAPI}/${user}/clear`)
      .then((response) => {
        response.data.message === 'Success' && changePage('register')
        setUser('')
        getProfileToChose()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getMatches = () => {
    setLoading(true)

    axios.get(`${urlAPI}/${user}/matches`)
      .then((response) => {
        setMatches(response.data.matches)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const changePage = (page) => {
    setCurrentPage(page)
    page === 'matches' && getMatches()
  }

  const RegisterUser = (username) => {
    setUser(username)
    changePage('homepage')
  }

  const matchAlert = () => {
    setNewMatch(true)
    setTimeout(() => {
      setNewMatch(false)
    }, 1500);

  }

  const renderPage = () => {

    if (loading) {
      return <Loader>
        <h1>Carregando...</h1>
      </Loader>
    } else {
      
      switch (currentPage) {
        case 'register':
          return (
            <Register
              RegisterUser={RegisterUser}
              user={user}
            />
          )
        case 'homepage':
          return (
            <Homepage
              profileToChose={profileToChose}
              postChoosePerson={postChoosePerson}
              currentPage={currentPage}
              changePage={changePage}
              putClear={putClear}
            />
          )
        case 'matches':
          return (
            <Matches
              currentPage={currentPage}
              changePage={changePage}
              putClear={putClear}
              matches={matches}
            />
          )
        default:
          return (
            <>
              <Header
                currentPage={currentPage}
                changePage={changePage}
                putClear={putClear}
              />
              <p>Ocorreu um Erro</p>
            </>
          )
      }
    }
  }

  return (
    <AppContainer>
      {newMatch && <AlertMatch>Você tem um novo Match! :)</AlertMatch>}
      {renderPage()}
    </AppContainer>
  );
}

export default App;
