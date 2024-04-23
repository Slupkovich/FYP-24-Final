import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';  // Importing CSS for styling the sign-up form
import countries from '../../data/countries.json'; // Import countries data for the dropdown
import { CognitoUser } from 'amazon-cognito-identity-js'; // Import CognitoUser for handling user confirmation
import UserPool from '../../UserPool'; // Import the user pool configuration

function SignUp() {
    // State hooks to store user information and form status
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        country: '',
        age: '',
        educationalBackground: ''
    });
    const [error, setError] = useState(''); // State to handle any error messages
    const [stage, setStage] = useState('signup'); // Control view between signup form and confirmation form
    const [confirmationCode, setConfirmationCode] = useState(''); // Store the confirmation code for Cognito
    const navigate = useNavigate(); // Hook to navigate programmatically

    // Handles changes in the input fields and updates the user state
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value }); // Spread existing user data and update changed field
        setError(''); // Clear any errors when user updates input
    };

    // Updates the confirmation code state as the user types it
    const handleConfirmationChange = (event) => {
        setConfirmationCode(event.target.value);
    };

    // Handles the submission of the sign-up form
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const { fullName, email, password, confirmPassword } = user;
    
        // Validation checks
        if (!fullName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            setError('Please fill in all required fields.');
            return;
        }
    
        if (!/^[a-zA-Z]+ [a-zA-Z]+/.test(fullName.trim())) { // Regex to ensure full name contains two words
            setError('Please enter both your first name and last name with only alphabetic characters.');
            return;
        }
    
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
    
        // If validation passes, attempt to register the user with Cognito
        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) {
                console.error(err);
                setError(err.message || 'An error occurred during registration.');
            } else {
                console.log(data);
                setStage('confirm'); // Move to the confirmation stage upon successful registration
            }
        });
    };

    // Handles the submission of the confirmation code
    const handleConfirmationSubmit = (event) => {
        event.preventDefault();
    
        if (!confirmationCode) {
            setError('Please enter your confirmation code.');
            return;
        }
    
        const userData = {
            Username: user.email,
            Pool: UserPool
        };
    
        // Create a new CognitoUser object and confirm registration
        const cognitoUser = new CognitoUser(userData);
        cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
            if (err) {
                console.error(err);
                setError(err.message || 'Failed to confirm registration.');
            } else {
                console.log(result);
                navigate('/login'); // Navigate to the login page after successful registration confirmation
            }
        });
    };

    // Function to render the appropriate form based on the current stage
    const renderForm = () => {
        // Render the sign-up form if in 'signup' stage
        if (stage === 'signup') {
            return (
                <>
                    <input type="text" name="fullName" placeholder="Full Name" value={user.fullName} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email Address" value={user.email} onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
                    <input type="password" name="confirmPassword" placeholder="Repeat Password" value={user.confirmPassword} onChange={handleChange} />
                    <div className="halfWidthInputs">
                        
                        <select name="country" value={user.country} onChange={handleChange} required>
                            <option value="" disabled hidden>Country</option>
                                {countries.map((country, index) => (
                            <option key={index} value={country.name}>{country.name}</option>
                            ))}
                        </select>
                        <input type="number" name="age" placeholder="Age" value={user.age} onChange={handleChange} />
                    </div>
                    
                    <select name="educationalBackground" value={user.educationalBackground} onChange={handleChange} required>
                        <option value="" disabled hidden>Educational Background</option>
                        <option value="High School Diploma or Equivalent">High School Diploma or Equivalent</option>
                        <option value="Vocational or Technical Training">Vocational or Technical Training</option>
                        <option value="Associate's Degree">Associate's Degree</option>
                        <option value="Bachelor's Degree">Bachelor's Degree</option>
                        <option value="Master's Degree">Master's Degree</option>
                        <option value="Doctoral or Professional Degree">Doctoral or Professional Degree</option>
                        <option value="Self-taught or Informal Education">Self-taught or Informal Education</option>
                        <option value="Currently a Student">Currently a Student</option>
                        <option value="Other">Other</option>
                    </select>
                    <button type="submit">Sign Up</button>
                </>
            );
        } else {
            // Render the confirmation form if in 'confirm' stage
            return (
                <>
                    <input type="text" placeholder="Confirmation Code" value={confirmationCode} onChange={handleConfirmationChange} />
                    <button onClick={handleConfirmationSubmit}>Confirm</button>
                </>
            );
        }
    };

    // Main return of the component that structures the complete form
    return (
        <div className="SuLoginContainer">
            <div className="SuLoginForm">
                <div className="SuCloseButton" onClick={() => navigate('/')}>X</div>
                <div className="SuLogo"><img src="/logo-big.png" alt="EduPreneurs Hub Logo" /></div>
                <h2 className="createYourAccount">{stage === 'signup' ? 'Create your account' : 'Confirm your account'}</h2>
                <p className="alreadyMember">Already a member? <span className="SuLoginLink" onClick={() => navigate('/login')}>Log in</span></p>
                {error && <p className="errorMessage">{error}</p>}
                <form onSubmit={stage === 'signup' ? handleSubmit : handleConfirmationSubmit}>
                    {renderForm()}
                </form>
            </div>
        </div>
    );
}

export default SignUp;
