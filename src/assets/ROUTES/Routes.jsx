

import Root from "../COMPO/ROOT/Root";

import Home from "../../Pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('news.json'),
        },
       {
        path:'/login',
        element:<Login></Login>,
       },
       {
        path:'/register',
        element:<Register></Register>,
       },
    ]
  },
]);

export default routers;