import openai from "../utils/openai";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import lang from "./languageConstant";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    } catch (error) {
      console.error("TMDB API Error:", error);
      throw new Error("Failed to fetch movie data from TMDB.");
    }
  };

  const handleGptSearchClick = async () => {
    setErrorMessage(""); // Clear any previous errors

    try {
      if (!searchText.current.value.trim()) {
        setErrorMessage("Please enter a valid search query.");
        return;
      }

      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query: " +
        searchText.current.value.trim() +
        ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      // Call OpenAI API
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      if (!gptResults.choices?.length) {
        throw new Error("No recommendations received from OpenAI.");
      }

      const gptMovies = gptResults.choices[0]?.message?.content.split(",");
      if (!gptMovies || gptMovies.length === 0) {
        throw new Error("Invalid response format from OpenAI.");
      }

      // Fetch movie details from TMDB for each movie
      const promiseArray = gptMovies.map((movie) =>
        searchMovieTMDB(movie.trim())
      );
      const tmdbResults = await Promise.all(promiseArray);

      // Dispatch the results to the Redux store
      dispatch(
        addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(
        error.response?.data?.error?.message ||
          error.message ||
          "An unknown error occurred."
      );
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex flex-col items-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
      {errorMessage && (
        <div className="text-red-500 mt-4 text-center bg-black h-20 py-9 px-12 flex pb align-middle">
          <h1 className="font-bold">{errorMessage}</h1>
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
