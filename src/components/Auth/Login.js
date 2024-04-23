import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from "../Account";
import './Login.css';

function Login() {
  // State hooks to manage email, password, and potential error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Hook for navigating programmatically
  const navigate = useNavigate();

  // Using context to access the authenticate function
  const { authenticate } = useContext(AccountContext);

  // Handles form submission for login
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent default form submission behaviour

    authenticate(email, password)
      .then(data => {
        console.log("Logged in!", data);  // Log success for debugging
        navigate('/');  // Navigate to the root or 'dashboard' after successful login
      })
      .catch(err => {
        console.error("Failed to login", err);  // Log error for debugging
        setError(err.message || 'Login failed');  // Show user-friendly error message
      });
  };

  // Handles the action to close the login modal or navigate away
  const handleClose = () => {
    navigate('/');  // Navigates to the homepage
  };

  return (
    <div className="uniqueLoginContainer">
      <div className="uniqueLoginForm">
        <div className="uniqueCloseButton" onClick={handleClose}>X</div>
        <div className="uniqueLogo">
          <img src="/logo-big.png" alt="EduPreneurs Hub Logo" />
        </div>
        <h2 className="loginText">Log In</h2>
        {error && <div className="errorMessage">{error}</div>}  
        <p className="uniqueSignUpText">
          New to this site?
          <span className="uniqueSignUpLink" onClick={() => navigate('/signup')}> Sign Up</span>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="uniqueInputGroup">
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="uniqueInputGroup">
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <p className="uniqueForgotPassword" onClick={() => {}}>Forgot password?</p>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;




