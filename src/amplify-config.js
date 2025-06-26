const isLocalhost = window.location.hostname === "localhost";
const redirectUri = isLocalhost
    ? "http://localhost:5174"
    : "https://master.d255owujid3nor.amplifyapp.com";

// Alternative config that works with both v5 and v6
const amplifyConfig = {
    region: 'eu-west-1',
    userPoolId: 'eu-west-1_i7lYBZUJR',
    userPoolWebClientId: '272vrt8mvdjk22usqrrk78t1gl',
    oauth: {
        domain: 'task.auth.eu-west-1.amazoncognito.com',
        scope: ['email', 'openid', 'profile'],
        redirectSignIn: redirectUri,
        redirectSignOut: redirectUri,
        responseType: 'code'
    },
    // V6 style config
    Auth: {
        Cognito: {
            userPoolId: 'eu-west-1_i7lYBZUJR',
            userPoolClientId: '272vrt8mvdjk22usqrrk78t1gl',
            loginWith: {
                oauth: {
                    domain: 'task.auth.eu-west-1.amazoncognito.com',
                    scopes: ['email', 'openid', 'profile'],
                    redirectSignIn: [redirectUri],
                    redirectSignOut: [redirectUri],
                    responseType: 'code'
                }
            }
        }
    }
};

export default amplifyConfig;