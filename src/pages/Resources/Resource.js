import React, { useState, useEffect, useContext } from 'react'; // Importing React hooks and context functionality
import './DownMat.css'; // Link to my CSS file for styles specific to the download materials page
import Footer from '../../components/Footer'; // Import my Footer component for consistent page footer
import AuthPrompt from '../../components/AuthPrompt/AuthPrompt'; // Import my AuthPrompt component for authentication prompts
import LoadingIn from '../../components/AuthPrompt/LoadingIn'; // Import my LoadingIn component to show while loading
import { AccountContext } from "../../components/Account"; // Access to my AccountContext for user session management

// Array of material objects each containing a name and a file URL
const materials = [
    { name: 'Business Model Canvas', url: '/DownResources/business-model-canvas.doc' },
    { name: 'Value Proposition Canvas', url: '/DownResources/value-proposition-canvas.docx' },
    { name: 'Storyboarding', url: '/DownResources/storyboard-template.docx' },
    { name: 'SWOT Analysis Template', url: '/DownResources/swot-temp.docx' },
    { name: 'Competitor Analysis Grid', url: '/DownResources/competitor-analysis-template.docx' },
    { name: 'Financial Projections Template', url: '/DownResources/financial-plan-for-startup-bus.xlsx' },
    { name: 'Customer Persona Creator', url: '/DownResources/personas-template.docx' }
];

// Component for handling the downloading of materials
const DownloadMaterials = () => {
    // Function to initiate file download
    const downloadFile = (url) => {
        window.open(url, '_blank'); // Opens the file URL in a new tab to start the download
    };

    // Render the DownloadMaterials component
    return (
        <section className="download">
            <div className="download__container">
                <h1 className="download__title">Downloadable Resources</h1>
                <p className="download__description">
                    Explore our range of resources to aid in your entrepreneurial journey. Click to download the materials you need.
                </p>
                <ul className="download__list">
                    {materials.map((material, index) => ( // Mapping each material to a list item
                        <li key={index} className="download__item">
                            <button 
                                className="download__button"
                                onClick={() => downloadFile(material.url)} // Button to trigger download
                            >
                                {material.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

// Define the Resource component that controls access to resources based on user authentication
function Resource() {
  const { getSession } = useContext(AccountContext); // Utilize getContext to access the getSession method from AccountContext
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to keep track of user's login status
  const [isLoading, setIsLoading] = useState(true); // State to handle the loading status

  // Effect hook to check user's session with AWS Cognito on component mount
  useEffect(() => {
      getSession()
          .then(() => {
              setIsLoggedIn(true); // Set logged in to true if session retrieval is successful
          })
          .catch(() => {
              setIsLoggedIn(false); // Set logged in to false if session retrieval fails
          })
          .finally(() => {
              setIsLoading(false); // Ensure loading is set to false after the check is complete
          });
  }, [getSession]); // Dependency array includes getSession to re-run the effect if it changes

  // Conditional rendering based on the isLoading state
  if (isLoading) {
      return <LoadingIn />; // Display my loading indicator component while checking the session
  }

  // Conditional rendering based on the isLoggedIn state
  if (!isLoggedIn) {
      return <AuthPrompt />; // Show my authentication prompt if not logged in
  }

  // If logged in, display the DownloadMaterials component and Footer
  return (
      <div>
          <DownloadMaterials />
          <Footer />
      </div>
  );
}

export default Resource; // Export Resource component for use in other parts of my application