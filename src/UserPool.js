// Importing the CognitoUserPool class from amazon-cognito-identity-js
import { CognitoUserPool } from "amazon-cognito-identity-js";

// Configuration object for the Cognito User Pool
const poolData = {
    UserPoolId: "eu-west-2_1dvYbEnPX", // Cognito User Pool ID in the EU (London) region
    ClientId: "20dj7hd07nucmhko5315sqs1v3" // Cognito User Pool App Client ID
};

// Creating an instance of CognitoUserPool with our specific configuration
const userPool = new CognitoUserPool(poolData);

// Exporting the userPool instance for use in other parts of the application
export default userPool;