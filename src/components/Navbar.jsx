import React from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./jcaldicote-logo.webp" alt="logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="projects" smooth={true} duration={500}>
            <span>#</span>PROJETS
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            <span>#</span>COMPETENCES
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            <span>#</span>INFOS
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            <span>#</span>CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
