import React from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { profile, stats } from "../../mock/mock";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      {/* animated grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.12),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-300 text-xs font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              {profile.available}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.05] text-zinc-50">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                {profile.name}
              </span>
              .
            </h1>
            <p className="mt-4 font-mono text-sm sm:text-base text-zinc-400">
              {profile.title}
            </p>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed">
              {profile.heroIntro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                onClick={() => scrollTo("projects")}
                className="bg-emerald-400 text-zinc-950 hover:bg-emerald-300 font-medium h-11 px-5"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollTo("contact")}
                variant="outline"
                className="h-11 px-5 bg-transparent border-zinc-700 text-zinc-200 hover:bg-zinc-900 hover:text-emerald-300 hover:border-emerald-500/40"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <a
                href={profile.cvUrl}
                download
                className="h-11 px-5 inline-flex items-center rounded-md text-sm border border-zinc-800 text-zinc-300 hover:text-emerald-300 hover:border-emerald-500/40 transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 grid place-items-center rounded-md border border-zinc-800 text-zinc-400 hover:text-emerald-300 hover:border-emerald-500/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 grid place-items-center rounded-md border border-zinc-800 text-zinc-400 hover:text-emerald-300 hover:border-emerald-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="h-10 px-3 inline-flex items-center gap-2 rounded-md border border-zinc-800 text-zinc-400 hover:text-emerald-300 hover:border-emerald-500/40 transition-colors text-sm font-mono"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
            </div>
          </div>

          {/* Right - terminal / data card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 blur-xl rounded-2xl" />
              <div className="relative rounded-xl border border-zinc-800 bg-zinc-900/70 backdrop-blur shadow-2xl shadow-black/40 overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-zinc-800 bg-zinc-900">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="ml-3 font-mono text-xs text-zinc-500">
                    ~/mohammad/profile.py
                  </span>
                </div>
                <pre className="p-5 font-mono text-[13px] leading-relaxed text-zinc-300 whitespace-pre-wrap">
<span className="text-zinc-500"># about</span>{"\n"}
<span className="text-emerald-300">developer</span> = {"{"}{"\n"}
  <span className="text-teal-300">"role"</span>: <span className="text-zinc-100">"Software Developer + Data Engineer"</span>,{"\n"}
  <span className="text-teal-300">"focus"</span>: [<span className="text-zinc-100">"ETL"</span>, <span className="text-zinc-100">"ML"</span>, <span className="text-zinc-100">"explainability"</span>],{"\n"}
  <span className="text-teal-300">"stack"</span>: [<span className="text-zinc-100">"Python"</span>, <span className="text-zinc-100">"SQL"</span>, <span className="text-zinc-100">"AWS"</span>],{"\n"}
  <span className="text-teal-300">"learning"</span>: <span className="text-zinc-100">"MSc Computer Science"</span>,{"\n"}
  <span className="text-teal-300">"mission"</span>: <span className="text-zinc-100">"reliable, useful systems"</span>,{"\n"}
{"}"}{"\n\n"}
<span className="text-zinc-500"># status</span>{"\n"}
<span className="text-emerald-300">print</span>(<span className="text-zinc-100">"available_for_hire"</span>) <span className="text-emerald-400">→ True</span>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-4"
            >
              <div className="flex items-center gap-2 text-emerald-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span className="font-mono text-xs uppercase tracking-wider">
                  {s.label}
                </span>
              </div>
              <div className="mt-1 font-display text-2xl font-semibold text-zinc-50">
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
