import React, { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useToast } from "../../hooks/use-toast";
import { profile } from "../../mock/mock";
import SectionHeading from "./SectionHeading";

const LS_KEY = "portfolio_contact_submissions";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in your name, email and message.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    // Mock save to localStorage
    await new Promise((r) => setTimeout(r, 700));
    try {
      const existing = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
      existing.push({
        ...form,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem(LS_KEY, JSON.stringify(existing));
    } catch {
      // ignore
    }
    setSubmitting(false);
    setSubmitted(true);
    toast({
      title: "Message sent",
      description: "Thanks! I'll get back to you soon.",
    });
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3500);
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: profile.github.replace("https://", ""),
      href: profile.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: profile.linkedin.replace("https://", ""),
      href: profile.linkedin,
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative bg-zinc-950/40 border-y border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="06 / contact"
          title="Let's build something useful."
          description="Open to graduate software engineering, data engineering and technology roles. Reach out for opportunities, collaborations or networking."
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-3">
            {contactItems.map((c) => {
              const Inner = (
                <div className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 hover:border-emerald-500/40 hover:bg-zinc-900/70 transition-colors">
                  <div className="h-10 w-10 rounded-md bg-emerald-500/10 border border-emerald-500/20 grid place-items-center text-emerald-300">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                      {c.label}
                    </div>
                    <div className="text-sm text-zinc-200 group-hover:text-emerald-200 transition-colors break-all">
                      {c.value}
                    </div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer">
                  {Inner}
                </a>
              ) : (
                <div key={c.label}>{Inner}</div>
              );
            })}
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 lg:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-zinc-300">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-emerald-500/40 focus-visible:border-emerald-500/40"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-300">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-emerald-500/40 focus-visible:border-emerald-500/40"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-zinc-300">
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                className="bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-emerald-500/40 focus-visible:border-emerald-500/40"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-zinc-300">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a little about the opportunity or idea…"
                className="bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-600 focus-visible:ring-emerald-500/40 focus-visible:border-emerald-500/40 resize-none"
              />
            </div>

            <div className="flex items-center justify-between gap-3 flex-wrap">
              <p className="text-xs text-zinc-500">
                I usually reply within 1–2 business days.
              </p>
              <Button
                type="submit"
                disabled={submitting}
                className="bg-emerald-400 text-zinc-950 hover:bg-emerald-300 font-medium h-11 px-5 disabled:opacity-70"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Sent
                  </>
                ) : submitting ? (
                  <>Sending…</>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
