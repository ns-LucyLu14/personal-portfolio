import React from "react";
import "./Portfolio.css";

import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import PizzaApp from "../../assets/pizza-app2.svg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          {/* <div className="portfolio__item-image">
            <img src={IMG2} alt="project2" />
          </div> */}
          <h3>Netflix clone app - demo</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ns-LucyLu14/netflix-clone-demo"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://netflix-clone-demo.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          {/* <div className="portfolio__item-image">
            <img src={IMG4} alt="project4" />
          </div> */}
          <h3>Blog page - demo</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ns-LucyLu14/blog-page-demo"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://medium-blog-page-demo.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          {/* <div className="portfolio__item-image">
            <img src={IMG5} alt="project5" />
          </div> */}
          <h3>NS Creative Studio - demo</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ns-LucyLu14/ns-page-first"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://nscreativestudio-demo.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          {/* <div className="portfolio__item-image">
            <img src={PizzaApp} alt="project1" />
          </div> */}
          <h3>Pizza app - demo (with animations)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ns-LucyLu14/pizza-app-demo"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://pizza-app-demo.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          {/* <div className="portfolio__item-image">
            <img src={IMG3} alt="project3" />
          </div> */}
          <h3>Notes app - demo (only for desktop)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ns-LucyLu14/notes-app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://domagojs-notes-app-demo.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
