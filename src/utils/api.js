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

// Export functions for different categories
export const getNowPlayingMovies = () => fetchMovies("now_playing");
export const getTopRatedMovies = () => fetchMovies("top_rated");
export const getUpcomingMovies = () => fetchMovies("upcoming");
export const getPopularMovies = () => fetchMovies("popular");
