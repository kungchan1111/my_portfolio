import React, { useEffect, useState } from "react";
import "./About.css";
import { aboutText } from "./data";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const triggerPosition = window.innerHeight * 0.8;
    if (window.scrollY > triggerPosition) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" className="about A__sticky">
      <div className="A__container">
        <div className="A__box">
          <div>
            <span>About me</span>
          </div>
          <div className={`A__data ${isVisible ? "show" : ""}`}>
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
