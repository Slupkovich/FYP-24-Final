import React from 'react';
import './UnderCon.css'; // Importing CSS for styling the "Under Construction" page

// Functional component for displaying an "Under Construction" message
const UnderCon = () => {
    return (
        // Main section for the "Under Construction" page
        <section className="under-construction-sec">
            <div className="under-contruction__container">
                <h1 className="under-contruction__title">I'm Building Something for You!</h1>
                <div className="under-contruction__description">
                    <p>Great ideas take time to develop, and I'm making sure everything is just right. Check back soon!</p>
                </div>
            </div>
        </section>
    );
};

export default UnderCon; // Export the component for use in your application
