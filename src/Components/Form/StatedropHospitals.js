import React from "react";

const hospitalOptions = [
 ["Hospital 1", "Hospital 1"],
 ["Hospital 2", "Hospital 2"],
 ["Hospital 3", "Hospital 3"]
]


const StateDropHospitals = ({ label, ...others }) => (
  <>
  <div>
    <label>{label}</label>
    <select {...others}>
      {hospitalOptions.map(([value, name]) => (
        <option value={value}>{name}</option>
        ))}
    </select>
      </div>
      <div>
    </div>
  </>
);

export default StateDropHospitals;