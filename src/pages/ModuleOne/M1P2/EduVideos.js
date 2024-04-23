import React from 'react';
import './EduVideos.css';

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
          'Analytic perspective: Good at dissecting problems, analyzing them, and making decisions.',
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
  
  export default EduVideo;