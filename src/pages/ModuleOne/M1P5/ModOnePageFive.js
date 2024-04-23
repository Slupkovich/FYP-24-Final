import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './MProg5.css';
import AuthPrompt from '../../../components/AuthPrompt/AuthPrompt';
import LoadingIn from '../../../components/AuthPrompt/LoadingIn';
import { AccountContext } from "../../../components/Account";


// FeedbackM1 component is designed to solicit user feedback for Module 1.
const FeedbackM1 = () => {
  // Use of the useNavigate hook from React Router for navigation between components or pages.
  const navigate = useNavigate();

  // Function to navigate to the next module, adjusting the path as necessary for the specific application structure.
  const goToNextModule = () => {
    navigate('/moduleTwo');
  };

  // Function to open a feedback form in a new browser tab, allowing users to submit their feedback without leaving the current module.
  const openFeedbackForm = () => {
    window.open("https://forms.gle/65wmJwJSo39T9nST6", "_blank");
  };

  // Function to return to the previous page in the browser's history, likely the main content of Module 1.
  const returnToPreviousPage = () => {
    navigate(-1);
  };

  // The component renders a feedback section with a structured layout for soliciting user insights.
  return (
    <section aria-labelledby="feedback-heading" className="feedback-section-M1">
      <div className="feedback-container-M1">
        {/* Accessible heading for the feedback section */}
        <h1 id="feedback-heading">Share Your Thoughts!</h1>
        {/* Descriptive text encouraging users to provide feedback */}
        <p>Your insights is crucial to me! Please take a moment to share your thoughts about this module. Each piece of feedback helps me enhance your learning experience. Click the button below to fill out my quick feedback form. Thank you for helping me grow and improve!</p>
        {/* Group of buttons providing options for navigation and action */}
        <div className="button-group">
          <button onClick={returnToPreviousPage} className="feedback-button--return-M1">
            Return
          </button>
          <button onClick={openFeedbackForm} className="feedback-button-M1">
            Give Feedback
          </button>
          <button onClick={goToNextModule} className="feedback-button--continue-M1">
            Continue Learning
          </button>
        </div>
      </div>
    </section>
  );
};


// Component to manage and display content based on the user's authentication status
function ModOnePageFive() {
  const { getSession } = useContext(AccountContext); // Utilising useContext hook to access getSession function from AccountContext
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track whether the user is logged in
  const [isLoading, setIsLoading] = useState(true); // State to track whether the authentication check is loading

  // useEffect hook to perform the authentication check once the component mounts
  useEffect(() => {
    getSession() // Attempt to get the current user session
      .then(() => {
        setIsLoggedIn(true); // If successful, set isLoggedIn to true
      })
      .catch(() => {
        setIsLoggedIn(false); // If an error occurs, set isLoggedIn to false
      })
      .finally(() => {
        setIsLoading(false); // Once the check is complete, set isLoading to false
      });
  }, [getSession]); // Dependency array to ensure the effect runs only when getSession function changes

  // Conditional rendering based on the authentication status
  if (isLoading) {
    return <LoadingIn />; // Displays a loading indicator while checking authentication status
  }

  if (!isLoggedIn) {
    return <AuthPrompt />; // If not logged in, render the AuthPrompt component to ask for authentication
  }
  
  // If the user is logged in, render the main content of the application
    return (
      <div>

    <FeedbackM1 />
  
      </div>
    );
  }
  
  export default ModOnePageFive;