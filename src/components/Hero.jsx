import React, { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function Hero() {
  // typing effect
  const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "Flutter & Firebase",
    "UI/UX Enthusiast",
  ];
  const [curRole, setCurRole] = useState(0);
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const full = roles[curRole];
    if (!isDeleting && typed.length < full.length) {
      timeout = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 60);
    } else if (isDeleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(full.slice(0, typed.length - 1)), 40);
    } else {
      if (!isDeleting) {
        timeout = setTimeout(() => setIsDeleting(true), 1200);
      } else {
        setIsDeleting(false);
        setCurRole((r) => (r + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [typed, isDeleting, curRole]);

  return (
    <div className="w-full h-full flex items-center justify-center px-6">
      <div className="glass-card max-w-4xl w-full flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
        {/* Left: text */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-3 py-1 rounded-full text-xs tracking-widest text-indigo-200 bg-indigo-900/30 border border-indigo-300/10">
            Abbottabad, Pakistan · Full Profile
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
            Abdullah <span className="text-cyan-300">Talha</span>
          </h1>

          <p className="mt-2 text-lg text-indigo-200/90 font-semibold">
            {typed}
            <span className="ml-1 blink">|</span>
          </p>

          <p className="mt-4 text-sm text-indigo-100/80 max-w-xl leading-relaxed">
            Motivated and detail-oriented Software Engineer & Full Stack Developer with expertise in Flutter, Firebase,
            REST APIs, and UI/UX design. Building scalable cross-platform apps and polished web experiences.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="#contact"
              className="btn-primary"
            >
              <Mail size={16} />
              Contact
            </a>

            <a
              href="#projects"
              className="btn-ghost"
            >
              View Projects
            </a>
          </div>

          <div className="mt-6 text-sm text-indigo-200/70 flex flex-col sm:flex-row gap-3 items-center justify-center md:justify-start">
            <span className="flex items-center gap-2"><Phone size={14} /> +92 345 9625775</span>
            <span>|</span>
            <a href="mailto:abdullah.talha22@gmail.com" className="underline underline-offset-2">abdullah.talha22@gmail.com</a>
          </div>
        </div>

        {/* Right: portrait */}
        <div className="flex-0">
          <div className="portrait-wrap">
            <img
              src="/profile.jpg"
              alt="Abdullah Talha"
              className="portrait-img"
              onError={(e)=> e.currentTarget.src = "https://i.ibb.co/5FRwMt5/portrait.png"}
            />
            <div className="portrait-accent" />
          </div>
        </div>
      </div>
    </div>
  );
}
