import React from 'react';
import './MindMap.css'; 

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

  export default MindMap;