import "./PageFavorite.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";

function PageFavorite() {
  const { favoriteMovies } = useContext(GlobalContext);

  if (!favoriteMovies || !Array.isArray(favoriteMovies)) {
    return <p>Loading favorites...</p>;
  }

  return (
    <div className="favorites-page-wrapper">
      <div className="backdrop-favorites">
        <h1>My Favorite Movies</h1>
      </div>
      {favoriteMovies.length === 0 ? (
        <div className="no-favorites">
          <p>No favorites added yet.</p>
        </div>
      ) : (
        <div className="favorite-movie-cards">
          {favoriteMovies.map((movie) => (
            // <li key={movie.id}>{movie.title}</li>
            <div className="individual-movie-wrapper">
              <MovieCard movie={movie} key={movie.id} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PageFavorite;
