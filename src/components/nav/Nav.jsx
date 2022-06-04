import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Nav.css";

import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [isActive, setIsActive] = useState("home");

  return (
    <nav>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => setIsActive("home")}
        onSetActive={() => setIsActive("home")}
        className={isActive === "home" ? "active" : ""}
      >
        <AiOutlineHome />
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => setIsActive("about")}
        onSetActive={() => setIsActive("about")}
        className={isActive === "about" ? "active" : ""}
      >
        <AiOutlineUser />
      </Link>
      <Link
        activeClass="active"
        to="experience"
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => setIsActive("experience")}
        onSetActive={() => setIsActive("experience")}
        className={isActive === "experience" ? "active" : ""}
      >
        <BiBook />
      </Link>
      <Link
        activeClass="active"
        to="services"
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => setIsActive("services")}
        onSetActive={() => setIsActive("services")}
        className={isActive === "services" ? "active" : ""}
      >
        <RiServiceLine />
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => setIsActive("contact")}
        onSetActive={() => setIsActive("contact")}
        className={isActive === "contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Nav;
