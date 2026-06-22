import React from "react";
import { EDUCATION, CERTIFICATIONS } from "../constants/data.js";

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6 md:px-10 max-w-7xl mx-auto reveal">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Education & <span className="grad-text">Certifications</span>
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-[#915EFF] to-[#00F0FF] rounded-full mb-10"></div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass glow-border rounded-2xl p-6 space-y-5">
          <h3 className="font-semibold text-[#00F0FF] mb-2">🎓 Education</h3>
          {EDUCATION.map((e) => (
            <div key={e.degree}>
              <p className="font-medium">{e.degree}</p>
              <p className="text-sm text-gray-400">{e.school}</p>
              <p className="text-sm text-[#aaa6c3]">
                {e.period} · {e.score}
              </p>
            </div>
          ))}
        </div>

        <div className="glass glow-border rounded-2xl p-6 space-y-5">
          <h3 className="font-semibold text-[#00F0FF] mb-2">📜 Certifications</h3>
          {CERTIFICATIONS.map((c) => (
            <div key={c.title}>
              <p className="font-medium">{c.title}</p>
              <p className="text-sm text-gray-400">
                {c.issuer} · {c.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
