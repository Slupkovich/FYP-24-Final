import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MProg.css'; // Importing the corresponding CSS file

// Component for module progression, offering options to take a quiz or continue to the next section
const MProg = () => {
  const navigate = useNavigate(); // Hook for programmatically navigating

  // Function to navigate to the next module part
  const goToNextModule2 = () => {
    navigate('/moduleOne/M1P2'); // Navigates to the specified path
  };

  // Function to open the quiz link in a new tab
  const goToQuiz = () => {
    window.open("https://forms.gle/7QTSheMs6zLPccYL8", "_blank"); // Opens a URL in a new tab
  };

  // Rendering the module progress section
  return (
    <section className="module-progress-section">
      <div className="module-progress-container"> 
        <h2 className="module-progress__quiz-text">Validate Your Mastery and Advance Confidently!</h2> 
        <button onClick={goToQuiz} className="module-progress__quiz-button"> 
          Take the Quiz
        </button>
        <div className="module-progress__button-container">
          <button onClick={goToNextModule2} className="module-progress__button--next"> 
            Continue to Next Section
          </button>
        </div>
      </div>
    </section>
  );
};



export default MProg;