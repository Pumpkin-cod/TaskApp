// amplify-config.js
import { Amplify } from 'aws-amplify';
import Auth from '@aws-amplify/auth';


const isLocalhost = window.location.hostname === "localhost";
const redirectUri = isLocalhost
    ? "http://localhost:5174"
    : "https://master.d255owujid3nor.amplifyapp.com";


Amplify.configure({
    Auth: {
        region: 'eu-west-1',
        userPoolId: 'eu-west-1_i7lYBZUJR',
        userPoolWebClientId: '272vrt8mvdjk22usqrrk78t1gl',
        oauth: {
            domain: 'task.auth.eu-west-1.amazoncognito.com',
            scope: ['email', 'openid', 'profile'],
            redirectSignIn: redirectUri,
            redirectSignOut: redirectUri,
            responseType: 'code'
        }
    }
});
