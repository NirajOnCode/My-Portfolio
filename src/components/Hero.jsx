import React from "react";
import ThreeBackground from "./ThreeBackground.jsx";
import useTypewriter from "../hooks/useTypewriter.js";
import { TYPED_ROLES } from "../constants/data.js";

export default function Hero() {
  const typed = useTypewriter(TYPED_ROLES);

  return (
    <section id="home" className="relative min-h-screen flex items-center noise-bg overflow-hidden">
      <ThreeBackground density={1} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/30 via-[#050816]/60 to-[#050816] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <p className="text-[#00F0FF] text-sm md:text-base mb-3 tracking-widest uppercase">
          Welcome to my portfolio
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hello, I am <span className="grad-text">Niraj Kumar</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-200 mb-4 h-10">
          {typed}
          <span className="blink text-[#915EFF]">|</span>
        </h2>
        <p className="text-[#aaa6c3] max-w-xl mb-8 text-sm md:text-base">
          Building scalable, real-world web experiences with React & modern JavaScript.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="btn-grad text-white px-7 py-3 rounded-full font-semibold text-sm">
            View Projects
          </a>
          <a
            href="#contact"
            className="glass glow-border text-white px-7 py-3 rounded-full font-semibold text-sm transition-all hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 bounce">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2.5 bg-gradient-to-b from-[#915EFF] to-[#00F0FF] rounded-full"></div>
        </div>
      </a>
    </section>
  );
}
