
import React from "react";

import ItemForm from "./ItemForm";
import StateDrop from './Statedrop';
import Calendar from './Calendar';
import Disclaimer from './Disclaimer';

const AppointmentForm = ({ setForm, formData, navigation }) => {

  const { availability, date, time} = formData;

  const { previous, next } = navigation;

  return (
    <div className="form">
      <h1>Register</h1>
      {/* <ItemForm
        label="time"
        name="time"
        value={availability}
        onChange={setForm}
        /> */}
      <Calendar 
      // starDate={startDate}
      // setStartDate={setStartDate}
      label="date"
      name="date"
      value={date}
      onChange={setForm}
      />
      {/* <ItemForm
        label="date"
        name="date"
        value={date}
        onChange={setForm}
      /> */}
      <StateDrop label="Available Times" name="availability" value={availability} onChange={setForm} />

      <div>
        <button className="previousbtn" onClick={previous}>Previous</button>
        <button className="nextbtn" onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default AppointmentForm;