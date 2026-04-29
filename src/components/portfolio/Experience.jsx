import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../../mock/mock";

const Experience = () => {
  return (
    <section id="experience" className="relative py-32 lg:py-48 bg-[#030712] z-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-8xl font-display font-bold text-white tracking-tighter mb-24 text-center"
        >
          Career track.
        </motion.h2>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-20">
          {experience.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-10 md:pl-16 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[11px] top-2 h-5 w-5 rounded-full bg-[#030712] border-[4px] border-cyan-500 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300"></div>

              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                    {job.role}
                  </h3>
                  <div className="text-xl text-cyan-400 font-medium mt-2">
                    {job.company}
                  </div>
                </div>
                <div className="mt-2 md:mt-0 text-slate-400 font-mono text-sm tracking-widest uppercase bg-white/5 px-4 py-2 rounded-full inline-block w-max border border-white/5">
                  {job.period}
                </div>
              </div>

              <div className="glass-card rounded-[2rem] p-8 md:p-10 mt-8 border-white/[0.05]">
                <ul className="space-y-4">
                  {job.bullets.map((task, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-300 text-lg leading-relaxed">
                      <span className="text-cyan-500 mt-2 text-xl leading-none">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
