/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSticky = (elementId) => {
    if (elementId === "intro") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (elementId === "about") {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    } else if (elementId === "skills") {
      window.scrollTo({ top: window.innerHeight * 2, behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight * 3 - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="H_left">
          <a
            href="javascript:void(0);"
            onClick={() => {
              scrollToSticky("intro");
            }}
          >
            Home
          </a>
        </div>
        <div className="H_right">
          <a
            href="javascript:void(0);"
            onClick={() => {
              scrollToSticky("about");
            }}
          >
            About
          </a>
          <a
            href="javascript:void(0);"
            onClick={() => {
              scrollToSticky("skills");
            }}
          >
            Skills
          </a>
          <a
            href="javascript:void(0);"
            onClick={() => {
              scrollToSticky("contact");
            }}
          >
            Contact
          </a>
        </div>
      </div>
      <div className="H_hidden">
        <div
          id="menu_bar"
          className={`menu_bar ${isMenuOpen ? "change" : ""}`}
          onClick={handleMenuClick}
          role="button"
        >
          <div id="bar1" className="bar" />
          <div id="bar2" className="bar" />
          <div id="bar3" className="bar" />
        </div>
        <nav className={`nav ${isMenuOpen ? "change" : ""}`} id="nav">
          <a
            href="javascript:void(0);"
            onClick={() => {
              scrollToSticky("about");
            }}
          >
            About
          </a>
          <a
            href="javascript:void(0);"
            onClick={() => {
              scrollToSticky("skills");
            }}
          >
            Skills
          </a>
          <a
            href="javascript:void(0);"
            onClick={() => {
              scrollToSticky("contact");
            }}
          >
            Contact
          </a>
        </nav>
        <div className={`menu-bg ${isMenuOpen ? "change-bg" : ""}`} />
      </div>
    </header>
  );
}
