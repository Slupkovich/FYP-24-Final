import React from 'react';
import './IntroToIdea.css'; 

const IntroToIdea = () => {
  return (
    <section className="idea-generation-section">
      <div className="idea-generation">
        <h1 className="idea-generation__title">Idea Generation and Opportunity Recognition</h1>
        <p className="idea-generation__definition">
          <strong>Idea:</strong> a thought, an impression, or a notion.
        </p>
        <p className="idea-generation__definition">
          <strong>Opportunity:</strong> A favourable set of circumstances that creates a need for a new product, service, or business.
        </p>
        <p className="idea-generation__definition">
          <strong>Window of Opportunity:</strong> The time period in which a firm can realistically enter a new market.
        </p>
        <p className="idea-generation__definition">
          <strong>Opportunity Gap:</strong> A problem that could be solved with a new business.
        </p>
        <p className="idea-generation__definition">
          <strong>Feasibility Analysis:</strong> the process of determining if a business idea is viable.
        </p>
        
        <h2 className="idea-generation__subtitle">Ideas vs Opportunities</h2>
        <ul className="idea-generation__list">
          <li className="idea-generation__list-item">An idea may or may not meet the criteria of an opportunity.</li>
          <li className="idea-generation__list-item">Many entrepreneurial ventures fail because there was no real opportunity behind their idea.</li>
        </ul>
      </div>
    </section>
  );
};
  
  export default IntroToIdea;