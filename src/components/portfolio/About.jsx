import React from "react";
import { GraduationCap, Sparkles, Cpu, Layers } from "lucide-react";
import { aboutParagraphs, summary } from "../../mock/mock";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    icon: Cpu,
    title: "Software Engineering",
    text: "Database-backed apps, clean code, debugging, performance work.",
  },
  {
    icon: Layers,
    title: "Data Engineering",
    text: "ETL pipelines, validation, transformation, reproducible workflows.",
  },
  {
    icon: Sparkles,
    title: "ML & Explainability",
    text: "Predictive models, regression, feature engineering, SHAP insights.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    text: "MSc CS at University of Hertfordshire — research-led project.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="01 / about"
          title="Building reliable, data-driven solutions."
          description="A short overview of who I am and how I work."
        />

        <div className="grid lg:grid-cols-12 gap-10 mt-12">
          <div className="lg:col-span-7 space-y-5 text-zinc-300 leading-relaxed">
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="pt-4 border-l-2 border-emerald-500/40 pl-4 text-zinc-400 italic">
              {summary.split("\n\n")[2]}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="group rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 hover:border-emerald-500/40 hover:bg-zinc-900/70 transition-colors duration-300"
                >
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 grid place-items-center text-emerald-300 group-hover:bg-emerald-500/15 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-3 font-display text-base font-semibold text-zinc-100">
                    {title}
                  </h4>
                  <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
