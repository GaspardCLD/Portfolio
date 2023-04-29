import React from "react";
import "../styles/about_me.css";

function About_me() {
  return (
    <div className="about-me">
      <div id="picture-name">
        <img
          src="../src/assets/about_me_images/photo_cv3.jpg"
          alt="Photo de Gaspard Caillaud"
        />
        <p>Gaspard CAILLAUD</p>
        <button>Mon CV</button>
      </div>
      <p id="about-me-description">
        Diplômé ingénieur informaticien, officier pilote d’hélicoptères au sein
        des forces spéciales, je poursuis actuellement une formation en
        développement web de type boot-camp afin d’être à jour avec les
        technologies les plus récentes. <br />A ce titre, je travaille
        quotidiennement sur plusieurs langages et frameworks (JavaScript,
        HTML/CSS, React, mySQL, Express, Node.JS), au sein de projets ambitieux
        et collaboratifs (Git, GitHub). <br />
        <br />
        Fort de 10 années d’expérience professionnelle dans des conditions
        exigeantes, j’ai développé une grande adaptabilité, un esprit logique et
        organisé.
        <br />
        Habitué à travailler en équipe, je sais m'intégrer dans des projets
        complexes et endosser des responsabilités.
        <br />
        <br />
        Curieux et passionné, je pratique de nombreuses activités comme la
        course à pied, la boxe, le parapente et suis grand amateur de jeux de
        société. <br />
        Globe-trotter chevronné, je parle couramment anglais.
      </p>
    </div>
  );
}

export default About_me;
