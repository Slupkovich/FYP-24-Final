import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroToIdea.css';
import './CritiqueOCP.css';
import './EntrePhase.css';
import './BusOpp.css';
import './HiTri.css';
import './M1Prog3.css';
import AuthPrompt from '../../../components/AuthPrompt/AuthPrompt';
import LoadingIn from '../../../components/AuthPrompt/LoadingIn';
import { AccountContext } from "../../../components/Account";



const IntroToIdea = () => {
  return (
    <section className="idea-generation-section">
      <div className="idea-generation">
        <h1 className="idea-generation__title">Idea Generation and Opportunity Recognition</h1>
        <p className="idea-generation__definition">
          <strong>Idea:</strong> a thought, an impression, or a notion.
        </p>
        <p className="idea-generation__definition">
          <strong>Opportunity:</strong> A favourable set of circumstances that creates a need for a new product, service, or business.
        </p>
        <p className="idea-generation__definition">
          <strong>Window of Opportunity:</strong> The time period in which a firm can realistically enter a new market.
        </p>
        <p className="idea-generation__definition">
          <strong>Opportunity Gap:</strong> A problem that could be solved with a new business.
        </p>
        <p className="idea-generation__definition">
          <strong>Feasibility Analysis:</strong> the process of determining if a business idea is viable.
        </p>
        
        <h2 className="idea-generation__subtitle">Ideas vs Opportunities</h2>
        <ul className="idea-generation__list">
          <li className="idea-generation__list-item">An idea may or may not meet the criteria of an opportunity.</li>
          <li className="idea-generation__list-item">Many entrepreneurial ventures fail because there was no real opportunity behind their idea.</li>
        </ul>
      </div>
    </section>
  );
};


const critiquesData = [
  {
      id: 'customer-discovery',
      quote: 'Learning and adapting based on customer feedback is more beneficial than rigid planning',
      reference: 'Mintzberg, H., 1991. Learning 1, planning 0 reply to Igor Ansoff. Strategic management journal, 12(6), pp.463- 466.',
      imageUrl: '/ExecutionM1P3.png'
  },
  {
      quote: 'Human capital has the strongest effect on venture performance, while planning only has a minimal effect on performance',
      reference: 'Haber, S. and Reichel, A., 2007. The cumulative nature of the entrepreneurial process: The contribution of human capital, planning and environment resources to small venture performance. Journal of Business Venturing, 22(1), pp.119-145.'
  },
  {
      quote: 'Over-planning can create a false sense of certainty about the future',
      reference: 'Bhide, A. (2000), The Origin and Evolution of New Businesses, Oxford University Press, New York'
  },
  {
      quote: 'Reliance on predictions can lead to mistakes, as the future is unpredictable',
      reference: 'Bird, B. (1988), ‘Implementing entrepreneurial ideas: the case for intention’, Academy of Management Review, Vol 13, No 3, pp 442–453'
  },
  {
      id: 'value-equation',
      quote: 'Strict adherence to a plan can prevent necessary adjustments in response to changing conditions',
      reference: 'Mintzberg, H. (1994), ‘The fall and rise of strategic planning’, Harvard Business Review, January–February, pp 107–114',
      imageUrl: '/ValueEquationM1P3.png' // Referencing imported image
  }
];
      
