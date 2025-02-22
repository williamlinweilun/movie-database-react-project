import { NavLink} from "react-router-dom";
import Navbar from "./Navbar";
import "./Header.css";
function Header() {
  return (
    <header>
      <h1><NavLink to="/">FilmZone</NavLink></h1>
      <Navbar />
    </header>
  );
}

export default Header;
