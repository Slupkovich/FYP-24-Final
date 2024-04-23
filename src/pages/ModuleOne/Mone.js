import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSec.css';
import './TraitGraph.css'; 
import './IntroToEntre.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faUserCircle, faStar, faFistRaised, faSitemap, faTrophy, faHeart, faLightbulb, faSyncAlt, faToolbox, faHammer, faAnchor, faUserGraduate, faDollarSign, faHandsHelping, faSmileBeam  } from '@fortawesome/free-solid-svg-icons';
import './ChaAndRea.css';
import './Positivity.css';
import './BeneOfEntre.css';
import './MProg.css';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Footer from '../../components/Footer';
import { AccountContext } from "../../components/Account";
import { useContext } from 'react';
import AuthPrompt from '../../components/AuthPrompt/AuthPrompt';
import LoadingIn from '../../components/AuthPrompt/LoadingIn';

// Register the chart.js components
ChartJS.register(CategoryScale, LinearScale,BarElement,Title, Tooltip, Legend);

// Component for the hero section of a webpage
const HeroSecOne = () => {
  // Return statement to render the hero section
  return (
      // Define the section element with a class of 'hero' for styling
      <section className="hero">
          {/* Container for scroll indicators, positioned at the bottom left and right */}
          <div className="scroll-indicators">
              {/* Span elements acting as left and right arrows */}
              <span className="arrow-down left"></span> {/* Left arrow */}
              <span className="arrow-down right"></span> {/* Right arrow */}
          </div>
      </section>
  );
};


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



// Component to display challenges and drawbacks of entrepreneurship
const ChaAndRea = () => {
  // The component returns a section element containing two divs,
  // each with a heading and a list of items highlighting different aspects
  return (
      <section className="challenges">
          {/* Container for disadvantages */}
          <div className="challenges__disadvantages">
              {/* Heading for the disadvantages section */}
              <h2 className="challenges__heading">Disadvantages of Entrepreneurship</h2>
              {/* Unordered list of disadvantages */}
              <ul className="challenges__list">
                  <li className="challenges__item">Entrepreneurs often face burnout from managing all business aspects.</li>
                  <li className="challenges__item">High risk of failure with the odds often against success</li>
                  <li className="challenges__item">Entrepreneurship can be a lonely journey with more losses than wins initially</li>
              </ul>
          </div>
          {/* Container for drawbacks */}
          <div className="challenges__drawbacks">
              {/* Heading for the drawbacks section */}
              <h2 className="challenges__heading">Drawbacks of Entrepreneurship</h2>
              {/* Unordered list of drawbacks */}
              <ul className="challenges__list">
                  <li className="challenges__item">Uncertainty of income and potential loss of investment</li>
                  <li className="challenges__item">Long hours and hard work with a possible lower quality of life in the early stages</li>
                  <li className="challenges__item">High levels of stress and periods of discouragement</li>
              </ul>
          </div>
      </section>
  );
};


// Component for displaying positivity-related content
const Positivity = () => {
  // Returns a section containing inspirational quotes, visual inspiration, and affirmations
  return (
      // Main section for the positivity content
      <section className="positivity">
          {/* Container for all positivity content */}
          <div className="positivity__content-box">
              {/* Container for inspirational quotes */}
              <div className="positivity__inspirational-quotes">
                  {/* Heading for the inspirational quotes section */}
                  <h2 className="positivity__heading">Inspirational Quotes from Successful Entrepreneurs</h2>
                  {/* Container for the quotes */}
                  <div className="positivity__quotes">
                      {/* Individual quotes */}
                      <p className="positivity__quote"><strong>Steve Jobs</strong>: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work..."</p>
                      <p className="positivity__quote"><strong>Oprah Winfrey</strong>: "Turn your wounds into wisdom. Understand that every experience teaching you something valuable..."</p>
                      <p className="positivity__quote"><strong>Elon Musk</strong>: "When something is important enough, you do it even if the odds are not in your favor."</p>
                      <p className="positivity__quote"><strong>Arianna Huffington</strong>: "Failure is not the opposite of success; it's part of success."</p>
                      <p className="positivity__quote"><strong>Jack Ma</strong>: "Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine."</p>
                  </div>
              </div>
              {/* Section for visual inspiration */}
              <section className="positivity__visual-inspiration">
                  {/* Heading for the visual inspiration section */}
                  <h2 className="positivity__heading">Visual Inspiration</h2>
                  {/* Container for the inspirational image */}
                  <div className="positivity__inspiration-image"></div>
              </section>
              {/* Container for affirmations */}
              <div className="positivity__affirmations">
                {/* Heading for the affirmations section */}
                  <h2 className="positivity__heading">Affirmations for the Entrepreneurial Spirit</h2>
                  {/* Individual affirmations */}
                  <p className="positivity__affirmation">"I am capable of overcoming any challenge that comes my way."</p>
                  <p className="positivity__affirmation">"Every setback is a setup for a comeback."</p>
                  <p className="positivity__affirmation">"I am resilient, resourceful, and ready to turn my vision into reality."</p>
                  <p className="positivity__affirmation">"My journey is unique, and my story will inspire others."</p>
                  <p className="positivity__affirmation">"Success is not final; failure is not fatal: It is the courage to continue that counts."</p>
              </div>
          </div>
      </section>
  );
};



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



