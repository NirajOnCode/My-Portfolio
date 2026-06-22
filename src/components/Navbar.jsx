import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAV_LINKS } from "../constants/data.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#050816]/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-wide">
          <span className="grad-text">Niraj</span> Kumar
        </a>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="nav-link hover:text-white transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl text-white">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-96" : "max-h-0"}`}>
        <ul className="flex flex-col gap-4 px-6 pb-6 text-gray-300">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-1">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
