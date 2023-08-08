import React from "react";
import "./Contact.css";
import icon from "../assets/img/git.png";

export default function Contact() {
  return (
    <section id="contact" className="contact C__sticky">
      <div className="C__container">
        <div className="C__box">
          <div className="C__title">
            <span>Contact</span>
          </div>
          <div className="C__contant">
            <span>Email : tf2lol@naver.com </span>
            <span>
              Github :{" "}
              <a href="https://github.com/kungchan1111">
                <img src={icon} alt="이미지를 불러오는중" />
              </a>{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
