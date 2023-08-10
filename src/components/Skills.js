import React from "react";
import "./Skills.css";
import { skillsText } from "./data1";

export default function Skills() {
  return (
    <section id="skills" className="skills S__sticky">
      <div className="S__container">
        <div className="S__box">
          <div>
            <span>My skills</span>
          </div>
          {skillsText.map((skills, index) => (
            <div key={index} className="S__logos">
              <img src={skills.img} alt="이미지를 불러오는중" />
              <span className="S__text">{skills.desc}</span>
            </div>
          ))}
          {skillsText.map((skills, index) => (
            <div key={index} className="S__logos__2">
              <img src={skills.img} alt="이미지를 불러오는중" />
              <span className="S__text__2">{skills.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
