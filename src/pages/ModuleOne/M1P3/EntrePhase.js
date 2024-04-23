import React from 'react';
import './EntrePhase.css'; 

// Component to represent the initial phase of entrepreneurship, including relevant images and titles.
const EntrePhase = () => {
  return (
      // Main container section for the entrepreneurship phase content.
      <section className="ep-container">
          <div className="ep-phase">
              <h1 className="ep-phase__title">Initial phase of Entrepreneurship</h1>
              <div className="ep-phase__images-container">
                  <div className="ep-phase__image-wrapper">
                      <h2 className="ep-phase__image-title">Source of Ideas</h2>
                      <img 
                          className="ep-phase__image" 
                          src={`${process.env.PUBLIC_URL}/SourceOfIdeas1.png`} 
                          alt="Source of Venture Ideas in 2994 Firms" />
                  </div>
                  <div className="ep-phase__image-wrapper">
                      <h2 className="ep-phase__image-title">Source Importance for Identifying New Business Ideas</h2>
                      <img 
                          className="ep-phase__image" 
                          src={`${process.env.PUBLIC_URL}/SourceOfIdeas2.png`} 
                          alt="Source Importance for Identifying New Business Ideas" />
                  </div>
              </div>
          </div>
      </section>
  );
};

export default EntrePhase;
