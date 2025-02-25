import logo from "../images/logo.png";
import { NavLink} from "react-router-dom";
import Navbar from "./Navbar";
import "./Header.css";
function Header() {
  return (
    <header>
      <NavLink to="/"><img src={logo} alt="Filmzone Logo" /></NavLink>
      <Navbar />
    </header>
  );
}

export default Header;
