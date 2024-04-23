// Importing necessary components and styles
import React from 'react';
import { NavLink } from 'react-router-dom'; // Used for navigation with active link styling
import './Footer.css'; // Importing styles specific to the footer

const Footer = () => {
  // Retrieve the current year dynamically
  const currentYear = new Date().getFullYear();

  // Function to render a navigation link
  // Accepts the path 'to', the display 'text', and the image source 'imgSrc'
  const renderNavLink = (to, text, imgSrc) => (
    <NavLink to={to} className={({ isActive }) => isActive ? 'footer__nav-link footer__nav-link--active' : 'footer__nav-link'}>
      <img src={imgSrc} alt={`${text} icon`} className="footer__icon" /> {text}
    </NavLink>
  );

  // JSX for the footer layout
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src="/logo-big.png" alt="EduPreneurs Hub Logo" className="footer__logo" />
        <p className="footer__text">
          From Aspiration to Actualisation — Guiding Tomorrow’s Entrepreneurs
        </p>
        <nav className="footer__nav">
          {/* Navigation links for different modules and sections */}
          {renderNavLink("/", "Home", "/Home.png")}
          {renderNavLink("/moduleOne", "Module 1", "/m1-icon.png")}
          {renderNavLink("/moduleTwo", "Module 2", "/m2-icon.png")}
          {renderNavLink("/moduleThree", "Module 3", "/m3-icon.png")}
          {renderNavLink("/moduleFour", "Module 4", "/m4-icon.png")}
          {renderNavLink("/moduleFive", "Module 5", "/m5-icon.png")}
          {renderNavLink("/moduleSix", "Module 6", "/m6-icon.png")}
          {renderNavLink("/resource", "Resources", "/FoldDoc.png")}
          {renderNavLink("/feedbackMe", "Feedback", "/Heart.png")}
        </nav>
      </div>
      <div className="footer__info">
        {/* Display the current year and copyright information */}
        <p className="footer__copyright">&copy; {currentYear} EduPreneurs Hub. All rights reserved.</p>
        <a href="mailto:support@edupreneurshub.com" className="footer__email">support@edupreneurshub.com</a>
      </div>
    </footer>
  );
};

// Export the Footer component for use in other parts of the application
export default Footer;
