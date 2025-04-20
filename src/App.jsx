import React, { useState } from "react";
import Button from "./Button";
import StepsMessage from "./StepsMessage";

const messages = ["Learn React 📚", "Apply for jobs 👨‍💻", "Invest your new income 📈"];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  return (
    <>
      <button onClick={() => setIsOpen((is) => !is)} className="close">
        {isOpen ? "x" : "open"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <StepsMessage step={step}>{messages[step - 1]}</StepsMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" text="previous" onClick={handlePrevious} />
            <Button bgColor="#7950f2" textColor="#fff" text="next" onClick={handleNext} />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
