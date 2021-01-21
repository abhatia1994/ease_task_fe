import React from "react";
import "./Buttons.css";

export const PrimaryButtonSmall = ({ isInverted, size, text }) => {
  return (
    <button
      className={`primary-button ${
        isInverted ? "primary-button-inverted" : ""
      }`}
    >
      {text}
    </button>
  );
};
