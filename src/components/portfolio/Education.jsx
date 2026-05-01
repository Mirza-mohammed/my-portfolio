import React from "react";
import { GraduationCap } from "lucide-react";
import { education } from "../../mock/mock";
import SectionHeading from "./SectionHeading";

const Education = () => {
  return (
    <section id="education" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="05 / education"
          title="Academic foundation."
          description="Building deeper expertise in software, data and intelligent systems."
        />

        <div className="mt-12 max-w-3xl">
          <div className="relative pl-8">
            <div className="absolute left-2.5 top-2 bottom-2 w-px bg-gradient-to-b from-teal-500/60 via-zinc-800 to-transparent" />
            {education.map((ed, idx) => (
              <div key={idx} className="relative pb-10 last:pb-0">
                <div className="absolute -left-[1.55rem] top-1 h-5 w-5 rounded-full border-2 border-teal-400 bg-zinc-950 grid place-items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-teal-500/40 transition-colors">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2 text-teal-300">
                        <GraduationCap className="h-4 w-4" />
                        <span className="font-mono text-xs uppercase tracking-wider">
                          {ed.institution}
                        </span>
                      </div>
                      <h3 className="mt-1 font-display text-xl font-semibold text-zinc-50">
                        {ed.degree}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 border border-zinc-800 rounded px-2 py-1">
                      {ed.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {ed.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {ed.areas.map((a) => (
                      <span
                        key={a}
                        className="text-[11px] font-mono text-zinc-300 bg-zinc-950 border border-zinc-800 rounded px-2 py-1"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
