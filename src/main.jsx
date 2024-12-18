import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Closet from './pages/closet/Closet.jsx';
import ClosetMatch from './pages/closet/ClosetMatch.jsx';
import ClosetPart from './pages/closet/ClosetPart.jsx';
import Crop from './pages/closet/Crop.jsx';
import ClosetEditSingle from './pages/closet/ClosetEditSingle.jsx';

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
    path: "/Crop",
    element: <Crop/>,
  },
  {
    path: "/ClosetEditSingle",
    element: <ClosetEditSingle/>,
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