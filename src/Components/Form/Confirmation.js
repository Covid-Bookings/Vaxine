import React from 'react';
import { useLocation } from 'react-router-dom';
import './confirmation.css';
import VaxineShotLogo from '../../images/vaxine-shot-logo.png';

const ConfirmationPage = (props) => {
	const location = useLocation();
	// Gets back information object from client
	console.log(location.state.formData);
	const {
		firstName,
		lastName,
		date,
		time,
		availability,
		hospital,
	} = location.state.formData;

	return (
		<div className='confirmation-wrapper'>
			<div className='confirmation-content'>
				<h1>
					Appointment <br />
					Confirmed
				</h1>
				<img src={VaxineShotLogo} alt='vaxine-logo' />
				<h4>
					<div name='firstName'>
						Name: <span>{`${firstName} ${lastName}`}</span>
					</div>
				</h4>
				<h4>
					Location: <span>{hospital}</span>
				</h4>
				<h4>
					Date: <span>{date}</span>
				</h4>
				<h4>
					Time: <span>{availability}</span>
				</h4>
				<br />
				<p>
					You will be receiving a confirmation e-mail. Please make sure to bring
					it to your appointment.
				</p>
				<br />
				<p>
					If you need to reschedule your appointment, make sure to cancel your
					current appointment within 24 hr before the confirmed date and time.
				</p>
				<br />
				<br />
				{/* <div className='button-wrapper'>
				<Link className='back-home-button' to='/'>
					Back to Home
				</Link> */}
			</div>
		</div>
		// </div>
	);
};

export default ConfirmationPage;
