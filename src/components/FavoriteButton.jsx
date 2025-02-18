import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext"; // Import GlobalContext
import "./FavoriteButton.css";

function FavoriteButton({ movie }) {
  const { favoriteMovies, addFavorite, removeFavorite } =
    useContext(GlobalContext);

  if (!favoriteMovies) return null; // Ensure favoriteMovies is loaded

  const isFavorite = favoriteMovies.some((fav) => fav.id === movie.id);

  return (
    <button
      onClick={() => (isFavorite ? removeFavorite(movie) : addFavorite(movie))}
    >
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
}

export default FavoriteButton;
