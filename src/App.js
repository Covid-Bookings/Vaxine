import React from "react";

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import MultiStepForm from './Components/Form/MultiStepForm';
import Footer from './Components/Footer/index';
import Navbar from './Components/Navbar/index';
import LandingPage from './Components/LandingPage/index';
import ConfirmationPage from './Components/Form/Confirmation';

function App() {

  return (
    <>
    <Router>
      <Navbar />
    <Route path='/' exact render={() => {
      return (
        <LandingPage />
      )
    }}
    />
    <Route path='/form' exact render={() => {
      return (
        <MultiStepForm />
      )
    }}
     />
     <Footer />
     <Route path='/confirmation' exact render={() => {
       return (
         <ConfirmationPage />
       )
     }}
      />
    </Router>
    </>
  );
}

export default App;
