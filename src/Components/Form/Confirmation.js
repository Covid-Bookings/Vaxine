import React from 'react';
import { Link } from 'react-router-dom';
import './confirmation.css';
import VaxineShotLogo from '../../images/vaxine-shot-logo.png'

const ConfirmationPage = ({ formData }) => {
	const {
    firstName = ('first name')
    // lastName,
    // phoneNumber,
    // email,
    // date,
    // time,
    // availability,
    // hospital
  } = formData;

	return (
			<div className='confirmation-wrapper'>
				<div className='confirmation-content'>
					<h1>
						Appointment <br />
						Confirmed 
					</h1>
                    <img src={VaxineShotLogo} alt="vaxine-logo"/>
					<h4>
						<div name="firstName">
						Name: <span name="firstName">{`${firstName}`}</span>
						</div>
					</h4>
					<h4>
						Location: <span>14 Hospital Blvd</span>
					</h4>
					<h4>
						Date: <span>02/09/21</span>
					</h4>
					<h4>
						Time: <span>3:00 PM</span>
					</h4>
					<br />
					<p>
						You will be receiving a confirmation e-mail. Please make sure to
						bring it to your appointment.
					</p>
					<br />
					<p>
						If you need to reschedule your appointment, make sure to cancel your
						current appointment within 24 hr before the confirmed date and time.
					</p>
					<br />
					<br />
			<div className='button-wrapper'>
				<Link className='back-home-button' to='/'>
					Back to Home
				</Link>
			</div>
			</div>
				</div>
	);
};

export default ConfirmationPage;
