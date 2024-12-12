import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Closet from './pages/Closet.jsx';
import ClosetMatch from './pages/ClosetMatch.jsx';
import ClosetPart from './pages/ClosetPart.jsx';

import ApiTrial from './pages/ApiTrial.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Closet",
    element: <Closet/>,
  },
  {
    path: "/ClosetMatch",
    element: <ClosetMatch/>,
  },
  {
    path: "/ClosetPart/:part",
    element: <ClosetPart/>,
  },




  {
    path: "/ApiTrial",
    element: <ApiTrial/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)