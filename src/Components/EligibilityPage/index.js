import React from 'react';
import './eligibility.css';

const EligibilityPage = () => {
    return (
			<div>
				<h1>Select your eligibility</h1>
				<div className='eligible-container'>
					<div className='eligibility-buttons'>
						<button className='eligible-button'>65+</button>
						<button className='eligible-button'>Front Line</button>
						<button className='eligible-button'>
							Pre-Existing Conditions Patient
						</button>
					</div>
				</div>
				<h2 className='line-or'><span>OR</span></h2>
				<button className='eligible-button'>
					Not Listed?
					<br /> <i>Check eligibility here</i>
				</button>
			</div>
		);
}

export default EligibilityPage
