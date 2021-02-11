import React from "react";

const Review = ({ setForm, formData, navigation }) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    date,
    time,
    availability
  } = formData;

  const { previous } = navigation;

  const { go } = navigation;

  return (
    <div className="form">
      <h3>Review your data</h3>
      {/* <h4>
        Name
        <button onClick={() => go("names")}>Edit</button>
      </h4> */}
      <div>
        {" "}
        First name: {`${firstName}`},
        <br />
        Last Name: {`${lastName}`},
      </div>
      <div>phoneNumber: {`${phoneNumber}`}</div>
      <div>email: {`${email}`}</div>
      <div>date: {`${date}`}</div>
      <div>time: {`${availability}`}</div>
      {/* <h4>
        Address
        <button onClick={() => go("address")}>Edit</button>
      </h4> */}
      {/* <div>
        Address: {`${address}`},
        <br />
        City: {` ${city}`},
        <br />
        State: {`${state}`},
        <br />
        ZIP: {`${zip}`}
      </div> */}
      {/* <h4>
        Contact
        <button onClick={() => go("contact")}>Edit</button>
      </h4> */}
      {/* <div>
        Phone: {`${phone}`},
        <br />
        E-mail: {`${email}`}
      </div> */}
      <div>
      <button onClick={previous}>Previous</button>
        <button onClick={() => go("submit")}>Submit</button>
      </div>
    </div>
  );
};

export default Review;