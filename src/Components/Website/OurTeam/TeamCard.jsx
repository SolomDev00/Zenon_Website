import React from "react";

export default function TeamCard({ name, img, desc, badge }) {
  return (
    <div className="team-container primary" data-aos="fade-up">
      <div className="team-body">
        <div className="team-icon">
          <img src={img} alt="udacity" />
        </div>
        <h4 className="team-title">
          <span className="team-name">{name}</span>
        </h4>
        <p className="team-info">{desc}</p>
        <div className="team-subtitle">
          <img src={badge} alt="badge" />
        </div>
      </div>
    </div>
  );
}