// Dataset for the bar graph, defining labels and associated data
const data = {
  labels: ['Vision', 'Work Ethic', 'Resilience', 'Positivity', 'Passion'], // Categories of entrepreneurial traits
  datasets: [
    {
      label: 'Percentage of Business Owners Citing', // Description of the dataset
      data: [61, 45, 41, 35, 34], // Percentage values corresponding to each trait
      backgroundColor: [ // Colours for the bars in a translucent format
        'rgba(94, 195, 229, 0.5)', // Bright Sky Blue
        'rgba(3, 15, 40, 0.5)', // Dark Blue
        'rgba(94, 195, 229, 0.5)', // Repeating pattern for visual consistency
        'rgba(3, 15, 40, 0.5)',
        'rgba(94, 195, 229, 0.5)'
      ],
      borderColor: [ // Border colours for the bars
        'rgba(94, 195, 229, 1)',
        'rgba(3, 15, 40, 1)',
        'rgba(94, 195, 229, 1)',
        'rgba(3, 15, 40, 1)',
        'rgba(94, 195, 229, 1)'
      ],
      borderWidth: 1, // Width of the borders around the bars
    },
  ],
};

// Configuration options for the bar graph
const options = {
  scales: {
    y: {
      type: 'linear', // Linear scale for the y-axis
      beginAtZero: true, // Y-axis begins at zero
    },
  },
  responsive: true, // Graph size will adapt to the container size
  maintainAspectRatio: true, // Maintains width-to-height ratio
  aspectRatio: 2, // Aspect ratio of the graph
  plugins: {
    legend: {
      display: false, // Do not display the legend
    },
    tooltip: {
      enabled: true, // Enable tooltips
      mode: 'index',
      intersect: false,
      backgroundColor: '#030F28', // Tooltip background colour
      titleColor: '#ffffff', // Tooltip title colour
      bodyColor: '#ffffff', // Tooltip body colour
      borderColor: '#5EC3E5', // Tooltip border colour
      borderWidth: 1, // Width of the border
      cornerRadius: 4, // Rounded corners of the tooltip
      bodySpacing: 5, // Spacing within the tooltip
    },
  },
};

// Component to render the success graph
const SucGraph = () => {
  return (
    <div className="success-graph">
      <div className="success-graph__container">
        <h2 className="success-graph__title">Attributes for Success</h2> 
        <Bar data={data} options={options} />
        <p className="success-graph__source-reference">Data sourced from Forbes article: "What Traits Do We Need To Succeed As Entrepreneurs?" (2015)</p> 
      </div>
    </div>
  );
};



// Component for module progression, offering options to take a quiz or continue to the next section
const MProg = () => {
  const navigate = useNavigate(); // Hook for programmatically navigating

  // Function to navigate to the next module part
  const goToNextModule2 = () => {
    navigate('/moduleOne/M1P2'); // Navigates to the specified path
  };

  // Function to open the quiz link in a new tab
  const goToQuiz = () => {
    window.open("https://forms.gle/7QTSheMs6zLPccYL8", "_blank"); // Opens a URL in a new tab
  };

  // Rendering the module progress section
  return (
    <section className="module-progress-section">
      <div className="module-progress-container"> 
        <h2 className="module-progress__quiz-text">Validate Your Mastery and Advance Confidently!</h2> 
        <button onClick={goToQuiz} className="module-progress__quiz-button"> 
          Take the Quiz
        </button>
        <div className="module-progress__button-container">
          <button onClick={goToNextModule2} className="module-progress__button--next"> 
            Continue to Next Section
          </button>
        </div>
      </div>
    </section>
  );
};



// Component to manage and display content based on the user's authentication status
function Mone() {
  const { getSession } = useContext(AccountContext); // Utilizing useContext hook to access getSession function from AccountContext
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track whether the user is logged in
  const [isLoading, setIsLoading] = useState(true); // State to track whether the authentication check is loading

  // useEffect hook to perform the authentication check once the component mounts
  useEffect(() => {
    getSession() // Attempt to get the current user session
      .then(() => {
        setIsLoggedIn(true); // If successful, set isLoggedIn to true
      })
      .catch(() => {
        setIsLoggedIn(false); // If an error occurs, set isLoggedIn to false
      })
      .finally(() => {
        setIsLoading(false); // Once the check is complete, set isLoading to false
      });
  }, [getSession]); // Dependency array to ensure the effect runs only when getSession function changes

  // Conditional rendering based on the authentication status
  if (isLoading) {
    return <LoadingIn />; // Displays a loading indicator while checking authentication status
  }

  if (!isLoggedIn) {
    return <AuthPrompt />; // If not logged in, render the AuthPrompt component to ask for authentication
  }
  
  // If the user is logged in, render the main content of the application
  return (
    <div>
      <HeroSecOne /> 
      <IntroToEntre />
      <ChaAndRea />
      <Positivity />
      <BeneOfEntre />
      <SucGraph />
      <MProg /> 
      <Footer />
    </div>
  );
}

export default Mone; // Export the Mone component for use in other parts of the application








