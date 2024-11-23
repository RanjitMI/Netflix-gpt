import React, { useEffect } from "react";
import Login from "./Login";
import Brows from "./Brows";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import MovieDetailsPage from "./MovieDetailsPage";
import UserDetailsPage from "./UserDetailsPage";


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
    {
      path: "/error",
      element: <Error />,
    },
    {
      path: "/browse/:movieId",
      element: <MovieDetailsPage/>,
    },
    {
      path: "/user",
      element: <UserDetailsPage/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
  ]);

 

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
