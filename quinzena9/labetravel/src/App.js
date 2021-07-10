import { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";

import AdminHomePage from "./pages/AdminHomePage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import CreateTripPage from "./pages/CreateTripPage";
import HomePage from "./pages/HomePage";
import ListTripsPage from "./pages/ListTripsPage";
import LoginPage from "./pages/LoginPage";
import TripDetailsPage from "./pages/TripDetailsPage";


export default function App() {

  // const [tripsList, setTripsList] = useState([])
  const [selectedTripToApply, setSelectedTripToApply] = useState('')

  // const body = {
  //   "name": "Astrodev",
  //   "age": 20,
  //   "applicationText": "Quero muuuuuuito ir!!!",
  //   "profession": "Chefe",
  //   "country": "Brasil"
  // }

  // const login = {
  //   "email": "admin@labetravel.com.br",
  //   "password": "123456"
  // }

  useEffect(() => {
    // getTripsList(setTripsList)
  }, [])

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
            // getTripsList={getTripsList}
          />
        </Route>

        <Route exact path="/trips/list">
          <ListTripsPage
            // tripsList={tripsList}
            selectTripToApply={selectTripToApply}
          />
        </Route>

        <Route exact path="/trips/application">
          <ApplicationFormPage
            // tripsList={tripsList}
            selectedTripToApply={selectedTripToApply}
          />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/admin/trips/list">
          {localStorage.getItem("token") ? <AdminHomePage /> : <LoginPage />}
        </Route>

        <Route exact path="/admin/trips/create">
          {localStorage.getItem("token") ? <CreateTripPage /> : <LoginPage />}
        </Route>

        <Route exact path="/admin/trips/:id">
          {localStorage.getItem("token") ? <TripDetailsPage /> : <LoginPage />}
        </Route>

        <Redirect to="/" />

      </Switch>

    </BrowserRouter>
  );
}
