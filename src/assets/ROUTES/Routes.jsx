

import Root from "../COMPO/ROOT/Root";

import Home from "../../Pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
        },
    ]
  },
]);

export default routers;