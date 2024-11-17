import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignUpMethode from './pages/SignUp-methode.jsx'
import EmailSignupMethode from './pages/Email-signup-methode.jsx'
import EmailVerification from './pages/Email-verification.jsx'
import SignupForm from './pages/Signup-form.jsx'
import AllowNotifications from './pages/Allow-notifications.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/accueil',
    element: <App/>
  },
  {
    path: '/signUp-methode',
    element: <SignUpMethode/>
  },
  {
    path: '/email-signup-methode',
    element: <EmailSignupMethode/>
  },
  {
    path: '/email-verification',
    element: <EmailVerification/>
  },
  {
    path: '/signUp-form',
    element: <SignupForm/>
  },
  {
    path: '/allow-notifications',
    element: <AllowNotifications/>
  },
  {
    path: '*',
    element: 'Cette page n\'existe pas' 
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
