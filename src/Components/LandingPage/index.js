import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './landingPage.css';

const LandingPage = () => {
	return (
		<div className='landing-page-wrapper'>
			{/* problem rendering image and the list at the same time, no scroll, blocked by footer */}
			<img
				className='senior-vaccine'
				src='https://i.imgur.com/uYheX9P.jpg'
				alt='senior-citizen-getting-vaccine'
			/>
			<Link className='book-btn' to='/form'>
				Schedule Now
			</Link>
			<h2>Make a Vaccination Appointment</h2>
			<h1>in 5 easy steps</h1>
			<ul>
				<div className='steps'>
					<li className="landing-list">
						<span>1</span> Check Eligibility
					</li>
				</div>
				<div className='steps'>
					<li className="landing-list">
						<span>2</span> Find a COVID-19 vaccine location
					</li>
				</div>
				<div className='steps'>
					<li className="landing-list">
						<span>3</span> Select an available day and time
					</li>
				</div>
				<div className='steps'>
					<li className="landing-list">
						<span>4</span> Register
					</li>
				</div>
				<div className='steps'>
					<li className="landing-list">
						<span>5</span> Confirm
					</li>
				</div>
			</ul>
		</div>
	);
};

export default LandingPage;
