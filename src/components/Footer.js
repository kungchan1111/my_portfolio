import React from "react";
import "./Footer.css";
import { footerData } from "./data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {footerData.map((data) => (
          <span>{data.desc}</span>
        ))}
      </div>
    </footer>
  );
}
