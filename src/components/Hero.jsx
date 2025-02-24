import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { getPopularMovies } from "../utils/api";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        console.log("Popular Movies:", data.results.slice(0, 3)); // Debugging
        setPopularMovies(data.results.slice(0, 3));
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <Swiper
      className="swiper-container"
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={false}
      breakpoints={{
        640: { slidesPerView: 1 }, // Mobile
        768: { slidesPerView: 1 }, // Tablet
        1024: { slidesPerView: 1 }, // Desktop
      }}
    >
      {popularMovies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div
            className="relative w-full h-auto cursor-pointer"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            {/* Backdrop Image */}
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full h-full object-cover brightness-75"
            />

            {/* Overlay with Movie Title & Release Date */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 bg-gradient-to-b from-black/70 via-black/40 to-black/70 heroMovieDes">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                {movie.title}
              </h2>
              <p className="text-sm sm:text-md md:text-lg mt-2">
                {new Date(movie.release_date).toDateString()}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
