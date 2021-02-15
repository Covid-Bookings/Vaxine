import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MultiStepForm from './Components/Form/MultiStepForm';
import Footer from './Components/Footer/index';
import Navbar from './Components/Navbar/index';
import LandingPage from './Components/LandingPage/index';
import EligibilityPage from './Components/EligibilityPage/index'
import ConfirmationPage from './Components/Form/Confirmation';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Route
					path='/'
					exact
					render={() => {
						return <LandingPage />;
					}}
				/>
				<Route path='/eligibility'
						exact 
						render={() => {
							return <EligibilityPage />
						}}
						/>
				<Route
					path='/form'
					exact
					render={() => {
						return <MultiStepForm />;
					}}
				/>
				<Route
					path='/confirmation'
					render={() => {
						return <ConfirmationPage />;
					}}
				/>
			</Router>
			<Footer />
		</>
	);
}

export default App;
