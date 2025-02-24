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
      className="favorite-button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={`favorite-icon ${isFavorite ? "filled" : "empty"}`}
        width="24"
        height="24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={
            isFavorite
              ? "M5 3v18l7-3 7 3V3H5z" // Bookmark filled path
              : "M5 3v18l7-3 7 3V3H5z" // Bookmark empty path (same, but we will use color to differentiate)
          }
        />
      </svg>
    </button>
  );
}

export default FavoriteButton;
