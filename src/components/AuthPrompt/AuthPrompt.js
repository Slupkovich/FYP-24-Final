import React from 'react';
import './AuthPrompt.css'; // Importing CSS for styling the auth prompt
import { useNavigate } from 'react-router-dom'; // Import to enable programmatic navigation

// Functional component for authentication prompt
const AuthPrompt = () => {
  // Hook for navigating between routes
  const navigate = useNavigate();

  // Component render
  return (
    <section className="auth-prompt">
      <div className="auth-prompt__container">
        <div className="auth-prompt__content">
          <h2 className="auth-prompt__title">Access Restricted</h2>
          <p className="auth-prompt__message">
            Please log in to access this module. If you don't have an account yet, sign up to unlock my comprehensive learning resources and start your journey with me today!
          </p>
          <div className="auth-prompt__buttons">
            <button className="auth-prompt__button" onClick={() => navigate('/login')}>
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPrompt; // Exporting AuthPrompt for use in other parts of the application
