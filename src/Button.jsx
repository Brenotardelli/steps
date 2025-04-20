import React from "react";

const Button = ({ textColor, bgColor, onClick, text }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: bgColor, color: textColor }}>
      {text}
    </button>
  );
};

export default Button;
