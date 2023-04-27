import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div>
          <h1>GASPARD CAILLAUD</h1>
          <h2>développeur web full-stack</h2>
        </div>
        <h3>Bienvenue sur mon portfolio</h3>
        <p id="intro-text">
          Découvrez mes compétences et réalisations, une équipe formidable au
          service d'idées dynamiques
        </p>
        <div id="languages-homepage">
          <p>HTML / CSS / JAVASCRIPT / REACT / NODE</p>
          <p>SQL / EXPRESS / FIGMA / GITHUB</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
