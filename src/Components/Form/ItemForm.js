import React from "react";
import './itemform.css';

const ItemForm = ({ label, children, type = "text",  ...otherProps }) => (
  <div className="form">
    {type === "text" ? (
      <>
        {/* <label>{label}</label> */}
        <input className="testing" type={type} {...otherProps} />
      </>
    ) : (
      <>
        <label />
        <input type={type} {...otherProps} />
        {label}
      </>
    )}
  </div>
);

export default ItemForm;