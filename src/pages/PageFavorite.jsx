import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";

function PageFavorite() {
  const { favoriteMovies } = useContext(GlobalContext);

  if (!favoriteMovies || !Array.isArray(favoriteMovies)) {
    return <p>Loading favorites...</p>;
  }

  return (
    <div>
      <h2>My Favorite Movies</h2>
      {favoriteMovies.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div>
          {favoriteMovies.map((movie) => (
            // <li key={movie.id}>{movie.title}</li>
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PageFavorite;
