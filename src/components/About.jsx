import React from "react";
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaDownload } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-10 max-w-7xl mx-auto reveal">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        About <span className="grad-text">Me</span>
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-[#915EFF] to-[#00F0FF] rounded-full mb-10"></div>

      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-2 space-y-4 text-[#aaa6c3] leading-relaxed">
          <p>
            I'm a passionate software engineer with hands-on experience across the full web development
            stack, with a strong focus on frontend engineering. I'm currently deepening my backend skills
            to build complete, production-ready, end-to-end applications.
          </p>
          <p>
            Right now, I'm working as a MERN Stack Intern, where I get to ship real features for
            production applications while sharpening my fundamentals in React, JavaScript, and API
            integration.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 text-sm">
            <span className="glass px-4 py-2 rounded-full flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#00F0FF]" /> Punjab, India
            </span>
            <span className="glass px-4 py-2 rounded-full flex items-center gap-2">
              <FaBriefcase className="text-[#915EFF]" /> MERN Stack Intern
            </span>
            <span className="glass px-4 py-2 rounded-full flex items-center gap-2">
              <FaGraduationCap className="text-[#00F0FF]" /> Fresher
            </span>
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 mt-6 btn-grad px-6 py-3 rounded-full text-sm font-semibold"
          >
            <FaDownload /> Download Resume
          </a>
        </div>

        <div className="glass glow-border rounded-2xl p-6">
          <h3 className="font-semibold mb-3 text-[#00F0FF]">Quick Facts</h3>
          <ul className="text-sm text-[#aaa6c3] space-y-2">
            <li>👤 Name: Niraj Kumar</li>
            <li>🧑‍💻 Role: Frontend Developer</li>
            <li>📌 Status: Fresher / Intern</li>
            <li>📍 Location: Punjab, India</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
