import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { PROJECTS } from "../constants/data.js";

function ProjectCard({ p }) {
  return (
    <div className="skill-card glass glow-border rounded-2xl p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <span className="text-xs text-[#00F0FF] whitespace-nowrap ml-2">{p.period}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {p.stack.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300">
            {t}
          </span>
        ))}
      </div>

      <ul className="text-sm text-[#aaa6c3] space-y-1.5 list-disc list-inside flex-1">
        {p.points.map((pt, i) => (
          <li key={i}>{pt}</li>
        ))}
      </ul>

      <div className="flex gap-4 mt-5 text-sm">
        <a href={p.live} className="flex items-center gap-1 text-[#915EFF] hover:text-[#00F0FF] transition-colors">
          <FaExternalLinkAlt /> Live
        </a>
        <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[#915EFF] hover:text-[#00F0FF] transition-colors">
          <FaGithub /> GitHub
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 md:px-10 max-w-7xl mx-auto reveal">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        My <span className="grad-text">Projects</span>
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-[#915EFF] to-[#00F0FF] rounded-full mb-10"></div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
