import React, { useState } from "react";
import DatePicker from "react-datepicker";
//CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    </div>
  );
};

export default Calendar;