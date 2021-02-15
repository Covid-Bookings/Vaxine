import React from 'react';
import './appointmentform.css';
import ItemForm from './ItemForm';
import StateDropTimes from './StatedropTimes';
import StateDropHospitals from './StatedropHospitals';
import Calendar from './Calendar';
import HospitalImage from '../../images/national-cancer-institute.jpg';
import ProgressTwo from '../../images/progresstwo.png';

const AppointmentForm = ({ setForm, formData, navigation }) => {
	const { availability, date, time, hospital } = formData;

	const { previous, next } = navigation;

	return (
		<div className='appointment-container'>
			<div className='appointment-wrapper'>
				<div className='progress-bar'>
					<img
						className='progress-bar'
						src={ProgressTwo}
						alt='progress bar step 2'
					/>
				</div>
				<h1>Register</h1>
				<img
					className='hospitalimg'
					src={HospitalImage}
					alt='hospital fossad'
				/>

				<div className='appointment-content'>
					<Calendar
						className='calendar-widget'
						label='date'
						name='date'
						value={date}
						onChange={setForm}
					/>
					<div className='time-container'>
						<StateDropTimes
							className='time-field'
							placeholder='Available Times'
							// label='Available times  '
							name='availability'
							// value={availability}
							onChange={setForm}
						/>
					</div>
					<div className='hospital-container'>
						<StateDropHospitals
							className='hospital-field'
							placeholder='Choose a Hospital'
							// label='Choose a Hospital  '
							name='hospital'
							// value={hospital}
							onChange={setForm}
						/>
					</div>
				</div>
				<div className='btn-container'>
					<button className='previousbtn' onClick={previous}>
						Previous
					</button>
					<button className='nextbtn' onClick={next}>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default AppointmentForm;
