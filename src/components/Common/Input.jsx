import React from "react";
import "./Input.css";

export const Input = ({ placeholder, type, required, onChange, name }) => {
  return (
    <input
      className="form-input"
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  );
};
