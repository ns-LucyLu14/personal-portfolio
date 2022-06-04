import React from "react";
import "./Footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        DL
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Certificates</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>

        <a
          href="https://github.com/ns-LucyLu14"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/domagoj-lu%C4%8Di%C4%87-980a83240/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FiInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DL Portfolio Website. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
