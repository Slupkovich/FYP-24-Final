import React from 'react';
import { useNavigate } from 'react-router-dom';

// The M1Prog4 component is responsible for navigation and interaction within Module 1, Progress Step 4.
// It allows users to move between modules, take quizzes, and progress through the course content.
const M1Prog4 = () => {
  // The useNavigate hook from React Router is utilised for navigation.
  const navigate = useNavigate();

  // Navigates to the previous page in the browser's history, likely the previous module or section.
  const goToPreviousModule = () => {
    navigate(-1); // Utilises the browser's history stack to go back.
  };

  // Navigates to the next module, identified as M1P5, indicating Module 1, Progress Step 5.
  const goToNextModule5 = () => {
    navigate('/moduleOne/M1P5'); // Directly navigates to a specified path.
  };

  // Opens a new tab to a quiz related to the current module or section.
  const goToQuiz = () => {
    // Opens a Google Forms link in a new tab for the user to take a quiz.
    window.open("https://forms.gle/nbKNrNz8yumdwDQ18", "_blank");
  };

  // The component returns JSX structure, including a section for the module, quiz interaction, and navigation buttons.
  return (
    <section className="module-progress-4-section">
      <div className="module-progress-4-container">
        {/* Heading indicating the conclusion of the Business Model Canvas (BMC) module. */}
        <h2 className="module-progress-4__quiz-text">The BMC Concluded: Paving Your Path to Innovation</h2>
        {/* A button that triggers the quiz for this module. */}
        <button onClick={goToQuiz} className="module-progress-4__quiz-button">
          Take the Quiz
        </button>
        {/* Container for navigation buttons allowing the user to move to the previous or next section. */}
        <div className="module-progress-4__button-container">
          <button onClick={goToPreviousModule} className="module-progress-4__button--back">
            Return to Previous Section
          </button>
          <button onClick={goToNextModule5} className="module-progress-4__button--next">
            Continue to Next Section
          </button>
        </div>
      </div>
    </section>
  );
};



export default M1Prog4;