const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
//const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// const API_KEY = "b48ec6ddccd66dc35bc86c152b040e9d";
const BASE_URL = "https://api.themoviedb.org/3";

// export const getNowPlayingMovies = async () => {
//   try {
//     const response = await fetch(
//       `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
//     );
//     const data = await response.json();
//     return data.results; // Returns an array of movies
//   } catch (error) {
//     console.error("Error fetching now playing movies:", error);
//     return [];
//   }
// };
const URL = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
function getNowPlayingMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  return fetch(URL, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    })
    .catch((error) => {
      console.log("Error fetching now movies:", error);
      throw error;
    });
}

export { getNowPlayingMovies };