// This React component renders a section containing critiques of a conventional process.
const CritiqueOCP = () => {
  return (
    // Main section for critiques, using a specific class for styling.
    <section className="critiques-sec">
      <div className="critiques">
        <h1 className="critiques__title">
          <span>Critiques of Conventional Process</span>
        </h1>
        <div className="critiques__container">
          {critiquesData.map((critique, index) => (
            // Individual box for each critique. Conditional class added if the critique has an image.
            <div key={index} className={`critiques__box ${critique.imageUrl ? 'critiques__box--with-image' : ''}`}>
              <p className="critiques__quote">{critique.quote}</p>
              {critique.imageUrl && (
                // Conditional rendering for an image with a dynamic URL taken from the environment variables.
                <div
                  className="critiques__image"
                  style={{ backgroundImage: `url(${process.env.PUBLIC_URL + critique.imageUrl})` }}
                />
              )}
              <p className="critiques__reference">{critique.reference}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



// Component to represent the initial phase of entrepreneurship, including relevant images and titles.
const EntrePhase = () => {
  return (
      // Main container section for the entrepreneurship phase content.
      <section className="ep-container">
          <div className="ep-phase">
              <h1 className="ep-phase__title">Initial phase of Entrepreneurship</h1>
              <div className="ep-phase__images-container">
                  <div className="ep-phase__image-wrapper">
                      <h2 className="ep-phase__image-title">Source of Ideas</h2>
                      <img 
                          className="ep-phase__image" 
                          src={`${process.env.PUBLIC_URL}/SourceOfIdeas1.png`} 
                          alt="Source of Venture Ideas in 2994 Firms" />
                  </div>
                  <div className="ep-phase__image-wrapper">
                      <h2 className="ep-phase__image-title">Source Importance for Identifying New Business Ideas</h2>
                      <img 
                          className="ep-phase__image" 
                          src={`${process.env.PUBLIC_URL}/SourceOfIdeas2.png`} 
                          alt="Source Importance for Identifying New Business Ideas" />
                  </div>
              </div>
          </div>
      </section>
  );
};


const BusOpp = () => {
  return (
    <section className="business-opportunities">
      <div className="business-opportunities__container">
      <h1 className="business-opportunities__title">Essential Criteria for Opportunities</h1>
        <div className="business-opportunities__main">
          <p className="business-opportunities__main-text">Opportunity</p>
        </div>
        <div className="business-opportunities__criteria-container">
          <div className="business-opportunities__criteria business-opportunities__criteria--attractive">
            <p className="business-opportunities__criteria-title">Attractive</p>
            <span className="business-opportunities__criteria-description">Will people pay for it and can I make money?</span>
          </div>
          <div className="business-opportunities__criteria business-opportunities__criteria--durable">
            <p className="business-opportunities__criteria-title">Durable</p>
            <span className="business-opportunities__criteria-description">Will people need this thing for long enough to sustain a business?</span>
          </div>
          <div className="business-opportunities__criteria business-opportunities__criteria--timely">
            <p className="business-opportunities__criteria-title">Timely</p>
            <span className="business-opportunities__criteria-description">What is the level of competition and is there a window of opportunity?</span>
          </div>
          <div className="business-opportunities__criteria business-opportunities__criteria--anchored">
            <p className="business-opportunities__criteria-title">Anchored in something that creates customer value</p>
            <span className="business-opportunities__criteria-description">Does this thing improve the customers’ lives enough for them to want it?</span>
          </div>
        </div>
      </div>
    </section>
  );
};


const HiTri = () => {
  // An array of the hierarchy levels for the segmented control
  const levels = [
    'Biological and Physiological Needs',
    'Safety Needs',
    'Belongingness and Love Needs',
    'Esteem Needs',
    'Cognitive Needs',
    'Aesthetic Needs',
    'Self-Actualisation Needs',
    'Transcendence Needs'
  ];

  // Content for each level (replace with the actual content)
  const content = {
    'Biological and Physiological Needs': `
        At the base of Maslow's hierarchy, these fundamental needs are critical for basic human survival and must be satisfied first before individuals can progress to higher levels of the hierarchy. They encompass air, which is essential for respiration; water, vital for hydration; food, necessary for nutrition; shelter, providing protection and safety; warmth to regulate body temperature; and sleep, crucial for restoration and health. Also included are other bodily functions that contribute to homeostasis and overall well-being.
        
        Meeting these physical needs is a prerequisite for individuals to focus on higher pursuits such as learning, growth, and personal development. In any context, whether it’s an educational environment or a business venture, acknowledging and addressing these primary needs can significantly enhance an individual's capacity for higher-level cognitive functions and psychological well-being. Creating environments that respect and ensure these needs can facilitate concentration, learning, and the drive towards self-actualisation.
        `,
    'Safety Needs': `
        Situated above physiological requirements on Maslow's hierarchy, safety needs are pivotal for an individual's continued stability and security. They entail the protection from harm, financial security to prevent existential stress, health to avoid illness, and the safeguarding of one's property. These needs reflect a desire for predictability and order in the world.

        In a learning or business context, ensuring safety can dramatically enhance engagement and productivity. For those providing services or products, focusing on these needs could mean offering solutions that safeguard health, enhance personal security, or protect financial investments. When it comes to educational environments, this translates into creating spaces—whether physical or digital—that prioritise the safety and emotional well-being of learners. This includes measures like robust cybersecurity to protect personal data, reliable access to educational materials, and the design of safe learning spaces.
  
        Consistent communication and clear structures in educational or professional settings also meet safety needs by reducing anxiety and providing a dependable framework within which individuals can operate without distraction. When individuals feel safe, they can direct their energy towards personal growth and higher-level goals.
        `,
    'Belongingness and Love Needs': `
        Once physiological and safety needs are adequately met, the next stage in Maslow's hierarchy is the pursuit of belongingness and love. This stage reflects our intrinsic need for social interaction, acceptance, and the establishment of emotional bonds. It encompasses our relationships with friends and family, romantic partnerships, and the wider community, reflecting the human desire for companionship and understanding.

        For those in the sphere of education or business, this means recognising the powerful role that community and connection play in fostering loyalty, engagement, and satisfaction. Creating products, services, or learning environments that encourage community building, social interaction, and relationship formation can fulfil these essential human needs. In practice, this could involve incorporating social networking features into online platforms, facilitating group activities, or creating spaces that promote cooperative learning and mutual support. By prioritising these social and emotional dimensions, businesses and educational institutions can create a sense of belonging that enhances the overall experience and supports individuals in their journey toward self-actualisation.
        `,
    'Esteem Needs': `
        In the hierarchy of needs, esteem is crucial for fostering self-worth and accomplishment. It involves the human desire for respect from others, as well as inner self-respect. Esteem needs manifest as the pursuit of self-confidence, achievement, and recognition. These needs are essential for developing a sense of personal value and capability.

        For entrepreneurs and educators, addressing esteem needs means providing opportunities for individuals to demonstrate competence and receive recognition. This can be achieved through tools and platforms that allow for the showcasing of personal and professional achievements, or educational programs that offer certifications and badges upon completion. Features like progress tracking and positive feedback can validate an individual's efforts, enhancing their self-esteem and motivation.
 
        Incorporating elements that celebrate individual milestones, whether through a leaderboard or personal acknowledgments, can create a sense of pride and drive. By enabling individuals to feel accomplished and valued, businesses and learning environments can cultivate a productive and positive atmosphere, where individuals are motivated to continue striving towards their goals.
        `,
    'Cognitive Needs': `
        After satisfying the more immediate needs of safety, belonging, and esteem, individuals seek to fulfil their cognitive needs, which involve the pursuit of knowledge, understanding, and exploration. This stage of Maslow's hierarchy highlights the innate human desire for intellectual stimulation and growth.

        In the context of business and education, meeting cognitive needs can involve the creation and provision of products and services that challenge the mind and promote learning. This could include educational materials, intellectually stimulating games, or cutting-edge software that encourages users to push the boundaries of their understanding. For educators and content creators, it means developing thought-provoking material that nurtures curiosity and critical thinking.

        Offering a variety of content delivery methods to suit different learning styles—such as interactive media, discussions, and hands-on projects—ensures that intellectual appetites are met. Encouraging self-directed learning and providing opportunities for learners to dive into subjects that interest them can significantly enhance the learning experience. By addressing cognitive needs, one can foster an environment of continuous learning and personal development, helping individuals to expand their horizons and deepen their understanding of the world around them.
        `,
    'Aesthetic Needs': `
        As individuals ascend Maslow's hierarchy, they reach the aesthetic needs that encompass a deep appreciation for beauty, balance, and form. This level is about the desire to experience and create aesthetically pleasing sensations and environments. It reflects an inherent need to appreciate and seek harmony in one's surroundings and can significantly influence emotional well-being.
        
        Entrepreneurs and educators can address these needs by developing products, services, and environments that prioritise aesthetic value. In terms of products, this could mean offering goods that not only serve a function but also delight the senses, such as beautifully crafted home decor, fashion, or elegantly designed digital interfaces. For educational tools and environments, the emphasis on aesthetics could translate into creating learning materials and spaces that are visually attractive and intellectually stimulating.
        
        Incorporating elements like harmonious design, multimedia content, and an overall visually appealing user interface can make learning platforms more engaging. Similarly, for physical learning spaces, thoughtful architecture, pleasing colour schemes, and natural lighting can create an inviting atmosphere that promotes learning. By fulfilling aesthetic needs, one not only elevates the user experience but also resonates with the consumer's values and sense of beauty, potentially fostering a deeper connection to the material and the learning journey itself.
        `,
    'Self-Actualisation Needs': `
        At the apex of Maslow's hierarchy lies self-actualisation, which represents the fulfilment of one's potential and the realisation of one's true self. It is characterised by a pursuit of personal growth, self-discovery, and peak experiences. Self-actualisation is not just about reaching goals but also about the journey of becoming the most authentic version of oneself.

        For entrepreneurs and educators, addressing self-actualisation needs means providing avenues for individuals to explore and develop their talents, express creativity, and engage in tasks that challenge and fulfill them. Products and services that facilitate personal development, such as career advancement programs, creative outlets, or travel that broadens perspectives, cater to this profound need. In learning environments, this translates into creating platforms and opportunities for learners to delve into subjects that ignite their passion, develop complex skills, and participate in innovative projects.

        Tools that encourage self-reflection and documentation of personal growth, such as digital portfolios, journals, or mentorship programs, can aid individuals in their quest for self-actualisation. Offering personalised learning experiences and paths that align with individual goals enables learners to steer their educational journey towards personal excellence. By fostering an environment where individuals feel supported in their pursuit of self-actualisation, businesses and educational institutions can cultivate a deep sense of loyalty and satisfaction, empowering people to achieve their ultimate potential.
        `,
      'Transcendence Needs': `
        Transcendence represents the highest level in the extended version of Maslow's hierarchy, where the focus shifts from self-fulfilment to the well-being of others and a higher purpose. It embodies the desire to transcend the individual self and contribute to something greater, facilitating the actualisation of others. This stage is characterised by a deep sense of altruism, spirituality, and community service.

        In the entrepreneurial and educational spheres, addressing transcendence needs means creating initiatives that not only serve personal goals but also have a positive impact on society and enable others to reach their potential. This could involve establishing ventures that prioritise social responsibility, environmental care, and educational up-liftment. For entrepreneurs, transcendent aspirations might manifest in the form of businesses that focus on community development, platforms that unite individuals around humanitarian causes, or content that broadens perspectives and cultivates wisdom.

        Products and services that resonate with transcendence are those that foster community engagement, encourage philanthropy, and support sustainability. Integrating social impact into business models not only aligns with the values of a growing number of consumers looking to make a meaningful difference in the world but also establishes a legacy that outlives mere product lifecycles. By fostering a brand ethos that emphasises service and societal contribution, entrepreneurs can connect with their audience on a deeper level and create a lasting, positive footprint in the world.
        `
  };

  // Function to convert text into paragraphs, enhancing readability.
  const renderParagraphs = (text) => {
    return text.split('\n').map((paragraph, index) => (
      <p key={index} className="maslows-hierarchy__paragraph">
        {paragraph.trim()}
      </p>
    ));
  };

  // State hook to manage the currently active level, initializing with the first level from the list.
  const [activeLevel, setActiveLevel] = useState(levels[0]);

  // Function to handle tab click events, updating the active level accordingly.
  const handleLevelClick = (level) => {
    setActiveLevel(level); // Set the clicked level as active.
  };

  // Construct the URL for the main image from the public assets folder.
  const imageUrl = `${process.env.PUBLIC_URL}/MaslowsHiTri2.png`;

  return (
    <section className="maslows-hierarchy">
      <div className="maslows-hierarchy__container">
        <h1 className="maslows-hierarchy__title">Understanding Consumer Needs</h1>
        <p className="maslows-hierarchy__description">
          Maslow’s Hierarchy of Needs provides insights into consumer motivations,
          serving as a guide to pinpoint market opportunities that align with these fundamental human necessities.
        </p>
        <img 
          className="maslows-hierarchy__image" 
          src={imageUrl} 
          alt="Maslow's Hierarchy of Needs" 
        />

        <div className="maslows-hierarchy__levels">
          {/* Mapping through 'levels' to render a button for each level */}
          {levels.map((level, index) => (
            <button
              key={index}
              className={`maslows-hierarchy__level-button ${activeLevel === level ? 'active' : ''}`}
              onClick={() => handleLevelClick(level)}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="maslows-hierarchy__content-card">
          {/* Rendering paragraphs dynamically based on the active level */}
          {renderParagraphs(content[activeLevel])}
        </div>
      </div>
    </section>
  );
};


const M1Prog3 = () => {
  const navigate = useNavigate(); // Hook from React Router for navigation

  // Function to go back to the previous page in the browser's history
  const goToPreviousModule = () => {
    navigate(-1);
  };

  // Function to navigate to the next module specifically named 'M1P4'
  const goToNextModule4 = () => {
    navigate('/moduleOne/M1P4'); 
  };

  // Function to open a quiz in a new tab using a given URL
  const goToQuiz = () => {
    window.open("https://forms.gle/MmhV6TwneNkamWLU8", "_blank");
  };

  return (
    <section className="module-progress-3-section">
      <div className="module-progress-3-container">
        <h2 className="module-progress-3__quiz-text">Embark on Your Next Venture: Ideas Realised</h2>
        <button onClick={goToQuiz} className="module-progress-3__quiz-button">
          Take the Quiz
        </button>
        <div className="module-progress-3__button-container">
          <button onClick={goToPreviousModule} className="module-progress-3__button--back">
            Return to Previous Section
          </button>
          <button onClick={goToNextModule4} className="module-progress-3__button--next">
            Continue to Next Section
          </button>
        </div>
      </div>
    </section>
  );
};



// Component to manage and display content based on the user's authentication status
function ModOnePageThree() {
  const { getSession } = useContext(AccountContext); // Utilising useContext hook to access getSession function from AccountContext
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

    <IntroToIdea />
    <CritiqueOCP />
    <EntrePhase />
    <BusOpp />
    <HiTri />
    <M1Prog3 />
  
      </div>
    );
  }
  
  export default ModOnePageThree;