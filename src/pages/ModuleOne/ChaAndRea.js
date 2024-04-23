import React from 'react';
import './ChaAndRea.css'; // Linking the CSS file for styling

// Component to display challenges and drawbacks of entrepreneurship
const ChaAndRea = () => {
    // The component returns a section element containing two divs,
    // each with a heading and a list of items highlighting different aspects
    return (
        <section className="challenges">
            {/* Container for disadvantages */}
            <div className="challenges__disadvantages">
                {/* Heading for the disadvantages section */}
                <h2 className="challenges__heading">Disadvantages of Entrepreneurship</h2>
                {/* Unordered list of disadvantages */}
                <ul className="challenges__list">
                    <li className="challenges__item">Entrepreneurs often face burnout from managing all business aspects.</li>
                    <li className="challenges__item">High risk of failure with the odds often against success</li>
                    <li className="challenges__item">Entrepreneurship can be a lonely journey with more losses than wins initially</li>
                </ul>
            </div>
            {/* Container for drawbacks */}
            <div className="challenges__drawbacks">
                {/* Heading for the drawbacks section */}
                <h2 className="challenges__heading">Drawbacks of Entrepreneurship</h2>
                {/* Unordered list of drawbacks */}
                <ul className="challenges__list">
                    <li className="challenges__item">Uncertainty of income and potential loss of investment</li>
                    <li className="challenges__item">Long hours and hard work with a possible lower quality of life in the early stages</li>
                    <li className="challenges__item">High levels of stress and periods of discouragement</li>
                </ul>
            </div>
        </section>
    );
};

export default ChaAndRea; // Export the component for use elsewhere in the application
