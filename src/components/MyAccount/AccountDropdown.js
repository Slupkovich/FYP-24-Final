import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from "../Account"; // Import the context for account operations
import './AccountDropdown.css'; // Link to the CSS for styling the dropdown

const AccountDropdown = () => {
  const navigate = useNavigate(); // Hook to handle navigation programmatically
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const dropdownRef = useRef(null); // Ref to track the dropdown node for outside clicks
  const { logout } = useContext(AccountContext); // Extract logout function from context

  // Toggle the visibility of the dropdown
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Handle logout action
  const handleLogout = () => {
    logout(); // Call logout function from context
    setIsOpen(false); // Close the dropdown upon logout
    navigate('/'); // Navigate to homepage after logout
  };

  // Effect to handle clicking outside of the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close dropdown if click is outside the dropdown element
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Attach event listener to the document
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener when the component unmounts or dependencies change
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]); // Dependency array includes ref to ensure up-to-date closure

  return (
    <div className="account-dropdown" ref={dropdownRef}>
      {/* Button to toggle the dropdown */}
      <button className="dropdown-btn" onClick={toggleDropdown}>
        <img src="/AccountIcon.png" alt="Account" className="account-icon" />
        My Account
      </button>
      {/* Conditionally render dropdown content */}
      {isOpen && (
        <div className="dropdown-content">    
          {/* <div className="dropdown-item">My Account</div> */}
          <div className="dropdown-item" onClick={handleLogout}>Logout</div>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown; // Export the component for use elsewhere in the application
