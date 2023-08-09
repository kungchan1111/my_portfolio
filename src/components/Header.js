/* eslint-disable no-nested-ternary */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";

export default function Header() {
  const scrollToSticky = (elementId) => {
    // console.log("???");
    // const stickyElement = document.getElementById(elementId);

    // if (stickyElement) {
    //   const yOffset =
    //     elementId === "intro"
    //       ? 0
    //       : elementId === "about"
    //       ? -90
    //       : elementId === "skills"
    //       ? -130
    //       : -170;
    //   // const yOffset = -90; // Adjust this value as needed
    //   const y =
    //     stickyElement.getBoundingClientRect().top + window.scrollY + yOffset;
    //   window.scrollTo({ top: y, behavior: "smooth" });
    // }

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
    </header>
  );
}
