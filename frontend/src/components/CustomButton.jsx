import React from "react";
import "./CustomButton.css";

const CustomButton = ({ text, onClick, isActive }) => {
  return (
    <button
      className={`custom-button ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;



