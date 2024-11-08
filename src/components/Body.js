import React, { useEffect } from "react";
import Login from "./Login";
import Brows from "./Brows";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";


const Body = () => {

 const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Brows />,
    },
  ]);

 

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
