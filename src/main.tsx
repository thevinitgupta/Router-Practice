import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AuthProvider, { UserType } from './components/AuthProvider.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider isSignedIn={true} role={UserType.ADMIN}>
    <App />
    </AuthProvider>
  </React.StrictMode>,
)
