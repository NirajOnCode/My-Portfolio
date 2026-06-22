import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT } from "../constants/data.js";

export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-white/10 text-sm text-gray-400">
      <p>
        Designed & Built by <span className="grad-text font-medium">Niraj Kumar</span> © 2026
      </p>
      <div className="flex justify-center gap-4 mt-3 text-lg">
        <a href={CONTACT.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
          <FaGithub />
        </a>
        <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
