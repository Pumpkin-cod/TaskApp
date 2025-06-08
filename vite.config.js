import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Content-Security-Policy': [
        "default-src 'self'",
        "style-src 'self' 'unsafe-inline' https://d28bnn1nuah31p.cloudfront.net https://dyw4m3kvpxst8.cloudfront.net",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
        "img-src 'self' data: https: http:",
        "font-src 'self' data: https:",
        "connect-src 'self' https://cognito-idp.eu-west-1.amazonaws.com https://taskapp.auth.eu-west-1.amazoncognito.com",
        "frame-src 'self' https://taskapp.auth.eu-west-1.amazoncognito.com"
      ].join('; ')
    }
  }
})