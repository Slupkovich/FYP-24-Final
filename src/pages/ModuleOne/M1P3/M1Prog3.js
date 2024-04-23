import React from 'react';
import { useNavigate } from 'react-router-dom';

const M1Prog3 = () => {
  const navigate = useNavigate(); // Hook from React Router for navigation

  // Function to go back to the previous page in the browser's history
  const goToPreviousModule = () => {
    navigate(-1);
  };

  // Function to navigate to the next module specifically named 'M1P4'
  const goToNextModule4 = () => {
    navigate('/moduleOne/M1P4'); 
  };

  // Function to open a quiz in a new tab using a given URL
  const goToQuiz = () => {
    window.open("https://forms.gle/MmhV6TwneNkamWLU8", "_blank");
  };

  return (
    <section className="module-progress-3-section">
      <div className="module-progress-3-container">
        <h2 className="module-progress-3__quiz-text">Embark on Your Next Venture: Ideas Realised</h2>
        <button onClick={goToQuiz} className="module-progress-3__quiz-button">
          Take the Quiz
        </button>
        <div className="module-progress-3__button-container">
          <button onClick={goToPreviousModule} className="module-progress-3__button--back">
            Return to Previous Section
          </button>
          <button onClick={goToNextModule4} className="module-progress-3__button--next">
            Continue to Next Section
          </button>
        </div>
      </div>
    </section>
  );
};

export default M1Prog3;