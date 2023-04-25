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
    <nav className="navbar">
      <img
        className="logo"
        src="../src/assets/logo/logoGaspard_bw.png"
        alt="logo du portfolio"
      />
      {/* hamburger component with onclick handleMenuClick */}
      <Hamburger toggled={isMenuOpen} toggle={handleMenuClick} />
      <div
        className={`navbar-links ${isMenuOpen ? "menu-open" : "menu-hidden"}`}
      >
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Link className="navbar-brand" to="/introduction">
          A propos
        </Link>
        <Link className="navbar-brand" to="/projects">
          Réalisations
        </Link>
        <Link className="navbar-brand" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
