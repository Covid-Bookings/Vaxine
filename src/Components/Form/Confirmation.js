import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './confirmation.css';
import VaxineShotLogo from '../../images/vaxine-shot-logo.png';
import ProgressFour from '../../images/progressfour.png';

const ConfirmationPage = (props) => {
	const location = useLocation();
	// Gets back information object from client
	// console.log(location.state.formData);
	const {
		firstName,
		lastName,
		date,
		availability,
		hospital,
		email,
		phoneNumber
	} = location.state.formData;

	return (
		<div className='confirmation-wrapper'>
			<div className='confirmation-content'>
				<div className='progress-bar'>
					<img
						className='progress-bar'
						src={ProgressFour}
						alt='progress bar step 4'
					/>
				</div>
				<h1>
					Appointment <br />
					Confirmed
				</h1>
				<img className='vaxineimg' src={VaxineShotLogo} alt='vaxine-logo' />

						<div className='content'>
						 		<b>Name:</b> {firstName} {lastName}
						 	</div>
							 <div className='content'>
						 <b>Email:</b> {email}
						 </div>
							 <div className='content'>
						 <b>Phone Number:</b> {phoneNumber}
						 </div>
							 <div className='content'>
						 <b>Hospital:</b> {hospital}
						 </div>
						 	{/* Date: <span>{date}</span> */}

						 	{/* Time: <span>{date}</span> */}

	
				<div className='confirmation-updates-wrapper'>
				<div className='confirmation-updates'> 
				<p>
					YOU WILL BE RECEIVING A CONFIRMATION E-MAIL. PLEASE MAKE SURE TO BRING IT TO YOUR APPOINTMENT. 
				</p>
				<br></br>
				<br></br>
				<p>
					IF YOU NEED TO RESCHEDULE YOUR APPOINTMENT, MAKE SURE TO CANCEL YOUR CURRENT APPOINTMENT WITHIN 24 HOURS BEFORE THE CONFIRMED DATE AND TIME. 
				</p>
				</div>
				{/* <div className='button-wrapper'>
				<Link className='back-home-button' to='/'>
					Back to Home
				</Link> */}
				<div className='homebtn'>
				<Link  to='/'> <button>Home</button> </Link>
				</div>
			</div>
				<div className='space'> </div>
		</div>
	 </div>
	);
};

export default ConfirmationPage;
