import React, { useState } from 'react';
import { useForm, useStep } from "react-hooks-helper";

// child components
import Name from './Name';
import AppointmentForm from './AppointmentForm';
import Review from './Review';
import Submit from './Submit';

const steps =[
   {id: 'name'},
   {id: 'appointmentform'},
   {id: "review"},
   {id: "submit"}, 
];

const defaultData = {
  firstName: " ",
  lastName: " "
};

const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const {step, navigation } = useStep({ initialStep: 0, steps});
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "name": 
      return <Name {...props} />
    case "appointmentform": 
      return <AppointmentForm {...props} />
    case "review": 
      return <Review {...props} />
    case "submit": 
      return <Submit {...props} />
    default:
      return null
  }
};

export default MultiStepForm;
