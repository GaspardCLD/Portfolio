import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
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
