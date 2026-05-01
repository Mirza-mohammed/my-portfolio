import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "../../mock/mock";
import SectionHeading from "./SectionHeading";

const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="03 / projects"
          title="Selected work."
          description="A snapshot of practical projects across software, data engineering, ML and low-code automation."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-emerald-500/40 hover:bg-zinc-900/70 transition-all duration-300"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-300">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-zinc-50 leading-snug group-hover:text-emerald-200 transition-colors">
                    {p.title}
                  </h3>
                </div>
                <div className="h-9 w-9 grid place-items-center rounded-md border border-zinc-800 text-zinc-400 group-hover:text-emerald-300 group-hover:border-emerald-500/40 transition-colors">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                {p.description}
              </p>

              <ul className="mt-4 grid sm:grid-cols-2 gap-1.5">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-zinc-300"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono text-zinc-300 bg-zinc-950 border border-zinc-800 rounded px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
