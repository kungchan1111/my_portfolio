import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="H_left">
          <a href="/">Home</a>
        </div>
        <div className="H_right">
          <a href="/">About</a>
          <a href="/">Skills</a>
          <a href="/">Contact</a>
        </div>
      </div>
    </header>
  );
}
