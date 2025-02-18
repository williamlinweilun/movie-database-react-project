const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

// Function to fetch movies by category
function fetchMovies(category) {
  const URL = `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`;

  return fetch(URL, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch ${category} movies`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(`Error fetching ${category} movies:`, error);
      throw error;
    });
}

// // Function to fetch movie details
export const getMovieDetails = (movieId) => {
  return fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    options
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch movie details");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching movie details:", error);
      throw error;
    });
};
// get the cast list
export const getMovieCredits = (movieId) => {
  return fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    options
  )
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching movie credits:", err));
};
// Export functions for different categories
export const getNowPlayingMovies = () => fetchMovies("now_playing");
export const getTopRatedMovies = () => fetchMovies("top_rated");
export const getUpcomingMovies = () => fetchMovies("upcoming");
export const getPopularMovies = () => fetchMovies("popular");
