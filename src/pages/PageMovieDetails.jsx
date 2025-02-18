import "./PageMovieDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails, getMovieCredits } from "../utils/api.js"; // Import fetch function
import { formatRuntime } from "../utils/toolbelt.js";
import FavoriteButton from "../components/FavoriteButton.jsx";

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
      .then((data) => setCast(data.cast.slice(0, 5))) // Get top 5 cast members
      .catch((error) => console.error(error));
  }, [id]);

  if (!movie) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="text-white">
      <div className="relative">
        {/* Movie Backdrop */}
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-[500px] object-cover"
        />
        {/* Movie Title */}
        <h1 className="absolute bottom-5 left-5 text-4xl font-bold bg-black bg-opacity-50 px-3 py-1">
          {movie.title}
        </h1>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold">
          <FavoriteButton movie={movie} />
        </h2>
        <p className="text-gray-400">{movie.overview}</p>
        <p>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Rating:</strong> {movie.vote_average} / 10
        </p>
        <p>
          <strong>Runtime:</strong> {formatRuntime(movie.runtime)}
        </p>
        <p>
          <strong>Genres:</strong> {movie.genres.map((g) => g.name).join(", ")}
        </p>
      </div>

      <div className="mt-5">
        <h3 className="text-2xl font-semibold">Cast</h3>
        <div className="flex gap-5 mt-3">
          {cast.map((actor) => (
            <div key={actor.id} className="text-center">
              <img
                src={
                  actor.profile_path
                    ? `${IMAGE_BASE_URL}${actor.profile_path}`
                    : "https://via.placeholder.com/200"
                }
                alt={actor.name}
                className="w-24 h-24 object-cover rounded-full border border-gray-500"
              />
              <p className="mt-2 font-semibold">{actor.name}</p>
              <p className="text-gray-400 text-sm">as {actor.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageMovieDetails;
