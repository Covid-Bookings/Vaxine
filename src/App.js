import React from "react";

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import MultiStepForm from './Components/Form/MultiStepForm';
import Footer from './Components/Footer/index';
import Navbar from './Components/Navbar/index';
import LandingPage from './Components/LandingPage/index';
import ConfirmationPage from './Components/ConfirmationPage/index';

function App() {

  return (
    <>
    <Router>
      <Navbar />
    <Route path='/' render={() => {
      return (
        <LandingPage />
      )
    }}
    />
    <Route path='/form' render={() => {
      return (
        <MultiStepForm />
      )
    }}
     />
     <Footer />
     <Route path='/confirmation' render={() => {
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
