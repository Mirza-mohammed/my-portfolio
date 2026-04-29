import React from "react";
import { motion, useTransform } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../ui/icons";
import { Button } from "../ui/button";
import { profile, stats } from "../../mock/mock";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Hero = ({ scrollYProgress }) => {
  // Hero fades and moves up as you scroll down (Apple style)
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <motion.section 
      id="home" 
      style={{ opacity, y, scale }}
      className="relative min-h-[100vh] flex flex-col justify-center pt-20 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-cyan-300 text-sm font-mono mb-10 border-cyan-500/20 backdrop-blur-2xl shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            {profile.available}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-7xl lg:text-[6.5rem] font-bold tracking-tighter leading-[1.05] text-white"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent inline-block pb-4">
              {profile.name}
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-xl sm:text-2xl lg:text-3xl text-slate-300/90 leading-relaxed font-light max-w-3xl"
          >
            I engineer <span className="text-white font-medium">reliable software</span>, <span className="text-cyan-300 font-medium">data pipelines</span>, and <span className="text-purple-300 font-medium">intelligent analytics</span> solutions that transform raw data into practical business insights.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-14 flex flex-col sm:flex-row items-center gap-6"
          >
            <Button
              onClick={() => scrollTo("projects")}
              className="bg-white text-slate-950 hover:bg-slate-200 hover:scale-105 active:scale-95 font-semibold h-14 px-8 rounded-full transition-all duration-300 text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]"
            >
              Explore My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-4">
              <a href={profile.github} target="_blank" rel="noreferrer" className="h-14 w-14 grid place-items-center rounded-full glass-card border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 shadow-xl" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="h-14 w-14 grid place-items-center rounded-full glass-card border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 shadow-xl" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400 font-mono">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent"></div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
