import React from "react";
import "./Footer.css";
import icon from "../assets/img/git.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <span>이 포트폴리오는 리액트로 만들어졌습니다.</span>
        <div className="F_icon">
          <a href="https://github.com/kungchan1111">
            <img src={icon} alt="이미지를 불러오는중입니다" />
          </a>
        </div>
      </div>
    </footer>
  );
}
