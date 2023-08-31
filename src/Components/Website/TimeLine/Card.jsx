import React from "react";
import { FaLink } from "react-icons/fa";

function Card({ name, category, link, img, desc, date }) {
  return (
    <div className="timeline-container primary" data-aos="fade-up">
      <div className="timeline-icon">
        <img src={img} alt="udacity" />
      </div>
      <div className="timeline-body">
        <h4 className="timeline-title">
          <span className="cert-name">{name}</span>
          <div className="badge-cont">
            <span className="badge">{category}</span>
            <a href={link} target="blank" className="badge link">
              <FaLink />
            </a>
          </div>
        </h4>
        <p className="cert-info">{desc}</p>
        <p className="timeline-subtitle">{date}</p>
      </div>
    </div>
  );
}

export default Card;
