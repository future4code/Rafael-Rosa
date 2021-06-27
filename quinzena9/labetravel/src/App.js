import axios from "axios";
import { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";

import AdminHomePage from "./pages/AdminHomePage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import CreateTripPage from "./pages/CreateTripPage";
import HomePage from "./pages/HomePage";
import ListTripsPage from "./pages/ListTripsPage";
import LoginPage from "./pages/LoginPage";
import TripDetailsPage from "./pages/TripDetailsPage";


export default function App() {

  const [tripsList, setTripsList] = useState([])
  const [selectedTripToApply, setSelectedTripToApply] = useState('')

  useEffect(() => {
    getTripsList()
  }, [])

  const getTripsList = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-rosa-munoz/trips`)
      .then((response) => {
        setTripsList(response.data.trips)
      }).catch((err) => {
        console.log('err', err);
      })
  }

  const selectTripToApply = (trip) => {
    setSelectedTripToApply(trip)
  }


  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>

        {/* <Route exact path="/">
          <ListaViagens />
        </Route> */}

        <Route exact path="/">
          <HomePage
            getTripsList={getTripsList}
          />
        </Route>

        <Route exact path="/trips/list">
          <ListTripsPage
            tripsList={tripsList}
            selectTripToApply={selectTripToApply}
          />
        </Route>

        <Route exact path="/trips/application">
          <ApplicationFormPage
            tripsList={tripsList}
            selectedTripToApply={selectedTripToApply}
          />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/admin/trips/list">
          <AdminHomePage />
        </Route>

        <Route exact path="/admin/trips/:id">
          <TripDetailsPage />
        </Route>

        <Route exact path="/admin/trips/create">
          <CreateTripPage />
        </Route>

        <Redirect to="/" />

      </Switch>

    </BrowserRouter>
  );
}
