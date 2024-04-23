import React from 'react';
import Slider from 'react-slick';
import './HPModuleCarousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  
  
  export default HPModuleCarousel;