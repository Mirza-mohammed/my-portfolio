import React from "react";
import { Briefcase } from "lucide-react";
import { experience } from "../../mock/mock";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 lg:py-32 relative bg-zinc-950/40 border-y border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="04 / experience"
          title="Where I've contributed."
          description="Hands-on industry exposure to building and maintaining reliable software."
        />

        <div className="mt-12 max-w-3xl">
          <div className="relative pl-8">
            <div className="absolute left-2.5 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/60 via-zinc-800 to-transparent" />
            {experience.map((exp, idx) => (
              <div key={idx} className="relative pb-10 last:pb-0">
                <div className="absolute -left-[1.55rem] top-1 h-5 w-5 rounded-full border-2 border-emerald-400 bg-zinc-950 grid place-items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2 text-emerald-300">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-mono text-xs uppercase tracking-wider">
                          {exp.company}
                        </span>
                      </div>
                      <h3 className="mt-1 font-display text-xl font-semibold text-zinc-50">
                        {exp.role}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 border border-zinc-800 rounded px-2 py-1">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-sm text-zinc-300 flex gap-2 items-start"
                      >
                        <span className="mt-2 h-1 w-1 rounded-full bg-emerald-400 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
