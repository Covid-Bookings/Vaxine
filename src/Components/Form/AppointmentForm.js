import React from 'react';
import './appointmentform.css';
import ItemForm from "./ItemForm";
import StateDrop from './Statedrop';
import Calendar from './Calendar';
import HospitalImage from '../../images/national-cancer-institute.jpg';


const AppointmentForm = ({ setForm, formData, navigation }) => {
	const { availability, date, time } = formData;

	const { previous, next } = navigation;

	return (
		<div className='form'>
			<Calendar
				label='date'
				value={date}
				onChange={setForm}
			/>
    
      <StateDrop label="Available Times" name="availability" value={availability} onChange={setForm} />
      </div>
      <div className="btn-container">
        <button className="previousbtn" onClick={previous}>Previous</button>
        <button className="nextbtn" onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default AppointmentForm;
