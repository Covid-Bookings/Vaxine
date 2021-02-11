import React, { useState } from "react";
import DatePicker from "react-datepicker";
//CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker.css";

import HospitalImage from '../../images/national-cancer-institute.jpg';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <img src={HospitalImage} alt="hospital fossad"/>
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    </div>
  );
};

export default Calendar;