import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRoute, RouterProvider} from 'react-router-dom'

const Router = createBrowserRoute([
{
  path: "/",
  element: <App/>
},

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {Router}/>
  </StrictMode>,
)
