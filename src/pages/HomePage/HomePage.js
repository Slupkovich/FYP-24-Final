import React, { useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { AccountContext } from "../../components/Account";
import './HPHeroSec.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faSeedling, faRocket } from '@fortawesome/free-solid-svg-icons';
import './HPAboutSec.css';
import './HPModuleCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HPSUFailure.css';
import { gsap } from 'gsap';
import Slider from 'react-slick';
import Footer from '../../components/Footer';


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


// Array holdering Information to be displayed in each card
const modules = [
  { 
    id: 'm1',
    title: 'Foundations of Entrepreneurship',
    icon: '/m1-icon.png',
    bulletPoints: [
      {
        point: "Module 1 Overview:",
        subPoints: [
          "Starts with basic entrepreneurship principles.",
          "Highlights creativity and resilience.",
          "Views failure as a learning step."
        ]
      },
      {
        point: "Idea Development:",
        subPoints: [
          "Encourages brainstorming and mind mapping."
        ]
      },
      {
        point: "Strategic Planning:",
        subPoints: [
          "Introduces the Business Model Canvas.",
          "Covers value delivery, operations, and revenue strategies.",
        ]
      },
      {
        point: "Goal:",
        subPoints: [
          "Equip aspiring entrepreneurs for innovation and success."
        ]
      },
    ]
  },
  { 
      id: 'm2',
      title: 'Developing Business Strategies',
      icon: '/m2-icon.png',
      bulletPoints: [
      {
        point: "Module 2 Under Construction",
        subPoints: [
          "Work in Progress"
        ]
      },
      {
        point: "Upcoming Content:",

      },
      {
        point: "Understanding Revenue and Pricing Strategies",
        subPoints: [
          "Learn key revenue models and explore effective pricing strategies."
        ]
      },
      {
        point: "Branding and Strategic Planning",
        subPoints: [
          "Build a distinctive brand and develop strategic plans to enhance market presence."
        ]
      },
      {
        point: "Supply Chain and MVP (Minimum Viable Product)",
        subPoints: [
          "Streamline your supply chain and create a Minimum Viable Product for early market feedback."
        ]
      },
      {
        point: "Competitive Analysis and Market Understanding",
        subPoints: [
          "Conduct comprehensive market and competitor analysis to strategically position your business."
        ]
      }
      ] 
  },
  { 
      id: 'm3',
      title: 'Building the Business Plan',
      icon: '/m3-icon.png',
      bulletPoints: [
        {
          point: "Module 3 Under Construction",
          subPoints: [
            "Work in Progress"
          ]
        },
        {
          point: "Upcoming Content:",
  
        },
        {
          point: "Crafting the Business Plan",
          subPoints: [
            "Master the art of creating a comprehensive business plan that captures the essence of your venture."
          ]
        },
        {
          point: "Feasibility and Prototyping",
          subPoints: [
            "Assess the feasibility of your business ideas and engage in prototyping to test and refine these ideas."
          ]
        },
        {
          point: "Financial Planning and Analysis",
          subPoints: [
            "Develop skills in financial analysis and planning to ensure your business can reach and maintain profitability."
          ]
        },
        {
          point: "Iterative Product Development",
          subPoints: [
            "Learn about iterative development methodologies to enhance product development through continuous improvements."
          ]
        }
        ] 
  },
  { 
      id: 'm4',
      title: 'Advanced Business Concepts',
      icon: '/m4-icon.png',
      bulletPoints: [
        {
          point: "Module 4 Under Construction",
          subPoints: [
            "Work in Progress"
          ]
        },
        {
          point: "Upcoming Content:",
  
        },
        {
          point: "Understanding Value and Profit",
          subPoints: [
            "Explore the concepts of value creation and how it drives profitability in business."
          ]
        },
        {
          point: "Market Evolution and Revenue Streams",
          subPoints: [
            "Examine how markets evolve and identify diverse revenue streams to sustain business growth."
          ]
        },
        {
          point: "Customer Feedback and Business Pivoting",
          subPoints: [
            "Learn the importance of customer feedback and the strategies for pivoting business models based on this feedback."
          ]
        },
        {
          point: "Empathy and Relationship in Business",
          subPoints: [
            "Understand the role of empathy in building relationships and how it enhances marketing strategies."
          ]
        }
        ]
  },
  { 
      id: 'm5',
      title: 'Digital Entrepreneurship and Innovation',
      icon: '/m5-icon.png',
      bulletPoints: [
        {
          point: "Module 5 Under Construction",
          subPoints: [
            "Work in Progress"
          ]
        },
        {
          point: "Upcoming Content:",
  
        },
        {
          point: "Digital Venture Creation",
          subPoints: [
            "Delve into the foundations of launching digital ventures and the key components that ensure their success."
          ]
        },
        {
          point: "Design Thinking and Innovation",
          subPoints: [
            "Engage with design thinking processes and innovation practices to solve problems creatively and effectively."
          ]
        },
        {
          point: "Digital Marketing Strategies",
          subPoints: [
            "Explore strategies for effective marketing in a digital context, from social media to search engine optimisation."
          ]
        },
        {
          point: "Global Entrepreneurship",
          subPoints: [
            "Understand the challenges and opportunities of taking your entrepreneurship efforts global."
          ]
        }
        ]
  },
  { 
      id: 'm6',
      title: 'Ethics, Social Responsibility, and Future Trends',
      icon: '/m6-icon.png',
      bulletPoints: [
        {
          point: "Module 6 Under Construction",
          subPoints: [
            "Work in Progress"
          ]
        },
        {
          point: "Upcoming Content:",
  
        },
        {
          point: "Ethics and Social Responsibility",
          subPoints: [
            "Explore the fundamental concepts of business ethics and social responsibility and their critical role in sustainable business practices."
          ]
        },
        {
          point: "Economic and Social Impact",
          subPoints: [
            "Examine how businesses measure their value beyond profits, considering economic and social impacts."
          ]
        },
        {
          point: "The Future of Business Models",
          subPoints: [
            "Discover emerging business models and how they are reshaping industries and competitive landscapes."
          ]
        },
        {
          point: "Entrepreneurship Theory vs. Art as Business",
          subPoints: [
            "Analyse the intersection of entrepreneurship theory and the business aspects of art, exploring different perspectives on creativity and commerce."
          ]
        }
        ]
  }
  //{ id: 'm7', title: 'Extra Content', icon: '/balancedScaleIcon.png', description: 'Short description' }
];
  
// Component to render individual bullet points with optional sub-points
const BulletPoint = ({ point, subPoints }) => (
  <li>
    {point} {/* Display the main point */}
    {subPoints && subPoints.length > 0 && (
      <ul className="module-card__sub-bullet-points">
        {subPoints.map((subPoint, index) => (
          <li key={index}>{subPoint}</li> // Render each sub-point in a nested list
        ))}
      </ul>
    )}
  </li>
);

// Component to render each module card, including its front and back sides
const ModuleCard = ({ icon, title, bulletPoints }) => (
  <div className="module-card">
    <div className="module-card__inner">
      <div className="module-card__front">
        <img src={icon} alt={title} className="module-card__icon" />
        <h3 className="module-card__title">{title}</h3>
      </div>
      <div className="module-card__back">
        <ul className="module-card__bullet-points">
          {bulletPoints.map((item, index) => (
            <BulletPoint key={index} {...item} /> // Map over bulletPoints array to render each point
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// Carousel component to display module cards in a slider format
const ModulesCarousel = () => {
  // Settings for the slider functionality
  const settings = {
    dots: true, // Show dot indicators at the bottom of the carousel
    infinite: false, // Do not loop the slides infinitely
    speed: 500, // Transition speed between slides
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 3, // Number of slides to scroll at once
    responsive: [
      {
        breakpoint: 1024, // At 1024px screen width and below
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 2, // Scroll 2 slides
          infinite: true, // Enable infinite looping
          dots: true // Show dots
        }
      },
      {
        breakpoint: 600, // At 600px screen width and below
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1 // Scroll 1 slide
        }
      }
    ]
  };

  // Rendering the carousel component
  return (
    <div className="modules-carousel">
      <div className="modules-carousel__container">
        <h2 className="modules-carousel__title">Explore My Modules</h2>
        <Slider {...settings}> 
          {modules.map(module => (
            <div className="modules-carousel__slide" key={module.id}>
              <ModuleCard {...module} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};



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



  function Homepage() {
    return (
      <div>
        <HPHeroSec />
        <HPAboutSec />
        <ModulesCarousel />
        <HPSUFailure />
        <Footer />
      </div>
    );
  }

  export default Homepage;