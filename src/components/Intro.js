import React, { useEffect, useState } from "react";
import "./Intro.css";
import background from "../assets/img/background.jpg";

function Intro() {
  const text = "React 초보의 포트폴리오";
  const [texts, setTexts] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTexts(texts + text[count]);
      setCount(count + 1);
    }, 100);
    if (count === text.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <div id="intro" className="intro">
      <div className="I_title">
        <span>{texts}</span>
        <div className="I_mouse__curser" />
      </div>
      <div className="I_background">
        <img src={background} alt="이미지를 불러오는중" />
      </div>
    </div>
  );
}

export default Intro;
