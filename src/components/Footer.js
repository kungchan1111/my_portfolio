import React from "react";
import "./Footer.css";
import { footerData } from "./data";

export default function Footer() {
  return (
    <footer className="footer">
      {footerData.map((data) => (
        <div className="footer__container">
          <span>{data.desc}</span>
        </div>
      ))}
    </footer>
  );
}
