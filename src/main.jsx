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
import AddProducts from './add products file/AddProducts';
import AddForm from './form and  crud file/AddForm';



import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ReadData from './form and  crud file/ReadData';
import Update from './form and  crud file/Update';


// Create a client
const queryClient = new QueryClient()

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
      {
        path: "/addProducts",
        element: <ReadData></ReadData> ,
      },
      {
        path: "/addForm",
        element: <AddForm></AddForm> ,
      },
      {
        path: "/update/:id",
        element:  <Update></Update> ,
        loader: ({params}) => fetch(`http://localhost:5000/addData/${params.id}`)
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
