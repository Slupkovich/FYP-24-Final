import React from 'react';
import './IntroToEntre.css'; 

// Component: IntroToEntre
// Purpose: Displays a section introducing the concept of entrepreneurship, along with the key characteristics of entrepreneurs, insights on failure, and tips to avoid small business failure.
const IntroToEntre = () => {
  return (
    <section className="entrepreneurship-intro-section">
      {/* Section Header: Brief introduction to the entrepreneurship theme. */}
      <div className="entrepreneurship-intro-header">
        <h1>Foundations of Entrepreneurship</h1>
        <p>Empowering aspiring entrepreneurs to transform ideas into opportunities.</p>
      </div>

      {/* Subsection: Lists key characteristics that are typically found in successful entrepreneurs. */}
      <div className="entrepreneurship-characteristics">
        <h3>Key Characteristics of Entrepreneurs</h3>
        <div className="entrepreneurship-characteristics-grid">
          {/* Each block represents a different characteristic, accompanied by a related icon. */}
          
          {/* Willingness to break the rules */}
          <div className="entrepreneurship-characteristic">
            <FontAwesomeIcon icon={faThumbsUp} />
            <p>Willingness to break the rules</p>
          </div>

          {/* Self-reliance */}
          <div className="entrepreneurship-characteristic">
            <FontAwesomeIcon icon={faUserCircle} />
            <p>Self-reliance</p>
          </div>

          {/* Confidence in their ability to succeed */}
          <div className="entrepreneurship-characteristic">
            <FontAwesomeIcon icon={faStar} />
            <p>Confidence in their ability to succeed</p>
          </div>

          {/* Competitive nature */}
          <div className="entrepreneurship-characteristic">
            <FontAwesomeIcon icon={faFistRaised} />
            <p>Competitive</p>
          </div>

          {/* Organisational skills */}
          <div className="entrepreneurship-characteristic">
            <FontAwesomeIcon icon={faSitemap} />
            <p>Skilled at organising</p>
          </div>

          {/* Valuing achievement over financial gain */}
          <div className="entrepreneurship-characteristic">
            <FontAwesomeIcon icon={faTrophy} />
            <p>Value achievement over money</p>
          </div>

          {/* Commitment level */}
          <div className="entrepreneurship-characteristic">
            <FontAwesomeIcon icon={faHeart} />
            <p>High degree of commitment</p>
          </div>

          {/* Creativity */}
          <div className="entrepreneurship-characteristic">
            <FontAwesomeIcon icon={faLightbulb} />
            <p>Creativity</p>
          </div>

          {/* Flexibility and adaptability */}
          <div className="entrepreneurship-characteristic">
            <FontAwesomeIcon icon={faSyncAlt} />
            <p>Flexibility</p>
          </div>

          {/* Resourcefulness */}
          <div className="entrepreneurship-characteristic">
            <FontAwesomeIcon icon={faToolbox} />
            <p>Resourcefulness</p>
          </div>

          {/* Work ethic */}
          <div className="entrepreneurship-characteristic">
            <FontAwesomeIcon icon={faHammer} />
            <p>Willingness to work hard</p>
          </div>

          {/* Tenacity */}
          <div className="entrepreneurship-characteristic">
            <FontAwesomeIcon icon={faAnchor} />
            <p>Tenacity</p>
          </div>
        </div>
      </div>

      {/* Subsection: Discusses how successful entrepreneurs view and handle failure. */}
      <div className="entrepreneurship-failure-perspective">
        <h3>Putting Failure into Perspective</h3>
        <p>Entrepreneurs are not paralysed by the prospect of failure.</p>
        <p>Failure: a natural part of the creative process.</p>
        <p>Successful entrepreneurs learn to fail intelligently.</p>
      </div>

      {/* Subsection: Offers strategies to avoid common pitfalls that lead to small business failure. */}
      <div className="entrepreneurship-avoiding-pitfalls">
        <h3>Avoiding the Pitfalls of Small Business Failure</h3>
        <ul>
          {/* Each list item provides a piece of advice for building a resilient small business. */}
          <li>Know your business in-depth</li>
          <li>Build a viable business model – and test it</li>
          <li>Use lean start-up principles</li>
          <li>Know when to pivot</li>
          <li>Develop a solid business plan</li>
          <li>Manage financial resources</li>
          <li>Understand financial statements</li>
          <li>Learn to manage people effectively</li>
          <li>Set your business apart from the competition</li>
          <li>Maintain a positive attitude</li>
        </ul>
      </div>
    </section>
  );
};
  

export default IntroToEntre;