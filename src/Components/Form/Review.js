import React from "react";
import { Link } from "react-router-dom";
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
    availability,
    hospital
  } = formData;

  const { previous } = navigation;

  const { go } = navigation;

  return (
    <div className="review-wrapper">
      {/* <div className="review-contents"> */}
      <h3>Review </h3>
      <img  className="hospitalimg" src={HospitalImage} alt="hospital-fossad" />
      <div className="review-content">
        <b>Name:</b> {`${firstName} ${lastName}`}
      </div>
      <div className="review-content"><b>Phone Number:</b> {`${phoneNumber}`}</div>
      <div className="review-content"><b>Email:</b> {`${email}`}</div>
      <div className="review-content"><b>Appointment Date:</b> {`${date}`}</div>
      <div className="review-content"><b>Time:</b> {`${availability}`}</div>
      <div className="review-content"><b>Location:</b> {`${hospital}`}</div>
      {/* </div> */}
      <div>
      <button onClick={previous}>Previous</button>
      <Disclaimer />
      </div >
      <div className="submit-wrapper">
        <Link to='/confirmation'>
          <button>Submit</button>
        </Link>
        {/* <button onClick={() => go("submit")}>Submit</button> */}
        </div>
    </div>
  );
};

export default Review;