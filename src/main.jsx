import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './router/AppRouter.jsx'
import { AuthProvider } from "react-oidc-context"


const isLocalhost = window.location.hostname === "localhost";

const cognitoAuthConfig = {
  authority: "https://task.auth.eu-west-1.amazoncognito.com",
  client_id: "272vrt8mvdjk22usqrrk78t1gl",
  redirect_uri: isLocalhost
    ? "http://localhost:5174"
    : "https://master.d255owujid3nor.amplifyapp.com",
  response_type: "code",
  scope: "openid email profile",
  onSigninCallback: () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  },
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <RouterProvider router={AppRouter} />
    </AuthProvider>
  </StrictMode>
)