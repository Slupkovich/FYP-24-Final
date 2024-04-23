import React, { createContext, useContext, useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

// Creating a Context for authentication data
const AuthContext = createContext(null);

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// Provider component that encapsulates my application's authentication logic
export const AuthProvider = ({ children }) => {
  const [cognitoUser, setCognitoUser] = useState(null);

  // Signs in the user with the provided email and updates the state
  const signIn = async (email) => {
    try {
      const user = await Auth.signIn(email);
      setCognitoUser(user);
    } catch (error) {
      throw new Error('Failed to sign in', { cause: error });
    }
  };

  // Signs out the current user and resets the state
  const signOut = async () => {
    try {
      await Auth.signOut();
      setCognitoUser(null);
    } catch (error) {
      throw new Error('Failed to sign out', { cause: error });
    }
  };

  // Answers the custom challenge in the authentication process
  const answerCustomChallenge = async (answer) => {
    try {
      const updatedUser = await Auth.sendCustomChallengeAnswer(cognitoUser, answer);
      setCognitoUser(updatedUser);
      return isAuthenticated();
    } catch (error) {
      throw new Error('Failed to answer custom challenge', { cause: error });
    }
  };

  // Retrieves public challenge parameters if available
  const getPublicChallengeParameters = () => {
    return cognitoUser?.challengeParam;
  };

  // Signs up a new user with provided email and name
  const signUp = async (email, fullName) => {
    const params = {
      username: email,
      password: getRandomString(30), // Generating a random password
      attributes: {
        name: fullName,
      },
    };
    try {
      await Auth.signUp(params);
    } catch (error) {
      throw new Error('Failed to sign up', { cause: error });
    }
  };

  // Confirms user's email with a verification code
  const confirmSignUp = async (email, code) => {
    try {
      await Auth.confirmSignUp(email, code);
    } catch (error) {
      throw error; // Rethrow the error to be handled in the component
    }
  };

  // Generates a random string for password creation
  const getRandomString = (bytes) => {
    const randomValues = new Uint8Array(bytes);
    window.crypto.getRandomValues(randomValues);
    return Array.from(randomValues).map(intToHex).join('');
  };

  // Helper function to convert number to hexadecimal
  const intToHex = (nr) => {
    return nr.toString(16).padStart(2, '0');
  };

  // Checks if the user is authenticated
  const isAuthenticated = async () => {
    try {
      await Auth.currentSession();
      return true;
    } catch {
      return false;
    }
  };

  // Fetches user details if authenticated
  const getUserDetails = async () => {
    if (!cognitoUser) {
      const user = await Auth.currentAuthenticatedUser();
      setCognitoUser(user);
    }
    return await Auth.userAttributes(cognitoUser);
  };

  // Effect to check authentication state on component mount
  useEffect(() => {
    isAuthenticated().then((isLoggedIn) => {
      if (isLoggedIn) {
        Auth.currentAuthenticatedUser().then(setCognitoUser);
      }
    });
  }, []);

  // Context value containing all the authentication methods and user details
  const value = {
    cognitoUser,
    signIn,
    signOut,
    answerCustomChallenge,
    getPublicChallengeParameters,
    signUp,
    confirmSignUp,
    isAuthenticated,
    getUserDetails,
  };

  // Provider wrapper that makes auth context available to child components
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
