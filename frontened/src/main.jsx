import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter} from "react-router-dom";
import App from './App.jsx'
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import ForgotPassword  from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";

import {RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path: "forgot-password",
        element:<ForgotPassword/>
      },
      {
        path: "signup",
        element:<SignUp/>
      }
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router}/>
  </StrictMode>,
)
