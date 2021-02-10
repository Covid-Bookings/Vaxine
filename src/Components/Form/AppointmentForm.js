
import React from "react";

import ItemForm from "./ItemForm";
import StateDrop from './Statedrop';
import Calendar from './Calendar';

const AppointmentForm = ({ setForm, formData, navigation }) => {

  const { availability, date, time} = formData;

  const { previous, next } = navigation;

  return (
    <div className="form">
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
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default AppointmentForm;