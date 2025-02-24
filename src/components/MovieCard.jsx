import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

import "./MovieCard.css";

function MovieCard({ movie }) {

  const formatReleaseDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <FavoriteButton movie={movie} />
      <div className="movie-card">
        <Link to={`/movie/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-info">
            <p className="movie-title">{movie.title}</p>
            <p className="movie-rating">{(movie.vote_average * 10).toFixed(0)}%</p>
            <p className="movie-details">
              {movie.runtime && <p>⏳ Duration: {movie.runtime} minutes</p>}
            </p>
            <p className="movie-details">{formatReleaseDate(movie.release_date)}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MovieCard;
