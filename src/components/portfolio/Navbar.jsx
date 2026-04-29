import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../ui/icons";
import { Button } from "../ui/button";
import { navLinks, profile } from "../../mock/mock";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const offsets = navLinks
        .map((l) => {
          const el = document.getElementById(l.id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { id: l.id, top: rect.top };
        })
        .filter(Boolean);
      const current =
        offsets.find((o) => o.top >= 0 && o.top < 240) ||
        offsets.reverse().find((o) => o.top < 240);
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-transparent/50 backdrop-blur-md border-b border-white/10/80"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => handleClick("home")}
          className="flex items-center gap-2 group"
        >
          <span className="h-9 w-9 rounded-md bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-slate-950 font-bold text-sm tracking-tight">
            {profile.initials}
          </span>
          <span className="font-mono text-sm text-slate-300 group-hover:text-cyan-300 transition-colors">
            mohammad.dev
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => handleClick(l.id)}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  active === l.id
                    ? "text-cyan-300"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="h-9 w-9 grid place-items-center rounded-md border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="h-9 w-9 grid place-items-center rounded-md border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <Button
            onClick={() => handleClick("contact")}
            className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-medium"
          >
            Contact Me
          </Button>
        </div>

        <button
          className="md:hidden h-10 w-10 grid place-items-center rounded-md border border-white/10 text-slate-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-transparent/80 backdrop-blur">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => handleClick(l.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                    active === l.id
                      ? "text-cyan-300 bg-cyan-400/5"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <Button
                onClick={() => handleClick("contact")}
                className="w-full bg-cyan-400 text-slate-950 hover:bg-cyan-300"
              >
                Contact Me
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
