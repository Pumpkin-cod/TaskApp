import React, { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';

const Login = () => {
    const auth = useAuth();

    useEffect(() => {
        auth.signinRedirect(); // Triggers the Cognito login via OIDC
    }, [auth]);

    return <p>Redirecting to login...</p>;
};

export default Login;
