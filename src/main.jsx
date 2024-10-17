import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignUpMethode from './pages/SignUp-methode.jsx'

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
    path: '*',
    element: 'Cette page n\'existe pas' 
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
