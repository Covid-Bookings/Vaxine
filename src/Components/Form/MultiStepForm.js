import React, { useState } from 'react';
import { useForm, useStep } from "react-hooks-helper";

// child components
import Name from './Name';
import AppointmentForm from './AppointmentForm';
import Review from './Review';
import Submit from './Submit';
import ConfirmationPage from './Confirmation';

const steps =[
   {id: 'name'},
   {id: 'appointmentform'},
   {id: "review"},
   {id: "submit"}, 
   {id: "confirmation"}, 
];

const defaultData = {
  firstName: "first name",
  lastName: "last name",
  phoneNumber: "phone number",
  email: "email",
  hospital: "hospital"
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
    case "confirmation": 
      return <ConfirmationPage formData={formData} {...props} />
    default:
      return null
  }
};

export default MultiStepForm;
