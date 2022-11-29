import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="w-full h-fit bg-gradient-to-br from-[#32206b] to-[#301934] pb-16">
      <Navbar />
      <Introduction />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
