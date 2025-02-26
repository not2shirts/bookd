import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import {Home, Library} from './pages/index'
import { Container } from './components'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Container/> ,
        children: [
            {
                path: '/',
                element: <Home/> ,
            },
            {
                path: '/library',
                element: <Library/>,
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
