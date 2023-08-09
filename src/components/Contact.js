import React from "react";
import "./Contact.css";
import { contactData } from "./data";

export default function Contact() {
  return (
    <section id="contact" className="contact C__sticky">
      <div className="C__container">
        <div className="C__box">
          <div className="C__title">
            <span>Contact</span>
          </div>
          {contactData.map((data) => (
            <div className="C__contant">
              <span>{data.email}</span>
              <span>
                Github :
                <a href="https://github.com/kungchan1111">
                  <img src={data.img} alt="이미지를 불러오는중" />
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
