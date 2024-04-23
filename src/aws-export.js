// AWS Amplify configuration object
const awsconfig = {
    Auth: {
        region: 'eu-west-2', // The AWS region where my services are configured
        userPoolId: 'eu-west-2_Fbyr0bSd5', // The ID of the Cognito User Pool used for authentication
        userPoolWebClientId: '2lhc8ndk97a7ul6nebspg3i37b', // The Client ID of the App Client in the Cognito User Pool
    },
};

// Exporting the configuration to be imported and used by AWS Amplify elsewhere in the application
export default awsconfig;
