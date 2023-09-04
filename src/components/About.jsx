import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="content-container">
      <div className="image-frame">
        <img src="./about.jpg" alt="logo-about" className="image" />
      </div>
      <div className="text-frame">
        <p className="text">
          Avec 20 ans d'expérience enrichissante dans les télécoms, j'ai
          entrepris une passionnante reconversion vers le développement web,
          marquant le début d'une fascinante aventure en programmation.
        </p>
        <p className="text">
          Après des mois d'efforts et de formation chez Openclassrooms, je suis
          devenu un développeur web full-stack JavaScript, capable de concevoir
          des sites web dynamiques, d'optimiser le référencement, et de résoudre
          des problèmes complexes en codant.
        </p>
        <p className="text">
          Je suis enthousiaste à l'idée de contribuer à des projets innovants
          pour les entreprises dans le cadre de la transformation numérique. Mon
          voyage dans le développement web est au début, et j'attends avec
          impatience de nouveaux défis passionnants.
        </p>
      </div>
    </div>
  );
};

export default About;
