import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

import "./MovieCard.css";

function MovieCard({ movie }) {
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
            <p className="movie-rating">⭐ {movie.vote_average.toFixed(1)}</p>
            <p className="movie-details">
              {movie.runtime && <p>⏳ Duration: {movie.runtime} minutes</p>}
            </p>
            <p className="movie-details">📅 {movie.release_date}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MovieCard;
