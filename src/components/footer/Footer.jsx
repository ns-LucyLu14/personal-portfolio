import React from "react";
import { Link } from "react-scroll";
import "./Footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        className="footer__logo"
      >
        DL
      </Link>

      <ul className="permalinks">
        <li>
          <Link to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="experience" spy={true} smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="services" spy={true} smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="portfolio" spy={true} smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="testimonials" spy={true} smooth={true} duration={500}>
            Certificates
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
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
