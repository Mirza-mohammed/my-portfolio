import React from "react";
import { motion } from "framer-motion";
import { education } from "../../mock/mock";

const Education = () => {
  return (
    <section id="education" className="relative py-32 lg:py-48 bg-[#030712] z-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-8xl font-display font-bold text-white tracking-tighter mb-24 text-center"
        >
          Education.
        </motion.h2>

        <div className="grid gap-10">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-[2.5rem] p-10 sm:p-12 border-white/[0.05]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-2">
                    {edu.degree}
                  </h3>
                  <div className="text-2xl text-purple-400 font-medium mb-6">
                    {edu.institution}
                  </div>
                  
                  <div className="flex flex-col gap-3 text-lg text-slate-300">
                    {edu.areas.map((detail, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-slate-400 font-mono text-sm tracking-widest uppercase bg-white/5 px-5 py-2.5 rounded-full inline-block border border-white/5 self-start">
                  {edu.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
