// src/components/NowPlayingMovies.jsx
import React, { useEffect, useState } from "react";
import { getNowPlayingMovies } from "../utils/api";

const NowPlayingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const nowPlaying = await getNowPlayingMovies();
      setMovies(nowPlaying);
    };

    fetchMovies();
  }, []);

  return (
    <section>
      <h2>Now Playing Movies</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "16px",
        }}
      >
        {movies.map((movie) => (
          <div key={movie.id} style={{ textAlign: "center" }}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              width="150px"
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NowPlayingMovies;
