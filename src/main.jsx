import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './router/AppRouter.jsx'
import { AuthProvider } from "react-oidc-context"

const cognitoAuthConfig = {
  authority: "https://eu-west-1bsbiokmpb.auth.eu-west-1.amazoncognito.com",
  client_id: "4f44616v62816066gvrdeon2ba",
  redirect_uri: "http://localhost:5174",
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