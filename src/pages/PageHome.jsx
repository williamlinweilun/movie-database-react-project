import { useState, useEffect } from "react";
import {
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getPopularMovies,
} from "../utils/api";
import MovieCard from "../components/MovieCard";
import Hero from "../components/Hero";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./PageHome.css";

function PageHome() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getNowPlayingMovies().then((data) => {
      setNowPlayingMovies(data.results);
      // console.log(data);
    });

    getTopRatedMovies().then((data) => setTopRated(data.results));
    getUpcomingMovies().then((data) => setUpcoming(data.results));

    getPopularMovies()
      .then((data) => {
        //console.log("Full popular movies list:", data.results); // Log the full list
        setPopular(data.results);
      })
      .catch((error) => console.error("Error fetching popular movies:", error));
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <div className="hero">
        <Hero />
      </div>

      <h2> Now playing</h2>
      <div className="movies-container">
        <Carousel responsive={responsive}>
          {nowPlayingMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Carousel>
      </div>
      <h2> Popular</h2>
      <div className="movies-container">
        <Carousel responsive={responsive}>
          {popular.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Carousel>
      </div>
      <h2> Top Rated</h2>
      <div className="movies-container">
        <Carousel responsive={responsive}>
          {topRated.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Carousel>
      </div>
      <h2>Upcoming</h2>
      <div className="movies-container">
        <Carousel responsive={responsive}>
          {upcoming.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default PageHome;
