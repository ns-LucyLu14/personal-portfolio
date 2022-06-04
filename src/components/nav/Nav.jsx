import React, { useState } from "react";
import "./Nav.css";

import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [isActive, setIsActive] = useState("#");

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setIsActive("#")}
        className={isActive === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setIsActive("#about")}
        className={isActive === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setIsActive("#experience")}
        className={isActive === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setIsActive("#services")}
        className={isActive === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setIsActive("#contact")}
        className={isActive === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
