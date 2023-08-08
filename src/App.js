import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
