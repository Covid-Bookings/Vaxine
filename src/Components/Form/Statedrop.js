import React from "react";

const availability = [
  ["11:00AM", " 11:00 AM"],
  ["11:30AM", "11:30 AM"],
  ["12:00PM", "12:00 PM"]
  // ["1:00PM", "1:00 PM"]
  // ["1:30PM", "1:30 PM"]
  // ["2:00PM", "2:00 PM"]
];

const StateDrop = ({ label, ...others }) => (
  <>
    <label>{label}</label>
    <select {...others}>
      {availability.map(([value, name]) => (
        <option value={value}>{name}</option>
      ))}
    </select>
  </>
);

export default StateDrop;