import React from "react";
import "./Buttons.css";

export const PrimaryButtonSmall = ({ isInverted, size, text, onClick }) => {
  return (
    <button
      className={`primary-button ${
        isInverted ? "primary-button-inverted" : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
