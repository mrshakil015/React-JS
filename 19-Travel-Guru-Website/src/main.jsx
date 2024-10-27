import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './layout/Root';

// Existing code
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        }
      ]
  },
]);


createRoot(document.getElementById('root')).render(
<StrictMode>
  <RouterProvider router={router}></RouterProvider>
</StrictMode>,
)
