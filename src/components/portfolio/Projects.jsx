import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../mock/mock";

const projectImages = [
  "/images/pipeline_3d.png", 
  "/images/ml_3d.png",       
  "/images/hero_abstract.png" 
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Image stays pinned and zooms slightly while scrolling (Apple style scrollytelling)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative min-h-[140vh] py-20 flex items-center">
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[3rem] max-w-[90%] md:max-w-[80%] mx-auto sticky top-[10vh] h-[80vh] border border-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,1)]">
        <motion.img 
          src={projectImages[index % projectImages.length]} 
          style={{ scale, opacity }}
          className="absolute inset-0 w-full h-full object-cover"
          alt={project.title}
        />
        {/* Gradient overlays to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-2xl bg-black/20 backdrop-blur-xl p-8 sm:p-12 rounded-[2rem] border border-white/10 shadow-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 text-xs font-mono tracking-widest text-cyan-300 border border-cyan-500/30 rounded-full bg-cyan-500/10">
                {project.tag}
              </span>
            </div>
            
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
              {project.title}
            </h3>
            
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {project.highlights.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-500 mt-2 shrink-0"></div>
                  <span className="text-slate-200 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.tech.map(tag => (
                <span key={tag} className="px-4 py-2 text-sm text-slate-300 bg-white/5 rounded-full border border-white/10">
                  {tag}
                </span>
              ))}
            </div>

            {project.link && (
              <a href={project.link} className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group text-lg">
                View Project Details 
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 z-20 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-8xl font-display font-bold text-white tracking-tighter"
        >
          Selected work.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 text-2xl text-slate-400 max-w-3xl mx-auto font-light"
        >
          A deep dive into complex data architectures, predictive models, and software systems.
        </motion.p>
      </div>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
