import React from "react";
import { motion } from "framer-motion";
import { aboutParagraphs } from "../../mock/mock";

const About = () => {
  return (
    <section id="about" className="relative py-32 lg:py-48 bg-[#030712] z-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight"
        >
          About Me
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-xl sm:text-3xl text-slate-400 leading-relaxed font-light space-y-10 text-left sm:text-center max-w-4xl mx-auto"
        >
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
