import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".reveal");
    const triggers = sections.map((section) =>
      gsap.to(section, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 80%" },
      })
    );

    return () => triggers.forEach((t) => t.scrollTrigger && t.scrollTrigger.kill());
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
