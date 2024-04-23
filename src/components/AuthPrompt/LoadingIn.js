import React from 'react';
import './LoadingIn.css'; // Importing CSS for the loading screen styles

// Functional component for displaying a loading spinner
const LoadingIn = () => {
    return (
        // Main section that houses the loading spinner
        <section className="loading-in">
            <div className="loading-in__container">
                <div className="loading-in__content">
                    <div className="loading-in__spinner"></div>
                </div>
            </div>
        </section>
    );
};

export default LoadingIn; // Exporting the component for use in other parts of the application
