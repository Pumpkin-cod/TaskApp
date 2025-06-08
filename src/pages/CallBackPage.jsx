import React, { useEffect } from "react";
import { useAuth } from "react-oidc-context";

export default function CallbackPage() {
    const auth = useAuth();

    useEffect(() => {
        auth.signinRedirectCallback().catch((err) => {
            console.error("Failed to process signin callback", err);
        });
    }, [auth]);

    return <div>Processing login...</div>;
}
