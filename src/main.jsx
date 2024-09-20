import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './assets/ROUTES/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} ></RouterProvider>
  </StrictMode>,
)
