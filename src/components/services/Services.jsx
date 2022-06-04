import React from "react";
import "./Services.css";

import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5 className="h5">What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Communicating content and design ideas.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing responsive user interfaces.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating good UX interactions.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implementing cool animations with 3rd party libraries such as
                Framer Motion.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Collaboration with other backend and design teams to create the
                best UX.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Knowledge and experience in working with design tools such as
                Figma.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>A good understanding of the web and browsers.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile first approach and strategy.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Participation and handling of new project ideas from scratch.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Maintaining and improving existing and ongoing projects.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating reusable components.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Knowledge of state managing libraries such as Redux or Recoil.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experience with continuous deployment and version control tools
                such as Git.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Experience in working in a SCRUM-like environment.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experience in working on large projects as part of a team with
                colleagues from all over the world.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Personal Skills</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performance oriented.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creative and pays attention to details.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Good problem - solving skills.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Not afraid of new challenges.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Hard working and good with managing time.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Good communication skills and relaxed when working with people.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Motivated and always willing to improve coding skills.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Experience in working in a SCRUM-like environment.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experience in working on large projects as part of a team with
                colleagues from all over the world.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
