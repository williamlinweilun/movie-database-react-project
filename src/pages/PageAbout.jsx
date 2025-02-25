import "./PageAbout.css";
import logo from "../images/logo.png";
import img from "../images/tmdb-logo.svg";
import React from "react";

function PageAbout() {
  return (
    <div className="about-wrapper">
      <img src={logo} alt="Filmzone logo" />
      <p>
        Welcome to Filmzone! At Filmzone, we're passionate about bringing the
        magic of cinema to life. Whether you're a casual viewer or a dedicated
        cinephile, our comprehensive database is designed to enhance your
        movie-watching experience.
      </p>
      <div className="tmdb-container">
      <img src={img} alt="TMDB Logo Attribution" className="tmdb" />
        <p>This website uses the TMDB API but is not endorsed or certified by TMDB</p>
      </div>
    </div>
  );
}

export default PageAbout;
