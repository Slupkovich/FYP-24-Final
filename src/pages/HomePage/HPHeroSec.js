import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './HeroSection.css';
import { AccountContext } from "./Account";


// Functional component for the homepage hero section
function HPHeroSec() {
  // Hook to access navigation functionality
  const navigate = useNavigate();

  // Accessing the session information from AccountContext using useContext hook
  const { getSession } = useContext(AccountContext);  

  // State to manage the user's session information
  const [user, setUser] = React.useState(null);

  // useEffect hook to fetch session details on component mount or getSession dependency change
  React.useEffect(() => {
    // Attempt to fetch the session
    getSession().then(session => {
      // If the session is successfully fetched, update the user state with the session
      setUser(session);
    }).catch(() => {
      // If fetching the session fails, set user state to null
      setUser(null);
    });
  }, [getSession]); // getSession is a dependency of this effect

  // Handler for the button click to navigate to the signup page
  const onHomeHeroCTA = () => {
    navigate('/signup');
  };

  // Component return with JSX for rendering
  return (
    <div className="hp-hero-sec__container">
      <h1 className="hp-hero-sec__title">Ideate, Innovate, Initiate</h1>
      <p className="hp-hero-sec__subtitle">The Hub for Future Business Leaders</p>
      {!user && (
        // Conditionally render the button if the user is not logged in
        <button className="hp-hero-sec__btn" onClick={onHomeHeroCTA}>Join Now</button>
      )}
    </div>
  );
}


export default HPHeroSec;