import React, { useState } from "react";
import "./Skills.css";
import { skillsText } from "./data1";
import animation from "../assets/img/animation.gif";

export default function Skills() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section id="skills" className="skills S__sticky">
      <div className="S__container">
        <div className="S__box">
          <div>
            <span>My skills</span>
          </div>
          {skillsText.map((skills, index) => (
            <div
              key={index}
              className={`S__logos ${isHovered ? "hovered" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={skills.img} alt="이미지를 불러오는중" />
              <span className="S__text">{skills.desc}</span>
            </div>
          ))}
          {skillsText.map((skills, index) => (
            <div
              key={index}
              id={`S__logos__2__${index + 1}`}
              className="S__logos__2"
            >
              <img src={skills.img} alt="이미지를 불러오는중" />
              <span id={`S__text__2__${index + 1}`} className="S__text__2">
                {skills.desc}
              </span>
            </div>
          ))}
          <div className={`S__background ${isHovered ? "hidden" : ""}`}>
            <img
              src={animation}
              alt="이미지를 불러오는중"
              className="gif__background"
            />
            <span>아이콘 위에 마우스를 올려보세요!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
