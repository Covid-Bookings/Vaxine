import React from "react";

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import MultiStepForm from './Components/Form/MultiStepForm';

function App() {

  return (
    <>
    <Router>
    <h1>Hello World</h1>
    <Route path='/form' render={() => {
      return (
        <MultiStepForm />
      )
    }}
     />
    </Router>
    </>
  );
}

export default App;
