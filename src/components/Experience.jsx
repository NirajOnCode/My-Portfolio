import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { EXPERIENCE } from "../constants/data.js";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      }
    );
  }, []);

  return (
    <section id="experience" className="relative py-24 px-6 md:px-10 max-w-7xl mx-auto reveal">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Work <span className="grad-text">Experience</span>
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-[#915EFF] to-[#00F0FF] rounded-full mb-10"></div>

      <div className="relative border-l-2 border-[#915EFF]/30 pl-8 ml-2">
        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-[#915EFF] to-[#00F0FF]"></div>
        <div ref={cardRef} className="glass glow-border rounded-2xl p-6 md:p-8">
          <div className="flex flex-wrap justify-between gap-2 mb-3">
            <h3 className="text-xl font-semibold">{EXPERIENCE.role}</h3>
            <span className="text-[#00F0FF] text-sm">{EXPERIENCE.period}</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            {EXPERIENCE.company} | {EXPERIENCE.location}
          </p>
          <ul className="space-y-2 text-[#aaa6c3] text-sm list-disc list-inside">
            {EXPERIENCE.points.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
