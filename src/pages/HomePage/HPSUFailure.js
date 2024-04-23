import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { gsap } from 'gsap';
import './HPSUFailure.css';

// Counter component to animate numbers
const Counter = ({ end }) => {
  const counterRef = useRef(null); // Reference to the HTML element to be manipulated

  useEffect(() => {
    const counterAnimation = () => {
      gsap.to(counterRef.current, {
        textContent: end, // Target value for the counter
        duration: 12, // Duration of the animation in seconds
        ease: 'power3.out', // Easing function for the animation
        snap: { textContent: 1 }, // Snap between whole numbers
        modifiers: {
          textContent: value => Math.round(value) + '%', // Modifier to append '%' after the number
        },
      });
    };

    counterAnimation(); // Invoke the animation function
  }, [end]); // Dependency array for the effect, re-run animation if 'end' changes

  return <div ref={counterRef} className="hpsu-failure__counter">0%</div>; // Initial display of the counter
};

// Main component for the failure-success statistical section
const HPSUFailure = () => {
  const navigate = useNavigate(); // Hook to navigate between routes

  // Handler for the button click to navigate to moduleOne
  const onEmbarkClick = () => {
    navigate('/moduleOne');
  };

  // Render the component
  return (
    <section className="hpsu-failure-section"> {/* Section container for the component */}
      <div className="hpsu-failure__content-wrapper"> {/* Wrapper for content alignment and styling */}
        <h2 className="hpsu-failure__title">Empower Your Startup's Journey</h2> {/* Title of the section */}
        <p className="hpsu-failure__description">
          While 75% of startups struggle, 25% soar to success. Be part of the quarter that thrives.
        </p> {/* Description providing context and motivation */}
        <div className="hpsu-failure__statistic-wrapper"> {/* Wrapper for statistics display */}
          <Counter end={25} /> {/* Animated counter up to 25% */}
          <div className="hpsu-failure__progress-bar"> {/* Progress bar container */}
            <div className="hpsu-failure__progress" /> {/* Dynamic progress element */}
          </div>
        </div>
        <button className="hpsu-failure__cta-button" onClick={onEmbarkClick}>
          EMBARK ON SUCCESS
        </button> {/* Call-to-action button */}
        <p className="hpsu-failure__footer-text">
          Elevate your startup game. My educational modules provide the compass for navigating the entrepreneurial world.
        </p> {/* Inspirational footer text */}
      </div>
    </section>
  );
};

export default HPSUFailure;