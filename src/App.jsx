import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
// import ParticlesBackgrounds from "./components/ParticlesBackgrounds";
import CustomCursor from "./components/CustomCursor";
import IntroAnimation from "./components/IntroAnimation";

export default function App() {

  const [introDone, setIntroDone] = useState(false);

  return (
    <>
    {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
      {introDone && (

    <div className="relative gradient">
      <CustomCursor />
      {/* <ParticlesBackgrounds /> */}

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
    )}
    </>
  );
}
