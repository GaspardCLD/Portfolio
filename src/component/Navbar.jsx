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
      <img src="" alt="logo du portfolio" />
      <h1>Mon Portfolio</h1>
      {/* hamburger component with onclick handleMenuClick */}
      <Hamburger toggled={isMenuOpen} toggle={handleMenuClick} />
      <div
        className={`navbar-links ${isMenuOpen ? "menu-open" : "menu-hidden"}`}
      >
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Link className="navbar-brand" to="/introduction">
          Introduction
        </Link>
        <Link className="navbar-brand" to="/skills">
          Skills
        </Link>
        <Link className="navbar-brand" to="/projects">
          Projects
        </Link>
        <Link className="navbar-brand" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
