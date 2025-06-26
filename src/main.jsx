import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './router/AppRouter.jsx'
import { Amplify } from 'aws-amplify'
import amplifyConfig from './amplify-config.js'

// Configure Amplify
Amplify.configure(amplifyConfig)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={AppRouter} />
  </StrictMode>
)
