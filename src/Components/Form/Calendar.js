import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
//CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ onChange }) => {
	const [startDate, setStartDate] = useState(new Date());
	return (
		<DatePicker
		// placeholderText="Click to select a date"
		onChange={(date) => {
			setStartDate(date);
			onChange({
					target: {
						name: 'date',
						value: date,
					},
				});
			}}
			selected={startDate}
			showTimeSelect
			dateFormat="Pp"
			withPortal
		/>
	);
};

export default Calendar;
