import React from "react";
import { motion } from "framer-motion";
import { skillGroups } from "../../mock/mock";

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 lg:py-48 bg-[#030712] z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-8xl font-display font-bold text-white tracking-tighter mb-24 text-center"
        >
          Technical Arsenal.
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {skillGroups.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-[2.5rem] p-10 hover:bg-white/[0.04] transition-all duration-500 group border-white/[0.05] shadow-2xl"
              >
                <div className="h-20 w-20 rounded-[1.5rem] bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 grid place-items-center mb-10 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-500">
                  <Icon className="h-10 w-10 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-8 tracking-tight">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-5 py-2.5 text-base font-medium text-slate-300 bg-white/[0.03] rounded-full border border-white/[0.05] hover:bg-white/10 hover:text-white transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
