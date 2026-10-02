"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    let saved = null;
    try { saved = localStorage.getItem("theme"); } catch (e) {}
    if (saved) {
      document.documentElement.dataset.theme = saved;
      setTheme(saved);
    } else {
      setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  };

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-mark" aria-label="Back to top">Mukesh Kanna R</a>
        <nav className="nav-links" aria-label="Sections">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <button type="button" className="theme-btn" onClick={toggle}>
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </header>
  );
}
