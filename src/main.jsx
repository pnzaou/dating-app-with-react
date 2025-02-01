import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignUpMethode from './pages/SignUp-methode.jsx'
import EmailSignupMethode from './pages/Email-signup-methode.jsx'
import EmailVerification from './pages/Email-verification.jsx'
import SignupForm from './pages/Signup-form.jsx'
import AllowNotifications from './pages/Allow-notifications.jsx'
import SignIn from './pages/SignIn.jsx'
import ProtectedRoute from './components/Protected-route.jsx'
import Discover from './pages/Discover.jsx'

const queryClient = new QueryClient()

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
    path: '/signIn',
    element: <SignIn/>
  },
  {
    path: "/home-page",
    element: <ProtectedRoute><Discover/></ProtectedRoute>
  },
  {
    path: '*',
    element: 'Cette page n\'existe pas' 
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster />
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/> 
    </QueryClientProvider>
  </StrictMode>,
)
