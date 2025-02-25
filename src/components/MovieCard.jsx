import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

import "./MovieCard.css";

function MovieCard({ movie }) {
  const formatReleaseDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  // cut the string to certain numbers of characters
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  return (
    <>
      <div className="movie-card-wrapper">
        <FavoriteButton movie={movie} />
        <div className="movie-card-container">
          <Link to={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="movie-card-poster"
            />
            <div className="movie-info">
              <p className="movie-rating">
                {(movie.vote_average * 10).toFixed(0)}%
              </p>
              <p className="movie-title">{movie.title}</p>
              <p className="movie-card-summary">
                {truncateString(movie.overview, 60)}
              </p>
              <p className="movie-details">
                {formatReleaseDate(movie.release_date)}
              </p>
            </div>
          </Link>
        </div>
        <Link to={`/movie/${movie.id}`}>
          <button className="movie-more-button">more info</button>
        </Link>
      </div>
    </>
  );
}

export default MovieCard;
