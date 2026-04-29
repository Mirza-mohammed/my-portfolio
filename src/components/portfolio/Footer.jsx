import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../ui/icons";
import { profile } from "../../mock/mock";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-9 w-9 rounded-md bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-slate-950 font-bold text-sm">
                {profile.initials}
              </span>
              <span className="font-display text-slate-100 font-semibold">
                {profile.name}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-500 max-w-md">
              Software Developer &amp; Data Engineer. Building reliable, useful
              systems with a focus on clarity and continuous improvement.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 grid place-items-center rounded-md border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 grid place-items-center rounded-md border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="h-10 w-10 grid place-items-center rounded-md border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="h-10 px-3 inline-flex items-center gap-2 rounded-md border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors text-sm"
            >
              <ArrowUp className="h-4 w-4" />
              Back to top
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-slate-500 font-mono">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 font-mono">
            Built with React · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
