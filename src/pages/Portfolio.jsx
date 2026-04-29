import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/portfolio/Navbar";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Projects from "../components/portfolio/Projects";
import Experience from "../components/portfolio/Experience";
import Education from "../components/portfolio/Education";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";
import { Toaster } from "../components/ui/toaster";

const Portfolio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Background animation: darkens and scales as we scroll down
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={containerRef} className="relative min-h-screen text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-100 bg-[#030712] overflow-x-hidden">
      
      {/* Scroll-Reactive Global Background Image */}
      <motion.div 
        style={{ opacity: bgOpacity, scale: bgScale }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-slate-950/40 z-10"></div>
        <img 
          src="/images/hero_abstract.png" 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 z-20 opacity-[0.025] mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>
      </motion.div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero scrollYProgress={scrollYProgress} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </div>
  );
};

export default Portfolio;
