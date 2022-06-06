import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "./Header.css";

import CTA from "./CTA";
// import ME from "../../assets/me.png";
import ME from "../../assets/cv-img2-bg-nobg.png";
import HeaderSocials from "./HeaderSocials";
import { CgMouse } from "react-icons/cg";
import BgVideo from "../../assets/Bg-video1.mp4";

const Header = () => {
  return (
    <header id="home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="header__background"
      >
        <video
          src={BgVideo}
          autoPlay
          muted
          loop
          className="header__video"
        ></video>
      </motion.div>
      <div className="container header__container">
        <motion.div
          initial={{ opacity: 0, width: "20%" }}
          animate={{ opacity: 1, width: "60%" }}
          transition={{ duration: 2, type: "spring" }}
          className="header__titles"
        >
          <motion.h5
            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Hello, I'm
          </motion.h5>
          <motion.h2
            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Domagoj Lučić
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
            className="text-light"
          >
            Frontend Developer
          </motion.h3>
          <CTA />
        </motion.div>
        <HeaderSocials />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="me"
        >
          <motion.img
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
            src={ME}
            alt="me"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="scroll__down"
          >
            Scroll Down
            <CgMouse className="scroll__down__icon" />
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;

// export const HeroContainer = styled.div`
//   background: #0c0c0c;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0 30px;
//   height: 800px;
//   position: relative;
//   z-index: 1;

//   :before {
//     content: "";
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     background: linear-gradient(
//         180deg,
//         rgba(0, 0, 0, 0.2) 0%,
//         rgba(0, 0, 0, 0.7) 100%
//       ),
//       linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, transparent 100%);
//     z-index: 2;
//   }
// `;

// export const HeroBg = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// `;

// export const VideoBg = styled.video`
//   width: 100%;
//   height: 100%;
//   -o-object-fit: cover;
//   object-fit: cover;
//   background: #232a34;
// `;
