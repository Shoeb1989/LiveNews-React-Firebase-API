import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './assets/ROUTES/Routes.jsx'
import AuthProvider from './assets/COMPO/AuthProvider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={routers} ></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
