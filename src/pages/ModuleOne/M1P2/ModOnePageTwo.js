import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroToBrain.css';
import './EduVideos.css';
import './MindMap.css';
import './MProg2.css';
import AuthPrompt from '../../../components/AuthPrompt/AuthPrompt';
import LoadingIn from '../../../components/AuthPrompt/LoadingIn';
import { AccountContext } from "../../../components/Account";

// Define a functional component named IntroToBrain to represent a section of a webpage dedicated to brainstorming
const IntroToBrain = () => {
  return (
      // Section element with a class for styling purposes
      <section className="intro-brain-section">    
          <div className="intro-brain">
              <header className="intro-brain__header">
                  <h1 className="intro-brain__title">BrainStorming</h1>
              </header>
              <div className="intro-brain__content">
                  <p className="intro-brain__text">
                      Welcome to the journey of innovation and creativity. In the realm of entrepreneurship,
                      brainstorming is not just a technique; it's a fundamental step that transforms the seed of an idea into a forest of possibilities. Here, we embrace the power of collective thought to explore the unexplored and imagine the unimaginable.
                  </p>
                  <p className="intro-brain__text">
                      Remember, every monumental business starts as a fleeting thought. The art of brainstorming allows us to capture those thoughts, nurture them, and mold them into tangible opportunities. It's where creativity meets practicality, leading to the birth of groundbreaking ideas that shape the future.
                  </p>
                  <ul className="intro-brain__list">
                      <li className="intro-brain__list-item">
                          <strong className="intro-brain__list-item--strong">More is more:</strong> In brainstorming, quantity breeds quality. The more ideas you generate, the higher the chance of uncovering that groundbreaking concept.
                      </li>
                      <li className="intro-brain__list-item">
                          <strong className="intro-brain__list-item--strong">Don’t judge:</strong> Creativity flows when judgment is suspended. Every idea, no matter how outlandish, holds potential.
                      </li>
                      <li className="intro-brain__list-item">
                          <strong className="intro-brain__list-item--strong">Keep it fun:</strong> The best ideas often come when we're having fun. Creativity and play go hand in hand, fostering an environment where innovation thrives.
                      </li>
                  </ul>
                  <p className="intro-brain__text">
                      As aspiring entrepreneurs, engaging in effective brainstorming is the first step towards realising your dreams. Let's embark on this creative journey together, laying down the stepping stones for future success.
                  </p>
              </div>
          </div>
      </section>
  );
};



