import React from 'react';
import './MTwoSecOne.css'; // Make sure to link the CSS file for styles

const MTwoSecOne = () => {
    return (
        <div className="revenueModels">
            <div className="title">
                How do I make money?
            </div>
            <div className="content">
                <p>
                    Startups commonly and mistakenly set price based on how much their goods cost them to produce, and then, they define a revenue stream as the price of their charged customers.
                </p>
                <p className="highlight">
                    Pricing too low.
                </p>
                <p>
                    This is a wrong way to go.
                </p>
                <div className="question">
                    What is a revenue stream?
                </div>
                <div className="answer">
                    - Strategy to generate cash.
                </div>
                <div className="question">
                    How do we price the product (Pricing)?
                </div>
                <div className="answer">
                    - Tactics you use to set the price in each customer segment.
                </div>
            </div>
        </div>
    );
}

export default MTwoSecOne;