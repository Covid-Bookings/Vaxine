import React from 'react';
import { Link } from 'react-router-dom';
import './eligibility.css';

const EligibilityPage = () => {
    return (
			<div>
				<h1>Select your eligibility</h1>
				<div className='eligible-container'>
					<div className='eligibility-buttons'>
						<Link to='/form' >
						<button className='eligible-button'>65+</button>
						<button className='eligible-button'>Front Line</button>
						<button className='eligible-button'>
							Pre-Existing Conditions Patient
						</button>
						</Link>
					</div>
				</div>
				<h2 className='line-or'><span>OR</span></h2>
				<a
				 href='https://am-i-eligible.covid19vaccine.health.ny.gov/'
         target='_blank'
				className='eligible-button'>
					Not Listed?
					<br /> <i>Check eligibility here</i>
				</a>
				<div className='space'></div>
			</div>
		);
}

export default EligibilityPage
