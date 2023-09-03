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
          Après avoir accumulé une expérience enrichissante de 20 ans dans le
          domaine des télécommunications, j'ai décidé d'entreprendre une
          passionnante reconversion dans le développement web. Cette transition
          marque le début d'une aventure fascinante dans le monde de la
          programmation. Ma soif d'apprendre et mon désir de créer des
          expériences numériques exceptionnelles me motivent chaque jour. Grâce
          à des mois d'efforts et de formation chez Openclassrooms, je suis
          désormais capable de concevoir des sites web dynamiques, d'optimiser
          le référencement, et de résoudre des problèmes complexes en codant.
        </p>
        <p className="text">
          Je suis enthousiaste à l'idée de collaborer sur des projets innovants
          et de contribuer à la transformation numérique de notre monde. Mon
          aventure dans le développement web ne fait que commencer, et je suis
          prêt à relever de nouveaux défis excitants.
        </p>
      </div>
    </div>
  );
};

export default About;
