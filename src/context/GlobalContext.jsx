import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

function getInitialStateFromlocalStorage() {
  const favoritesMovies = localStorage.getItem("favoritesMovies");
  return favoritesMovies ? JSON.parse(favoritesMovies) : [];
}

function GlobalProvider({ children }) {
  const [favoriteMovies, setFavoriteMovies] = useState(
    getInitialStateFromlocalStorage()
  );

  useEffect(() => {
    if (favoriteMovies && favoriteMovies.length > 0) {
      localStorage.setItem("favoritesMovies", JSON.stringify(favoriteMovies));
    }
  }, [favoriteMovies]);

  //remove favorite function
  function removeFavorite(movie) {
    const newFavorites = favoriteMovies.filter((fav) => fav.id !== movie.id);
    setFavoriteMovies(newFavorites);
  }

  function addFavorite(movie) {
    setFavoriteMovies((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.id === movie.id)) {
        return [...prevFavorites, movie];
      }
      return prevFavorites;
    });
  }

  return (
    <GlobalContext.Provider
      value={{ favoriteMovies, addFavorite, removeFavorite }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
