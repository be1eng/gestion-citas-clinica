import React from 'react';
import '../styles/Stepper.css'


const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="steps-horizontal">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isComplete = stepNumber < currentStep;

        return (
          <div 
            key={index} 
            className={`step-horizontal ${isActive ? 'active' : ''} ${isComplete ? 'complete' : ''}`}
          >
            <div className="step-icon">
              {isComplete ? <i className="bi bi-check-lg"></i> : <i className={`bi ${step.icon}`}></i>}
            </div>
            <div className="step-description">{step.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;