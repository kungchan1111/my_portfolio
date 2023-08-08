import React from "react";
import "./About.css";
import { aboutText } from "./data";

export default function About() {
  return (
    <section id="about" className="about A__sticky">
      <div className="A__container">
        <div className="A__box">
          <div>
            <span>About me</span>
          </div>
          <div className="A__data">
            {aboutText.map((about, index) => (
              <div key={index}>
                <h1>{index + 1}.</h1>
                <h3>{about.title}</h3>
                <p>{about.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
