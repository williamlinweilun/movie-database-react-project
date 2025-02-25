import logo from "../images/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Filmzone Logo" />
      <p><a href="https://www.themoviedb.org/movie/top-rated?language=en-CA" target="_blank" rel="noopener noreferrer">Powered by TMDB</a></p>
      <p>&copy; 2025 by Shanika, Shyanne, William</p>
    </footer>
  );
}

export default Footer;
