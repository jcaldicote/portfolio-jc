import React from "react";
import "./Home.scss";
import Navbar from "../components/Navbar.jsx";
import Banner from "../components/Banner.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Skills from "../components/Skills.jsx";
import About from "../components/About.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Banner />
      <div className="myshadow" id="projects">
        <span>#</span>projets
      </div>
      <Projects />
      <div className="myshadow" id="skills">
        <span>#</span>compétences
      </div>
      <Skills />
      <div className="myshadow" id="about">
        <span>#</span>infos
      </div>
      <About />
      <div className="myshadow" id="contact">
        <span>#</span>contact
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
