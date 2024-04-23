// Importing necessary hooks from React and react-router-dom
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ScrollUp component definition
function ScrollUp() {
  const { pathname } = useLocation(); // Destructuring to get the pathname from the location object

  // useEffect hook to handle the scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the window
  }, [pathname]); // This effect depends on the pathname, running the effect whenever it changes

  return null; // This component does not render any JSX or HTML itself
}

// Export the ScrollUp component for use in other parts of the application
export default ScrollUp;
