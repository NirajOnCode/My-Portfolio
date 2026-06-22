import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import ThreeBackground from "./ThreeBackground.jsx";
import { CONTACT } from "../constants/data.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false)

  const submit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_k76yjfv",
        "template_0huzbxp",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "GnrdYsl7VULsBnM3Z"
      )
      .then(() => {
        setSent(true);
        setError(false);
        setTimeout(() => setSent(false), 3000);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Email send failed:", err);
        setError(true);
      });
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-10 max-w-7xl mx-auto reveal overflow-hidden">
      <div className="absolute inset-0 opacity-20 -z-0">
        <ThreeBackground density={0.4} />
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Get In <span className="grad-text">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#915EFF] to-[#00F0FF] rounded-full mb-10"></div>

        <div className="grid md:grid-cols-2 gap-10">
          <form onSubmit={submit} className="space-y-4">
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your Name"
              className="w-full glass rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#915EFF] transition-all placeholder-gray-500"
            />
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Your Email"
              className="w-full glass rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#00F0FF] transition-all placeholder-gray-500"
            />
            <textarea
              required
              rows="5"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Your Message"
              className="w-full glass rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#915EFF] transition-all placeholder-gray-500"
            ></textarea>
            <button type="submit" className="btn-grad px-7 py-3 rounded-full font-semibold text-sm">
              {sent ? "Message Sent ✓" : "Send Message"}
            </button>
          </form>

          <div className="space-y-5">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 glass glow-border rounded-xl p-4 hover:-translate-y-1 transition-all"
            >
              <FaEnvelope className="text-[#00F0FF]" /> <span className="text-sm">{CONTACT.email}</span>
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-3 glass glow-border rounded-xl p-4 hover:-translate-y-1 transition-all"
            >
              <FaPhone className="text-[#915EFF]" /> <span className="text-sm">{CONTACT.phone}</span>
            </a>

            <div className="flex gap-4 pt-2">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="glass w-12 h-12 rounded-full flex items-center justify-center text-xl hover:scale-110 hover:-translate-y-1 transition-all"
              >
                <FaGithub />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass w-12 h-12 rounded-full flex items-center justify-center text-xl hover:scale-110 hover:-translate-y-1 transition-all"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
