import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

//CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Calendar = ({ onChange }) => {
	const [startDate, setStartDate] = useState(new Date());

	return (
		<DatePicker
			selected={startDate}
			onChange={(date) => {
				setStartDate(date);
				onChange({
					target: {
						name: 'date',
						value: date,
					},
				});
			}}
		/>
	);
};

export default Calendar;
