import React from "react";

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import MultiStepForm from './Components/Form/MultiStepForm';
import Footer from './Components/Footer/index';
import Navbar from './Components/Navbar/index';

function App() {

  return (
    <>
    <Router>
      <Navbar />
    <h1>Home Component</h1>
    <Route path='/form' render={() => {
      return (
        <MultiStepForm />
      )
    }}
     />
     <Footer />
    </Router>
    </>
  );
}

export default App;
