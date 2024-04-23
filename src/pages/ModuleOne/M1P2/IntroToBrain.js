import React from 'react';
import './IntroToBrain.css'; 

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


export default IntroToBrain;