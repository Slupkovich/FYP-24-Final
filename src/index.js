// Import React library for building user interfaces
import React from 'react';
// Import createRoot from react-dom/client for React root API
import { createRoot } from 'react-dom/client';
// Import BrowserRouter alias as Router for handling routing in the application
import { BrowserRouter as Router } from 'react-router-dom';
// Import the main App component
import App from './App';

// Import Amplify library for integrating cloud services
import { Amplify } from 'aws-amplify';
// Import the AWS configuration file for Amplify
import awsconfig from './aws-export';

// Configures Amplify with the settings from the AWS configuration file
Amplify.configure(awsconfig);

// Retrieve the DOM element where the React app will be mounted
const container = document.getElementById('root');

// Check if the container element exists to prevent runtime errors
if (container) {
  // Create a root container instance using the element and React 18's createRoot API
  const root = createRoot(container);
  // Render the React application wrapped with StrictMode and Router components
  root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
} else {
  // Log an error message if the root container isn't found in the DOM
  console.error('Failed to find the root element');
}