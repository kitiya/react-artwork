import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  console.log(label);
  console.log(otherProps);
  console.log(otherProps.value.length);
  console.log(handleChange);
  return (
    <div className="form-group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label && (
        <label
          className={`form-input-label ${
            otherProps.value.length ? "shrink" : ""
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
