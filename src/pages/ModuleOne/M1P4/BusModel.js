import React from 'react';
import './BusModel.css';

const BusModel = () => {
  return (
    <section className="bmc-section">
      <div className="bmc-container">
        <div className="bmc-container__description">
          <header className="bmc-header">
            <h1 className="bmc-main-title">Business Model Basics</h1>
          </header>
          <h2 className="bmc-container__section-title">What Is It?</h2>
          <p className="bmc-container__text">The Business Model Canvas (BMC) is a strategic blueprint that outlines how your company brings value to customers, operates, and earns revenue. It's a clear visual chart that describes your company's core functions and how they interconnect.</p>
          <h2 className="bmc-container__section-title">Why Use It?</h2>
          <ul className="bmc-container__list">
            <li className="bmc-container__list-item__strong"><strong>Clarify Value:</strong> Pinpoint exactly what makes your offerings unique.</li>
            <li className="bmc-container__list-item__strong"><strong>Identify Customers:</strong> Determine who needs your products and why.</li>
            <li className="bmc-container__list-item__strong"><strong>Streamline Operations:</strong> Understand your business's essential assets and activities.</li>
            <li className="bmc-container__list-item__strong"><strong>Financial Insight:</strong> Analyse your cost structure and revenue streams.</li>
          </ul>
          <h2 className="bmc-container__section-title">How It Works</h2>
          <p className="bmc-container__text">Your business model encompasses the flow of products and services to the market, while detailing the financial and operational infrastructure necessary to make it happen. It connects the value you offer with your target customers and maps out the money-making strategy.</p>
          <p className="bmc-container__text">Remember, a business model is dynamic. It can and should evolve with your business as you grow and learn more about your customers and market.</p>
          <h2 className="bmc-container__section-title">Using Timmers' Definition</h2>
          <p className="bmc-container__text">Taking a leaf from Timmers (1999), your BMC is an architecture of your business's offerings, flows, and interactions. It's a comprehensive snapshot capturing:</p>
          <ul className="bmc-container__list">
            <li className="bmc-container__list-item">The roles and benefits for each business actor involved.</li>
            <li className="bmc-container__list-item">The network that supports and sustains your offerings.</li>
            <li className="bmc-container__list-item">How you'll earn revenue and create a profitable enterprise.</li>
          </ul>
        </div>
        
        <div className="bmc-business-model-canvas">
          <h2 className="bmc-title bmc-cost-title">Things that cost money</h2>
          <div className="bmc-section bmc-cost-incuring">
            <div className="bmc-box" id="bmc-key-partners">
              <h3>Key Partners</h3>
            </div>
            <div className="bmc-box" id="bmc-key-activities">
              <h3>Key Activities</h3>
            </div>
            <div className="bmc-box" id="bmc-key-resources">
              <h3>Key Resources</h3>
            </div>
          </div>
          <h2 className="bmc-title bmc-money-title">Things that make money</h2>
          <div className="bmc-section bmc-money-making">
            <div className="bmc-box" id="bmc-customer-segments">
              <h3>Customer Segments</h3>
            </div>
            <div className="bmc-box" id="bmc-customer-relations">
              <h3>Customer Relations</h3>
            </div>
            <div className="bmc-box" id="bmc-channels">
              <h3>Channels</h3>
            </div>
          </div>
          <div className="bmc-box bmc-large" id="bmc-value-proposition">
            <h3>Value Proposition</h3>
          </div>
          <div className="bmc-box bmc-large" id="bmc-cost-structure">
            <h3>Cost Structure</h3>
          </div>
          <div className="bmc-box bmc-large" id="bmc-revenue-streams">
            <h3>Revenue Streams & Pricing Model</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusModel;
