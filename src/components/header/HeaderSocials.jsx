import React from "react";
import { motion } from "framer-motion";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="header__socials"
    >
      <a
        href="https://www.linkedin.com/in/domagoj-lu%C4%8Di%C4%87-980a83240/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/ns-LucyLu14" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaFacebookSquare />
      </a>
    </motion.div>
  );
};

export default HeaderSocials;
