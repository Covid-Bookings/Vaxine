
import React from "react";
import './name.css';

import ItemForm from "./ItemForm";
import HospitalImage from '../../images/national-cancer-institute.jpg';
import Footer from '../../Components/Footer/index';

const Name = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, phoneNumber, email} = formData;

  const { next } = navigation;

  return (
    <div className="first-form-wrapper">
      <h1>Register</h1>
      <div className="form-content">
      <img  className="hospitalimg" src={HospitalImage} alt="hospital fossad" />
      <ItemForm
        className="firstform"
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
      />
      </div>
      <div className="form-content">
      <ItemForm
        className="firstform"
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={setForm}
      />
      </div>
      <div className="form-content">
      <ItemForm
        className="firstform"
        label="Phone Number"
        name="phoneNumber"
        value={phoneNumber}
        onChange={setForm}
      />
      </div>
      <div className="form-content">
      <ItemForm
        className="firstform"
        label="Email"
        name="email"
        value={email}
        onChange={setForm}
      />
      </div>
      <div className="btn-wrapper">
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Name;