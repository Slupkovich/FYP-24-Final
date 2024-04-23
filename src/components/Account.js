// Importing necessary libraries and components
import React, { createContext } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from '../UserPool'; // Import the UserPool configuration

// Create a context for the account operations
const AccountContext = createContext();

// Define the Account component, which provides authentication context to its children
const Account = ({ children }) => {
    // Function to retrieve the current session
    const getSession = async () => {
        return new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser(); // Get the current user from the pool
            if (user) {
                user.getSession(async (err, session) => {
                    if (err) {
                        reject(err);
                    } else {
                        const attributes = await new Promise((resolve, reject) => {
                            user.getUserAttributes((err, attributes) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    const results = {};
                                    for (let attribute of attributes) {
                                        results[attribute.Name] = attribute.Value;
                                    }
                                    resolve(results);
                                }
                            });
                        });
                        resolve({ user, ...session, ...attributes });
                    }
                });
            } else {
                reject('No user in session.');
            }
        });
    };

    // Function to handle user authentication
    const authenticate = async (Username, Password) => {
        return new Promise((resolve, reject) => {
            const user = new CognitoUser({ Username, Pool });
            const authDetails = new AuthenticationDetails({ Username, Password });

            user.authenticateUser(authDetails, {
                onSuccess: data => {
                    console.log("onSuccess:", data);
                    resolve(data);
                },
                onFailure: err => {
                    console.error("onFailure:", err);
                    reject(err);
                },
                newPasswordRequired: data => {
                    console.log("newPasswordRequired:", data);
                    resolve(data);
                },
            });
        });
    };

    // Function to log out the current user
    const logout = () => {
        const user = Pool.getCurrentUser();
        if (user) {
            user.signOut();
        }
    };

    // Render the provider component that passes authenticate, getSession, and logout methods to its children
    return (
        <AccountContext.Provider value={{ authenticate, getSession, logout }}>
            {children}
        </AccountContext.Provider>
    );
};

// Export the AccountContext and Account component for use in other parts of the application
export { AccountContext, Account };
