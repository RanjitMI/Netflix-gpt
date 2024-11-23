import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {

    const dispatch = useDispatch()

    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

 

 const getUpcomingMovies = async () => {
    try{
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?page=1",
            API_OPTIONS
          );
        const json = await response.json();
        dispatch(addUpcomingMovies(json.results))
    }
  catch(Error){
    console.log("Error",Error);
  }
  };

  useEffect(() => {
   !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
