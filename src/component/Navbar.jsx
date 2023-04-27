import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";

function Navbar() {
  //state which defines whether burger icon is clicked or not
  const [isMenuOpen, setMenuOpen] = useState(false);
  //function which changes the state of the burger icon
  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav>
      <img
        className="logo"
        src="../src/assets/logo/logoGaspard_bw.png"
        alt="logo du portfolio"
      />
      {/* hamburger component with onclick handleMenuClick */}
      <div className="Hamburger">
        <Hamburger toggled={isMenuOpen} toggle={handleMenuClick} />
      </div>
      <div
        className={`navbar-links ${isMenuOpen ? "menu-open" : "menu-hidden"}`}
      >
        <Link className="navbar-brand" to="/" onClick={handleMenuClick}>
          Accueil
        </Link>
        <Link className="navbar-brand" to="/about_me" onClick={handleMenuClick}>
          A propos
        </Link>
        <Link className="navbar-brand" to="/projects" onClick={handleMenuClick}>
          Réalisations
        </Link>
        <Link className="navbar-brand" to="/contact" onClick={handleMenuClick}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
