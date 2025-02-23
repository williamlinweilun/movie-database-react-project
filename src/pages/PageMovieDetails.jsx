import "./PageMovieDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails, getMovieCredits } from "../utils/api.js"; // Import fetch function
import { formatRuntime } from "../utils/toolbelt.js";
import FavoriteButton from "../components/FavoriteButton.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function PageMovieDetails() {
  const { id } = useParams(); // Get movie ID from URL
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

  useEffect(() => {
    getMovieDetails(id)
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));

    getMovieCredits(id)
      .then((data) => setCast(data.cast.slice(0, 10))) // Get top 5 cast members
      .catch((error) => console.error(error));
  }, [id]);

  if (!movie) {
    return <div className="text-center text-white">Loading...</div>;
  }

  const formatReleaseDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const carouselCast = {
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 10,
        slidesToSlide: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 3,
        partialVisible: true,
        centerMode: true,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1.5,
        partialVisible: true,
        centerMode: true,
      },
    },
  };

  return (
    // FIXME: FIX ALL EMPTY CLASSNAMES OR REMOVE
    <>
      <section>
        {/* Movie Backdrop */}

        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="movie-backdrop"
        />

        {/* Favorite Button */}
        <h2 className="favorite">
          <FavoriteButton movie={movie} />
        </h2>
      </section>

      <main className="page-wrapper">
        <section className="movie-content">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
          </div>

          <div className="movie-details">
            {/* Movie Title */}
            <h1 className="movie-title">{movie.title}</h1>

            <div className="release-runtime-genre">
              <p>
                <span className="bold-text">Release Date:</span>{" "}
                {formatReleaseDate(movie.release_date)}
              </p>

              <p>
                <span className="bold-text">Runtime:</span>{" "}
                {formatRuntime(movie.runtime)}
              </p>

              <p>
                <span className="bold-text">Genres:</span>{" "}
                {movie.genres.map((g) => g.name).join(", ")}
              </p>
            </div>

            <div className="rating-container">
              <p>
                <span className="rating">
                  {" "}
                  {Math.round(movie.vote_average * 10)}%
                </span>
              </p>

              <p>
                <span className="maturity-rating">
                  {" "}
                  {movie.certification || "NR"}
                </span>
              </p>
            </div>
          </div>
        </section>
        <section>
          <p className="movie-summary">{movie.overview}</p>
        </section>
        <section>
          <h3 className="cast">Cast</h3>

          <Carousel {...carouselCast}>
            {cast.map((actor) => (
              <div key={actor.id} className="cast-card">
                <img
                  src={
                    actor.profile_path
                      ? `${IMAGE_BASE_URL}${actor.profile_path}`
                      : "https://via.placeholder.com/200"
                  }
                  alt={actor.name}
                  className="actor-photo"
                />

                <p className="actor-name">{actor.name}</p>
                <p className="character-name">as {actor.character}</p>
              </div>
            ))}
          </Carousel>
        </section>
      </main>
    </>
  );
}

export default PageMovieDetails;
