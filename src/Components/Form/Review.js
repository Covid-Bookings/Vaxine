import React from "react";
import './review.css';

import Disclaimer from './Disclaimer';
import HospitalImage from '../../images/national-cancer-institute.jpg';

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
    <div className="review-wrapper">
      {/* <div className="review-contents"> */}
      <h3>Review </h3>
      <img src={HospitalImage} alt="hospital-fossad" />
      <div review-contents>
        {" "}
        First name: {`${firstName}`},
        <br />
        Last Name: {`${lastName}`},
      </div>
      <div>phoneNumber: {`${phoneNumber}`}</div>
      <div>email: {`${email}`}</div>
      <div>date: {`${date}`}</div>
      <div>time: {`${availability}`}</div>
      {/* </div> */}
      <div>
      <button className="previousbtn" onClick={previous}>Previous</button>
      <Disclaimer />
      </div >
      <div className="submit-wrapper">
        <button onClick={() => go("submit")}>Submit</button>
        </div>
    </div>
  );
};

export default Review;