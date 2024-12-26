import React, { useState } from "react";
import CustomStepper from "./components/Stepper";
import BorrowerInfoForm from "./components/BorrowerInfoForm";
import DirectorInfo from "./components/DirectorInfo";
import Header from "./components/Header"; // Import Header
import "./App.css";

const App = () => {
  const [currentStep, setCurrentStep] = useState(0); 

  const steps = [
    "Borrower Company Info",
    "Director Info",
    "Financial Info",
    "Past Performance Details",
    "Document Upload",
  ];

  // Function to move to the next step
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const renderForm = () => {
    switch (currentStep) {
      case 0:
        return <BorrowerInfoForm onContinue={handleNextStep} />;
      case 1:
        return <DirectorInfo />;
      case 2:
        return <div>Financial Info Content</div>;
      case 3:
        return <div>Past Performance Details Content</div>;
      case 4:
        return <div>Document Upload Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <Header /> {/* Use Header Component here */}

      {/* Stepper */}
      <div className="stepper-container">
        <CustomStepper
          steps={steps}
          currentStep={currentStep}
          onStepClick={setCurrentStep} 
        />
      </div>

      {/* Form Section */}
      <div className="form-section">{renderForm()}</div>
    </div>
  );
};

export default App;
