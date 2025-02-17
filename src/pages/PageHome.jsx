//import NowPlayingMovies from "../components/NowPlayingMovies";
import { useState, useEffect } from "react";
import { getNowPlayingMovies } from "../utils/api";
import MovieCard from "../components/MovieCard";

function PageHome() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  useEffect(() => {
    getNowPlayingMovies().then((data) => {
      setNowPlayingMovies(data.results);
      console.log(data);
    });
  }, []);
  // return <NowPlayingMovies />;
  return (
    <>
      <h2> Now playing</h2>
      <div className="movies-container">
        {nowPlayingMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default PageHome;
