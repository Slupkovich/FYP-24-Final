// Importing React for building components
import React from 'react';
// Importing the CSS for styling this specific component
import './NotFound.css';

// This is a functional component for the 404 Not Found page
const NotFound = () => {
  return (
    <div className="not-found-container">
      {/* Image displayed to visually represent an error or not found state */}
      <img src="/FOFError.png" alt="Error displayed for missing page" className="error-image" />
      {/* Container for the text content of the 404 page */}
      <div className="text-content">
        {/* Main title displaying the error code and a custom message */}
        <h1 className="title">404 - Mission Not Found</h1>
        {/* Additional descriptive text to explain the error */}
        <p className="tagline">Looks like this launch didn't go as planned. Let's navigate back to base.</p>
        {/* Link to redirect users back to the homepage */}
        <a href="/" className="home-button">Home</a> {/* Change href to your home route if it's different */}
      </div>
    </div>
  );
};

// FOF component that wraps the NotFound component
function FOF() {
  return (
    <div>
      <NotFound />
    </div>
  );
}

// Exporting the FOF component to be used in routing or elsewhere in the application
export default FOF;
