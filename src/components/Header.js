import React from "react";
import "./Header.css";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="H_left">
          <a href="#intro">Home</a>
        </div>
        <div className="H_right">
          <HashLink smooth to="/#about">
            About
          </HashLink>
          <HashLink smooth to="/#skills">
            Skills
          </HashLink>
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </div>
      </div>
    </header>
  );
}
