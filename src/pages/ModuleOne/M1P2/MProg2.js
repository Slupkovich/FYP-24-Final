import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MProg2.css'; // Importing the corresponding CSS file

// Define a functional component named MProg2
const MProg2 = () => {
  // Hook to access navigation capabilities from the router
  const navigate = useNavigate();

  // Function to navigate back to the previous page
  const goToPreviousModule = () => {
    navigate(-1); // Navigates back to the previous page in the history stack
  };

  // Function to navigate to the next module section
  const goToNextModule3 = () => {
    navigate('/moduleOne/M1P3'); // Navigates to the specific path of the next module
  };

  // Function to open a quiz in a new tab
  const goToQuiz = () => {
    window.open("https://forms.gle/f8VK15eEKXE6AbKX9", "_blank"); // Opens a URL in a new tab
  };

  // Render a section for navigating through the module and taking a quiz
  return (
    <section className="module-progress-2-section">
      <div className="module-progress-2-container">
        <h2 className="module-progress-2__quiz-text">Confirm Your Expertise: Quiz & Advance!</h2>
        <button onClick={goToQuiz} className="module-progress-2__quiz-button">
          Take the Quiz
        </button>
        <div className="module-progress-2__button-container">
          <button onClick={goToPreviousModule} className="module-progress-2__button--back">
            Return to Previous Section
          </button>
          <button onClick={goToNextModule3} className="module-progress-2__button--next">
            Continue to Next Section
          </button>
        </div>
      </div>
    </section>
  );
};

export default MProg2;