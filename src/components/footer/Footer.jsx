import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Logo from "../..//assets/logo-black.png";

import "./Footer.css";

const Footer = () => {
  const returnHome = () => {
    window.location = "/";
  };
  return (
    <div className="footer">
      <div className="container">
      </div>
      <img
        alt="Spear-Real-Estate_logo"
        src={Logo}
        height="100px"
        onClick={returnHome}
        className="SREG-Logo"
      />
      <div className="social">
        <FaFacebookSquare />
        <FaInstagram />
        <FaLinkedin />
    
      </div>
      <img
        src="https://spearrealestategroup.squarespace.com/s/footer-art.png"
        type="image/svg+xml"
        alt="Footer art"
        focusable="false"
        height="auto"
        width="90%"
      ></img>
    </div>
  );
};

export default Footer;
