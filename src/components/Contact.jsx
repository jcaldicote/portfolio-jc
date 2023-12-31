import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-item">
        <FaEnvelope className="contact-icon" />
        <p className="contact-link">caldicote.contact@gmail.com</p>
      </div>
      <div className="contact-item">
        <button className="contact-button">
          <a href="mailto:caldicote.contact@gmail.com">Envoyer moi un e-mail</a>
        </button>
      </div>
      <div className="contact-item">
        <a
          href="https://github.com/jcaldicote"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaGithub />
        </a>
        <span>Lien Github</span>
        <a
          href="https://www.linkedin.com/in/joseph-caldicote-a05447290/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaLinkedin />
        </a>
        <span>Lien Linkedin</span>
      </div>
    </div>
  );
};

export default Contact;
