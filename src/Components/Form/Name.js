
import React from "react";

import ItemForm from "./ItemForm";

const Name = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, phoneNumber, email} = formData;

  const { next } = navigation;

  return (
    <div className="form">
      <ItemForm
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
      />
      <ItemForm
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={setForm}
      />
      <ItemForm
        label="Phone Number"
        name="phoneNumber"
        value={phoneNumber}
        onChange={setForm}
      />
      <ItemForm
        label="email"
        name="email"
        value={email}
        onChange={setForm}
      />
      <div>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Name;