import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BeneOfEntre.css'; 

// Component to display the benefits of entrepreneurship
const BeneOfEntre = () => {
    // Render method returns the section with a title and a grid of benefits
    return (
        // Main section for the benefits
        <section className="benefits">
            {/* Title of the section */}
            <h2 className="benefits__title">Benefits of Entrepreneurship</h2>
            {/* Grid container for benefit items */}
            <div className="benefits__grid">
                {/* Individual benefit item */}
                <div className="benefits__item">
                  <FontAwesomeIcon icon={faHeart} /> {/* Icon representing the benefit */}
                  <p>Make a difference</p> {/* Description of the benefit */}
                </div>
  
                {/* Repeat for each benefit with respective icons and descriptions */}
                <div className="benefits__item">
                  <FontAwesomeIcon icon={faUserGraduate} />
                  <p>Reach your full potential</p>
                </div>
  
                <div className="benefits__item">
                  <FontAwesomeIcon icon={faDollarSign} />
                  <p>Reap impressive profits</p>
                </div>
  
                <div className="benefits__item">
                  <FontAwesomeIcon icon={faHandsHelping} />
                  <p>Contribute to society and be recognised for your efforts</p>
                </div>
  
                <div className="benefits__item">
                  <FontAwesomeIcon icon={faSmileBeam} />
                  <p>Do what you enjoy and have fun at it</p>
                </div>
  
                <div className="benefits__item">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <p>Personal satisfaction</p>
                </div>
            </div>
        </section>
    );
  };

export default BeneOfEntre;