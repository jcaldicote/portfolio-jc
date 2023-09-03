import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-scroll";
import "./Banner.scss";
import { useFetchData } from "../hooks/useApi.js";

const Banner = () => {
  const { data } = useFetchData();
  const [text] = useTypewriter({
    words: data?.words ?? [""],
    loop: false,
  });

  return (
    <div className="home">
      <span>{text}</span>
      <Cursor cursorColor="#c778dd" cursorStyle=">" />
      <div className="home__contact">
        <div className="home__contact_link">
          <Link to="contact" smooth={true} duration={500}>
            <p style={{ cursor: "pointer" }}>#Contact</p>
          </Link>
        </div>
        <div className="home__contact_cv">
          <a href="/jcaldicote-cv.pdf" target="_blank">
            #Cv
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
