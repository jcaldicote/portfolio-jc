import React from "react";
import "./ScrollingText.scss";

const ScrollingText = ({ text }) => {
  return (
    <div className="scrolling-text-container">
      <div className="scrolling-text">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default ScrollingText;
