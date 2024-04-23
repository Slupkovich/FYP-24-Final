// Import necessary React hooks and other components
import React, { useState, useEffect, useContext } from 'react'; // Hooks for component state and context
import { NavLink, useLocation } from 'react-router-dom'; // Routing components for navigation links
import './WebNavBar.css'; // Styles specific to the navbar
import AccountDropdown from './MyAccount/AccountDropdown'; // Dropdown component for account actions
import { AccountContext } from "./Account"; // Context providing account related functions

function WebNavbar() {
  const [isOpen, setIsOpen] = useState(false); // State for toggling mobile navigation menu
  const [dropdown, setDropdown] = useState(false); // State for toggling the dropdown menu
  const { getSession } = useContext(AccountContext); // Consuming getSession method from AccountContext
  const [user, setUser] = useState(null); // State to hold the user session details
  const location = useLocation(); // Hook to get location object which contains the current URL path

  // Function to toggle the mobile navigation menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to close both navigation and dropdown menus
  const handleNavLinkClick = () => {
    setIsOpen(false); // Close mobile navigation menu
    setDropdown(false); // Close dropdown menu
  };

  // Check if the current path is one of the modules or the resource page
  const isModuleActive = location.pathname.startsWith('/module') || location.pathname === '/resource';

  // Effect hook for authentication and handling window resizing
  useEffect(() => {
    // Attempt to retrieve the current user session
    getSession().then(session => {
      setUser(session); // Set user state if session is successfully retrieved
    }).catch(() => {
      setUser(null); // Reset user state if no session is found
    });

    // Function to handle window resize events
    function handleResize() {
      // Close menus when the window width is larger than 798 pixels
      if (window.innerWidth > 798) {
        setIsOpen(false);
        setDropdown(false);
      }
    }

    // Add an event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [getSession]); // Dependency array includes getSession to rerun effect if it changes

  return (
    <>
      <nav className="web-nav">
        {/* Logo or Brand Name: Clicking the logo will navigate the user to the home page and close any open menus */}
        <NavLink to="/" className="web-nav__logo" onClick={handleNavLinkClick}>
          <img src="/logo-big.png" alt="Full Logo" className="full-logo" /> {/* Full logo for larger screens */}
          <img src="/logo-small.png" alt="Mobile Logo" className="mobile-logo" /> {/* Mobile logo for smaller screens */}
        </NavLink>
  
        {/* Burger icon for mobile navigation, typically three horizontal lines, toggles the navigation menu */}
        <div className="web-nav__menu--mobile" onClick={toggleMenu}>
          <div className="web-nav__burger-icon">
            <span></span> {/* These spans become the burger icon lines */}
            <span></span>
            <span></span>
          </div>
        </div>
  
        {/* Container for the main navigation links */}
        <div className="web-nav__container">
          {/* Conditionally rendered navigation menu; it becomes visible when 'isOpen' is true */}
          <ul className={`web-nav__menu ${isOpen ? 'web-nav__menu--active' : ''}`}>
            {/* If no user is logged in and the menu is open, show the Login/Signup link only on mobile */}
            {!user && isOpen && (
              <li className="web-nav__item">
                <NavLink to="/login" className="web-nav__btn--login-signup web-nav__btn--mobile-only" onClick={handleNavLinkClick}>Login/Signup</NavLink>
              </li>
            )}
  
            {/* If a user is logged in and the menu is open, display the account dropdown for mobile users */}
            {user && isOpen && (
              <li className="web-nav__item web-nav__my-account-container">
                <AccountDropdown />
              </li>
            )}
            {/* Navigation link for the home page */}
            <li className="web-nav__item">
              <NavLink to="/" className={({ isActive }) => isActive ? 'web-nav__link web-nav__link--active' : 'web-nav__link'} onClick={handleNavLinkClick}>Home</NavLink>
            </li>
            {/* Dropdown menu for modules, opens on mouse enter and closes on mouse leave */}
            <li className={`web-nav__item web-nav__item--dropdown ${isModuleActive ? 'web-nav__item--active' : ''}`}
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              {/* Static navigation link for Modules dropdown */}
              <NavLink to="#" className={`web-nav__link ${isModuleActive ? 'web-nav__link--module-active' : ''}`}>Modules</NavLink>
  
              {/* Conditional rendering of the dropdown menu when 'dropdown' state is true */}
              {dropdown && (
                <div className="web-nav__dropdown-content">
                  {/* Dropdown links for each module and resources */}
                  <NavLink to="/moduleOne" className={({ isActive }) => isActive ? 'web-nav__dropdown-item web-nav__link--active' : 'web-nav__dropdown-item'} onClick={handleNavLinkClick}>Module 1: Foundations of Entrepreneurship</NavLink>
                  <NavLink to="/moduleTwo" className={({ isActive }) => isActive ? 'web-nav__dropdown-item web-nav__link--active' : 'web-nav__dropdown-item'} onClick={handleNavLinkClick}>Module 2: Developing Business Strategies</NavLink>
                  <NavLink to="/moduleThree" className={({ isActive }) => isActive ? 'web-nav__dropdown-item web-nav__link--active' : 'web-nav__dropdown-item'} onClick={handleNavLinkClick}>Module 3: Building the Business Plan</NavLink>
                  <NavLink to="/moduleFour" className={({ isActive }) => isActive ? 'web-nav__dropdown-item web-nav__link--active' : 'web-nav__dropdown-item'} onClick={handleNavLinkClick}>Module 4: Advanced Business Concepts</NavLink>
                  <NavLink to="/moduleFive" className={({ isActive }) => isActive ? 'web-nav__dropdown-item web-nav__link--active' : 'web-nav__dropdown-item'} onClick={handleNavLinkClick}>Module 5: Digital Entrepreneurship and Innovation</NavLink>
                  <NavLink to="/moduleSix" className={({ isActive }) => isActive ? 'web-nav__dropdown-item web-nav__link--active' : 'web-nav__dropdown-item'} onClick={handleNavLinkClick}>Module 6: Ethics, Social Responsibility, and Future Trends</NavLink>
                  <NavLink to="/resource" className={({ isActive }) => isActive ? 'web-nav__dropdown-item web-nav__link--active' : 'web-nav__dropdown-item'} onClick={handleNavLinkClick}>Resources</NavLink>
                </div>
              )}
            </li>
            {/* NavLink for the Feedback page */}
            <li className="web-nav__item"><NavLink to="/feedbackMe" className={({ isActive }) => isActive ? 'web-nav__link web-nav__link--active' : 'web-nav__link'} onClick={handleNavLinkClick}>Feedback</NavLink></li>
          </ul>
  
          {/* Close button, conditionally rendered */}
          {isOpen && (
            <div className="web-nav__menu-close" onClick={toggleMenu}>X</div>
          )}
        </div>
          {!user ? (
            <NavLink to="/login" className="web-nav__btn--login-signup web-nav__btn--desktop-only">Login/Signup</NavLink>
          ) : (
            <div className="web-nav__my-account-container-desktop web-nav__btn--desktop-only">
              <AccountDropdown />
            </div>
          )}
        </nav>
      </>
    );
  };
  
  // Export the WebNavbar component to be used in other parts of the application
  export default WebNavbar;

    

