import React from 'react';
import './Positivity.css'; 

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

export default Positivity;