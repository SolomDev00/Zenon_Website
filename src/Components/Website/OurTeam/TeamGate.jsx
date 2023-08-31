import React from "react";
import "./TeamStyle.css";
import TeamCard from "./TeamCard";
import badge from "../../../Assets/icons/6.png";
import teamOne from "../../../Assets/Team/1.jpg";
import teamTwo from "../../../Assets/Team/2.jpg";
import teamThree from "../../../Assets/Team/3.jpg";

export default function TeamGate() {
  return (
    <div className="team-main">
      <div className="team-gate">
        <TeamCard
          img={teamOne}
          name="Eslam Wael"
          badge={badge}
          desc="Age 16, From Egypt, Worked Front-end Developer by React.js"
        />
        <TeamCard
          img={teamTwo}
          name="Mahmoud Farouk"
          badge={badge}
          desc="Age 22, From Egypt, Worked Back-end Developer by Laravel"
        />
        <TeamCard
          img={teamThree}
          name="Ahmed Sokar"
          badge={badge}
          desc="Age 17, From Egypt, Worked Project Managment at Zenon Software"
        />
      </div>
    </div>
  );
}
