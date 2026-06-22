import React, { useState } from "react";
import { SKILLS } from "../constants/data.js";

export default function Skills() {
  const categories = Object.keys(SKILLS);
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" className="relative py-24 px-6 md:px-10 max-w-7xl mx-auto reveal">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        My <span className="grad-text">Skills</span>
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-[#915EFF] to-[#00F0FF] rounded-full mb-10"></div>

      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              active === cat ? "btn-grad text-white" : "glass text-gray-300 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {SKILLS[active].map((skill) => (
          <div key={skill} className="skill-card glass rounded-xl p-5 text-center cursor-default">
            <div className="text-2xl mb-2">⚡</div>
            <p className="text-sm font-medium text-gray-200">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
