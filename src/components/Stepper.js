import React from "react";
import "./Stepper.css";

const CustomStepper = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={`step ${currentStep === index ? "active" : ""}`}
            onClick={() => onStepClick(index)}
          >
            <div className={`circle ${currentStep === index ? "active" : ""}`}>
              {index + 1}
            </div>
            <span className="label">{step}</span>
          </div>
          {index !== steps.length - 1 && (
            <div className={`line ${currentStep > index ? "active" : ""}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CustomStepper;
