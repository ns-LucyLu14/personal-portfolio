import React from "react";
import "./Testimonials.css";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AVTR1 from "../../assets/max.jpeg";
import AVTR2 from "../../assets/jonas.jpeg";
import AVTR3 from "../../assets/brad.jpeg";

import { FaAward } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Acquired certificates</h5>
      <h2>Certificates</h2>

      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar 1" />
          </div>
          <h5 className="client__name">Maximillian Schwartzmuller</h5>
          <small className="client__review">
            React - The Complete Guide (incl Hooks, React Router, Redux)
          </small>
          <small className="client__review-footer">
            <FaAward className="about__icon" />
            Udemy course
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="avatar 2" />
          </div>
          <h5 className="client__name">Jonas Schmedtmann</h5>
          <small className="client__review">
            The Complete JavaScript Course 2022: From Zero to Expert!
          </small>
          <small className="client__review-footer">
            <FaAward className="about__icon" />
            Udemy course
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="avatar 3" />
          </div>
          <h5 className="client__name">Brad Traversy, Florin Pop</h5>
          <small className="client__review">
            50 Projects In 50 Days - HTML, CSS and JavaScript
          </small>
          <small className="client__review-footer">
            <FaAward className="about__icon" />
            Udemy course
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
