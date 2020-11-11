import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../components/Home'
import ListTripsPage from '../components/ListTripsPage'
import TripDetailsPage from '../components/TripDetailsPage'
import ApplicationFormPage from '../components/ApplicationFormPage'
import CreateTripPage from '../components/CreateTripPage'
import Login from '../components/Login'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SignUp from '../components/SignUp'

import DetailsCandidates from '../components/DetailsCandidates';

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/viagens">
            <Header />
            <ListTripsPage />
            <Footer />
          </Route>
          <Route exact path="/viagens/detalhes/:id">
            <Header />
            <TripDetailsPage />
            <Footer />
          </Route>
          <Route exact path="/viagens/formulario/:id">
            <Header />
            <ApplicationFormPage />
            <Footer />
          </Route>
          <Route exact path="/login">
              <Header />
              <Login />
          </Route>
          <Route exact path="/login/signup">
              <Header />
              <SignUp />
          </Route>
          <Route exact path="/criarViagem">
              <Header />
              <CreateTripPage />
              <Footer />
          </Route>
          <Route>
              <Header />
              <p>Erro 404</p>
              <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;