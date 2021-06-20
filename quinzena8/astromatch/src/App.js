import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Homepage from './pages/Homepage'
import Matches from './pages/Matches'
import Header from './components/Header'

import { AppContainer } from './styled'


function App() {

  const [user, setUser] = useState('rafael-rosa')
  const [profileToChose, setProfileToChose] = useState('')
  const [currentPage, setCurrentPage] = useState('homepage')
  const [matches, setMatches] = useState([])


  useEffect(() => {
    getProfileToChose()
    getMatches()
  }, [])


  const changePage = (page) => {
    setCurrentPage(page)
  }

  const getProfileToChose = () => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user}/person`)
      .then((response) => {
        setProfileToChose(response.data.profile)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const postChoosePerson = (id, choice) => {

    const body = {
      "id": id,
      "choice": choice
    }

    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user}/choose-person`, body)
      .then((response) => {
        console.log(response.data, profileToChose.name)
        if (response.data.isMatch === true) {
          getMatches()
        }
        getProfileToChose()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const putClear = () => {
    axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user}/clear`)
      .then((response) => {
        response.data.message === 'Success' && getProfileToChose()
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getMatches = () => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user}/matches`)
      .then((response) => {
        console.log('response.data: ', response.data.matches)
        setMatches(response.data.matches)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const renderPage = () => {

    switch (currentPage) {
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

  // console.log(profileToChose)
  // console.log('matches: ', matches);

  return (
    <AppContainer>
      {renderPage()}
      {/* <button onClick={putClear}>apagar</button> */}
      <button onClick={getMatches}>Matches</button>
      <button onClick={() => { postChoosePerson(profileToChose.id) }}>escolher</button>

    </AppContainer>
  );
}

export default App;
