import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Contact from './contact file/Contact';
import Shop from './shop file/Shop';
import Menu from './menu file/Menu';
import Logins from './firebase files/Logins';
import SignOut from './firebase files/SignOut';
import DashBoard from './dashboard file/DashBoard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element:  <Home></Home>  ,
      },
      {
        path: "/contact",
        element:  <Contact></Contact>  ,
      },
      {
        path: "/shop",
        element:  <Shop></Shop> ,
      },
      {
        path: "/menu",
        element:  <Menu></Menu> ,
      },
      {
        path: "/dash",
        element:  <DashBoard></DashBoard> ,
      },
      {
        path: "/login",
        element:  <Logins></Logins> ,
      },
      {
        path: "/signOut",
        element:  <SignOut></SignOut> ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
