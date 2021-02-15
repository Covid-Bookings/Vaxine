import React from 'react';
import './appointmentform.css';

import ItemForm from './ItemForm';
import StateDropTimes from './StatedropTimes';
import StateDropHospitals from './StatedropHospitals';
import Calendar from './Calendar';
import HospitalImage from '../../images/national-cancer-institute.jpg';
import ProgressBarTwo from '../../images/progresstwo.png';

const AppointmentForm = ({ setForm, formData, navigation }) => {
	const { availability, date, time, hospital } = formData;

	const { previous, next } = navigation;

	return (
		<div className='appointment-container'>
			<div className='appointment-wrapper'>
			<div className="progress-bar-two">
			<img className="progress-bar-two" src={ProgressBarTwo} alt="progress bar step 2" />
			</div>
				<h2 id='register-two'>Register</h2>
				<img
					className='hospitalimg'
					src={HospitalImage}
					alt='hospital fossad'
				/>

				<div className='appointment-content'>
					<div className='time-container'>
						<div className='hospital-container'>
							<StateDropHospitals
								className='hospital-field'
								placeholder="Choose a Hospital"
								// label='Choose a Hospital  '
								name='hospital'
								// value={hospital}
								onChange={setForm}
							/>
						</div>
					</div>
					<Calendar
						className='calendar-widget'
						label='date'
						name='date'
						value={date}
						onChange={setForm}
					/>
				</div>
				<div className='btn-container'>
					<button className='previousbtn' onClick={previous}>
						Previous
					</button>
					<button className='nextbtn' onClick={next}>
						Next
					</button>
				</div>
					<div className='space'></div>
			</div>
		</div>
	);
};

export default AppointmentForm;
