import React from "react";

const StepsMessage = ({ step, children }) => {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
};

export default StepsMessage;
