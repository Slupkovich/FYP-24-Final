import React from 'react';
import './BusOpp.css'; 


const BusOpp = () => {
  return (
    <section className="business-opportunities">
      <div className="business-opportunities__container">
      <h1 className="business-opportunities__title">Essential Criteria for Opportunities</h1>
        <div className="business-opportunities__main">
          <p className="business-opportunities__main-text">Opportunity</p>
        </div>
        <div className="business-opportunities__criteria-container">
          <div className="business-opportunities__criteria business-opportunities__criteria--attractive">
            <p className="business-opportunities__criteria-title">Attractive</p>
            <span className="business-opportunities__criteria-description">Will people pay for it and can I make money?</span>
          </div>
          <div className="business-opportunities__criteria business-opportunities__criteria--durable">
            <p className="business-opportunities__criteria-title">Durable</p>
            <span className="business-opportunities__criteria-description">Will people need this thing for long enough to sustain a business?</span>
          </div>
          <div className="business-opportunities__criteria business-opportunities__criteria--timely">
            <p className="business-opportunities__criteria-title">Timely</p>
            <span className="business-opportunities__criteria-description">What is the level of competition and is there a window of opportunity?</span>
          </div>
          <div className="business-opportunities__criteria business-opportunities__criteria--anchored">
            <p className="business-opportunities__criteria-title">Anchored in something that creates customer value</p>
            <span className="business-opportunities__criteria-description">Does this thing improve the customers’ lives enough for them to want it?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusOpp;
