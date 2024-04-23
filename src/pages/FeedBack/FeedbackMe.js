import React from 'react';
import './FeedbackMe.css'; // Link to my CSS file for styling
import Footer from '../../components/Footer'; // Import my Footer component from the components folder

// Define the FeedbackMe component
function FeedbackMe() {
    // Handle the form submission event
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behaviour to stop page reload
    };

    // Render the FeedbackMe component
    return (
        <div className="contact-me-section">
            <h1 className="contact-title">SHARE YOUR THOUGHTS</h1> 
            <p className="contact-description">Whether it's a suggestion or a snag, your input is invaluable. Get in touch!</p>
            <div className="contact-content">
                <div className="contact-form"> 
                    <form onSubmit={handleSubmit}> 
                        <div className="input-row"> 
                            <input type="text" id="name" name="name" placeholder="Name" /> 
                            <input type="email" id="email" name="email" placeholder="Email" /> 
                        </div>
                        <input type="text" id="subject" name="subject" placeholder="Subject" /> 
                        <textarea id="message" name="message" placeholder="Type your message here..."></textarea> 
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="contact-image">
                    <img src={process.env.PUBLIC_URL + '/FeedbackMe.jpeg'} alt="Feedback to me" />
                </div>
            </div>
        </div>
    );
}

export default FeedbackMe;
