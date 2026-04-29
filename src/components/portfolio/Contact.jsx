import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../ui/icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { profile } from "../../mock/mock";
import { useToast } from "../../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Store in localStorage for demonstration
    const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
    submissions.push({ ...formData, date: new Date().toISOString() });
    localStorage.setItem('contact_submissions', JSON.stringify(submissions));

    setIsSubmitting(false);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      duration: 5000,
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-32 lg:py-48 bg-[#030712] z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="font-mono text-sm tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
              Contact
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-[6rem] font-display font-bold text-white tracking-tighter leading-none"
          >
            Let's build something useful.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-xl sm:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed"
          >
            Open to graduate software engineering, data engineering and technology roles. Reach out for opportunities, collaborations or networking.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 space-y-6"
          >
            {[
              { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { icon: Github, label: "GitHub", value: profile.github.replace("https://", ""), href: profile.github },
              { icon: Linkedin, label: "LinkedIn", value: profile.linkedin.replace("https://www.", ""), href: profile.linkedin },
              { icon: MapPin, label: "Location", value: profile.location, href: null },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`glass-card p-6 rounded-[2rem] flex items-center gap-5 border-white/[0.05] ${item.href ? "hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-300 group" : ""}`}
              >
                <div className={`h-12 w-12 rounded-full grid place-items-center bg-white/5 border border-white/10 ${item.href ? "group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors" : "text-cyan-400"}`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-mono tracking-widest uppercase text-slate-500 mb-1">{item.label}</div>
                  <div className="text-white font-medium text-lg">{item.value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-8 glass-card p-8 sm:p-12 rounded-[2.5rem] border-white/[0.05] shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-slate-300 text-base">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Your name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="h-14 bg-black/20 border-white/10 text-white placeholder:text-slate-600 focus:border-cyan-500 focus:ring-cyan-500/20 text-lg rounded-2xl"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-slate-300 text-base">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="you@company.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="h-14 bg-black/20 border-white/10 text-white placeholder:text-slate-600 focus:border-cyan-500 focus:ring-cyan-500/20 text-lg rounded-2xl"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="subject" className="text-slate-300 text-base">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="What is this about?" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                  className="h-14 bg-black/20 border-white/10 text-white placeholder:text-slate-600 focus:border-cyan-500 focus:ring-cyan-500/20 text-lg rounded-2xl"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-slate-300 text-base">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell me a little about the opportunity or idea..." 
                  required 
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-black/20 border-white/10 text-white placeholder:text-slate-600 focus:border-cyan-500 focus:ring-cyan-500/20 text-lg rounded-2xl resize-none py-4"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                <p className="text-slate-500 text-sm font-mono">
                  I usually reply within 1-2 business days.
                </p>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto h-14 px-8 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
