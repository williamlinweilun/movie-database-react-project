import { NavLink, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();
  const location = useLocation();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  useEffect(() => {
    navRef.current.classList.remove("responsive_nav");
  }, [location]);


  return (
    <div className="responsive-nav-bar">
      <nav ref={navRef}>
        <ul>
          <li>
            <NavLink to="/">MOVIES</NavLink>
          </li>
          <li>
            <NavLink to="/favorite">FAVORITES</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
        </ul>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </div>
  );
}

export default Navbar;