const EduVideo = () => {
    const videos = [
      {
        id: 'video-1',
        title: 'Effective Brainstorming Video',
        src: 'https://www.youtube.com/embed/HRWt1rBG10o',
        points: [
          'More is more: While most ideas might seem ridiculous, the purpose of the exercise is to change the way we think.',
          'Don’t judge: Creativity flows, don’t condemn any ideas.',
          'Keep it fun: Fun and creativity come hand in hand. No pressure.'
        ]
      },
      {
        id: 'video-2',
        title: 'Convergent vs. Divergent Thinking',
        src: 'https://www.youtube.com/embed/kh4c3R9mSkg',
        points: [
          'Analytic perspective: Good at dissecting problems, analysing them, and making decisions.',
          'Divergent thinking: Going out and exploring ideas.',
          'Convergent thinking: Reflecting on ideas, improving them, and coming up with decisions.',
          'Essential rules: Spend time coming up with ideas, don’t judge them, and separate creation from evaluation.'
        ]
      },
      {
        id: 'video-3',
        title: 'The Value of Brainstorming is Asking the Question',
        src: 'https://www.youtube.com/embed/MgNnR0eGP3Q',
        points: [
          'Creativity doesn’t happen by chance: It often occurs at unexpected times but isn’t accidental.',
          'Conscious vs. subconscious: Our conscious mind can access limited information, while our subconscious has a much broader reach.',
          'Asking the right questions: Brainstorming isn’t about solving the problem on the spot, it’s about asking the right questions.',
          'Let your mind wander: Avoid filling up all your time; give your mind the freedom to explore.'
        ]
      },
      {
        id: 'video-4',
        title: 'S.C.A.M.P.E.R.: Inventive Thinking',
        src: 'https://www.youtube.com/embed/M2I4PSdt7_8',
        points: [
          'Substitute: Identify elements of the current situation, product, or process that can be replaced with something else to improve the outcome. Consider what can be substituted to make a design more effective or efficient.',
          'Combine: Look for ways to merge two or more parts of your idea to create a novel solution. Combining elements can lead to innovative products or solutions that serve multiple purposes.',
          'Adapt: Adjust or modify elements of the idea to serve a different purpose or to fit into a new situation. Think about how existing solutions can be adapted to solve new problems.',
          'Magnify, Minify, or Modify: Consider how making something larger (magnify), smaller (minify), or changing its attributes (modify) could offer new value or solve a problem differently.',
          'Put to Another Use: Think creatively about how you can repurpose an item or idea in a context it wasn’t originally designed for. This encourages looking beyond conventional uses.',
          'Eliminate: Simplify by removing unnecessary or redundant parts. Consider what might happen if you eliminate certain aspects of your idea or product, focusing on streamlining and efficiency.',
          'Rearrange or Reverse: Change the order of operations, components, or the direction in which the process happens. This could involve reversing steps or rearranging elements to create a new perspective or approach.'
        ]
      }
    ];
  
// Define a functional component to display a collection of educational videos
return (
  // React fragment to return multiple elements without adding extra nodes to the DOM
  <>
    <div className="educational-videos-line"></div>

    <div className="educational-videos">
      <h2 className="educational-videos__main-title">Unlocking Creativity: Educational Insights on Thinking Techniques</h2>
      {videos.map((video) => (
        // Container for each video, using video.id as a key for React's rendering optimization
        <div key={video.id} className="educational-videos__container">
          <h3 className="educational-videos__title">{video.title}</h3>

          <iframe
            className="educational-videos__frame"
            src={video.src} // Source URL of the video
            title={video.title} // Title attribute for accessibility
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen // Allows the iframe to be displayed in full screen
          ></iframe>

          <ul className="educational-videos__points">
            {video.points.map((point, index) => (
              // List item for each point using index as a key
              <li key={index} className="educational-videos__point-item">{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </>
);
};



  const MindMap = () => {
    const points = [
        "Central Issue: Place the problem or topic in the centre.",
        "First-Level Branches: Represent the main elements, outlining the key areas of the issue.",
        "Second-Level Details: Expand from the first-level branches to add more specifics.",
        "Further Levels (Optional): Extend to third-level branches or beyond as needed, but avoid overcomplicating the map.",
        "Keep the structure clear and straightforward to maintain focus and effectiveness."
      ];

      return (
        <>
          <section className="mind-mapping-section">
            <div className="mind-mapping-container">
              <h2 className="mind-mapping__title">MindMapping</h2>
              
              <p className="mind-mapping__introduction">
                Transitioning from the broad horizon of brainstorming, where ideas abound without restraint, we now converge on the structured and interconnected landscape of mind mapping. This technique not only organises thoughts but also lays down a blueprint for turning them into actionable plans.
              </p>
              
              <h3 className="mind-mapping__sub-title">Understanding Mind Mapping</h3>
              <p className="mind-mapping__description">
                Mind mapping is an invaluable tool in the entrepreneur's kit, facilitating a visual representation of ideas and their connections. It begins with a central concept and extends outwards to secondary and tertiary ideas, much like branches from a tree. These connections form the logical structure necessary for effective planning and execution.
              </p>
              
              <h3 className="mind-mapping__sub-title">How to Construct a Mind Map</h3>
              <ol className="mind-mapping__steps">
                <li className="mind-mapping__step">
                  Identify your main idea or challenge and place it at the center of your map to serve as the focal point from which all other thoughts will radiate.
                </li>
                <li className="mind-mapping__step">
                  Draw branches to represent major categories or steps related to your central idea, using lines, symbols, colors, and images to illustrate connections and hierarchies.
                </li>
                <li className="mind-mapping__step">
                  Explore each branch with sub-branches that detail tasks, processes, and subtasks, expanding your map outward to encompass all aspects of your idea.
                </li>
                <li className="mind-mapping__step">
                  Look for patterns, relationships, and gaps in your map, which will guide further refinement and exploration.
                </li>
                <li className="mind-mapping__step">
                  Use the mind map to assess priorities, determine actionable items, and delegate tasks.
                </li>
              </ol>
              
              <h3 className="mind-mapping__sub-title">Applying Mind Mapping to Business Strategy</h3>
              <p className="mind-mapping__description">
                In business, mind mapping can chart a path from the genesis of an idea to its realisation as a product or service. It helps identify your target clientele, the benefits of your offerings, and the strategies to engage customers effectively. It is not merely a drawing but a living document that evolves with your business, culminating in a robust plan for success.
              </p>
              
              <div className="mind-mapping__video-container">
                <iframe
                  className="mind-mapping__video"
                  src="https://www.youtube.com/embed/g1uLyMoSji8"
                  title="Mind Mapping Techniques"
                  allowFullScreen
                ></iframe>

                <ul className="mind-mapping__video-key-points">
                  {points.map((point, index) => (
                    <li key={index} className="mind-mapping__video-point-item">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </>
      );
  };

 

// Define a functional component named MProg2
const MProg2 = () => {
  // Hook to access navigation capabilities from the router
  const navigate = useNavigate();

  // Function to navigate back to the previous page
  const goToPreviousModule = () => {
    navigate(-1); // Navigates back to the previous page in the history stack
  };

  // Function to navigate to the next module section
  const goToNextModule3 = () => {
    navigate('/moduleOne/M1P3'); // Navigates to the specific path of the next module
  };

  // Function to open a quiz in a new tab
  const goToQuiz = () => {
    window.open("https://forms.gle/f8VK15eEKXE6AbKX9", "_blank"); // Opens a URL in a new tab
  };

  // Render a section for navigating through the module and taking a quiz
  return (
    <section className="module-progress-2-section">
      <div className="module-progress-2-container">
        <h2 className="module-progress-2__quiz-text">Confirm Your Expertise: Quiz & Advance!</h2>
        <button onClick={goToQuiz} className="module-progress-2__quiz-button">
          Take the Quiz
        </button>
        <div className="module-progress-2__button-container">
          <button onClick={goToPreviousModule} className="module-progress-2__button--back">
            Return to Previous Section
          </button>
          <button onClick={goToNextModule3} className="module-progress-2__button--next">
            Continue to Next Section
          </button>
        </div>
      </div>
    </section>
  );
};


  
// Component to manage and display content based on the user's authentication status
function ModOnePageTwo() {
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
        <IntroToBrain />
        <EduVideo />
        <MindMap />
        <MProg2 />
  
      </div>
    );
  }
  
  export default ModOnePageTwo;