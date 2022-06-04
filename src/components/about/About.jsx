import React from "react";
import "./About.css";

// import ME from "../../assets/me-test.jpeg";
// import ME from "../../assets/cv-img2-bg.png";
import ME from "../../assets/me-profile-cv-nobg.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div>
          <div className="about__me">
            <img src={ME} alt="Me" />
          </div>
          <div className="about__bio">
            <p>July 14, 1989. (32 years old)</p>
            <p>Zagreb, Croatia</p>

            <p>d.lucic14@gmail.com</p>
            <p>+385989007707</p>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>500+ Clients Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>2 Completed Projects</small>
            </article>
          </div>

          <p className="top">
            I'm a highly motivated self-taught coding enthusiast with more than
            3 years of working experience as a software developer in Ericsson
            Nikola Tesla d.d. (ETK). <br />
          </p>
          <p>
            Originaly, I'm a physics teacher with a master's degree from the
            University of Zagreb (Prirodoslovno - Matematički fakultet). While
            finishing my master's degree I’ve fallen in love with coding, and
            decided my career should go in the direction of software
            development. What started with the basics of Python that landed me a
            job in ETK, ended up in passion for frontend development,
            particularly Javascript and ReactJS. I have explored many
            frameworks, libraries and tools for both frontend and backend
            development (ReactJS, NextJS, Redux, Typescript, Angular, mongoDB,
            Tailwind, Bootstrap, Figma, Ant Design, Material UI, Chakra UI,
            Git…).
          </p>
          <p>
            I consider myself as a creative individual with good problem-solving
            skills who loves to work with people and is always willing to learn
            more and improve his coding skills. I am a very dynamic and
            motivated person, never afraid to get out of my comfort zone and
            always on the lookout for a new challenge to tackle. With a creative
            side in me, I pay attention to performance, details and a good UI/UX
            experience.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
