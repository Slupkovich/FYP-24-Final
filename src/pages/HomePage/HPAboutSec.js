import React from 'react';
import './HPAboutSec.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faSeedling, faRocket } from '@fortawesome/free-solid-svg-icons';

// Functional component for the 'About' section on the homepage
function HPAboutSec() {
  return (
    // Section element with a class for styling purposes
    <section className="hp-about-sec">
      <div className="hp-about-sec__container">
        <h2 className="hp-about-sec__title">About EduPreneurs Hub</h2>
        <div className="hp-about-sec__description">
          <p>Start your entrepreneurship journey with EduPreneurs Hub. My platform is designed to:</p>
          <ul>
            <li><FontAwesomeIcon icon={faLightbulb} /> Ignite your entrepreneurial spirit</li>
            <li><FontAwesomeIcon icon={faSeedling} /> Cultivate innovative ideas into reality</li>
            <li><FontAwesomeIcon icon={faRocket} /> Guide your venture to market success</li>
          </ul>
          <p>Discover a world of resources and tools that go beyond traditional learning. Join me to gain the insights and skills needed to thrive in the dynamic business world.</p>
        </div>
      </div>
    </section>
  );
}

export default HPAboutSec;