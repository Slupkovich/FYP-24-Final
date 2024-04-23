import React from 'react';
import './HeroSec.css'; // Link to the CSS file for styling

// Component for the hero section of a webpage
const HeroSecOne = () => {
  // Return statement to render the hero section
  return (
      // Define the section element with a class of 'hero' for styling
      <section className="hero">
          {/* Container for scroll indicators, positioned at the bottom left and right */}
          <div className="scroll-indicators">
              {/* Span elements acting as left and right arrows */}
              <span className="arrow-down left"></span> {/* Left arrow */}
              <span className="arrow-down right"></span> {/* Right arrow */}
          </div>
      </section>
  );
};

export default HeroSecOne; // Export the component for use in other parts of the application
