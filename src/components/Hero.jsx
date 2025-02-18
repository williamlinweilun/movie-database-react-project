import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { getPopularMovies } from "../utils/api";

const Hero = () => {
  const [popularMovies, setPopularMovies] = useState([]);

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
    >
      {popularMovies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className="relative w-full h-[500px]">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-5 text-white w-full">
              <h2 className="text-2xl font-bold">{movie.title}</h2>
              <p className="text-sm">{movie.overview.substring(0, 100)}...</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
