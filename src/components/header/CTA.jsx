import React from "react";
import { motion } from "framer-motion";
import CV from "../../assets/CV-Domagoj-Lucic-dark.pdf";

const CTA = () => {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
      className="cta"
    >
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </motion.div>
  );
};

export default CTA;
