import React from "react";

const hospitalOptions = [
 ["NewYork-Presbyterian Lower Manhattan Hospital", "NewYork-Presbyterian Lower Manhattan Hospital"],
 ["NYC Health + Hospitals / Bellevue", "NYC Health + Hospitals / Bellevue"],
 ["Mount Sinai Beth Israel", "Mount Sinai Beth Israel"]
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