import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, id }) => {
  // console.log(posterPath,'hello')

  if (!posterPath) return null;
  if (!id) return null;

  return (
    <div className="w-48 pr-4">
      <Link to={'/browse/' + id}>
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
      </Link>
    </div>
  );
};

export default MovieCard;
