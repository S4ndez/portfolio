import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Linkedin,
  Github,
  ArrowDown,
  MapPin,
  Briefcase,
  Code2,
  MessageCircle,
  Layers,
  Sparkles,
  ArrowUpRight,
  ExternalLink,
  Laptop,
  CheckCircle2,
  Cpu,
} from 'lucide-react';

export function Hero() {
  const [text, setText] = useState('');
  const fullText =
    "I'm a Technical Operations Lead who delivers full-stack web products and manages client projects end-to-end. At Webgeon, I scope requirements, architect features, handle corporate operations, drive client communication, and ensure IT systems run smoothly. Delivered around 30+ client projects.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 15);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full max-w-7xl px-4 md:px-8 flex flex-col justify-center pt-28 pb-12 z-10 overflow-hidden"
    >
      {/* Rich Left-side Gradient Sweep (Teal-blue gradient effect from 3rd photo) */}
      <div className="absolute top-0 left-[-10%] w-[55%] h-full bg-gradient-to-tr from-[#81D8D0]/18 via-[#3b82f6]/8 to-transparent pointer-events-none z-0 filter blur-[100px] opacity-90" />
      <div className="absolute top-[20%] left-[-5%] w-[350px] h-[350px] bg-[#81D8D0]/10 rounded-full pointer-events-none z-0 filter blur-[120px]" />
      
      {/* Bottom right blue glow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-950/20 rounded-full mix-blend-screen filter blur-[130px] pointer-events-none z-0" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full relative z-10">
        {/* Left Column: Title & Intro */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-6 order-2 lg:order-1">
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#81D8D0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#81D8D0]"></span>
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-semibold tracking-widest text-[#81D8D0] uppercase leading-tight">
                Open to Full Stack Developer, Project Coordinator & Product Developer roles
              </span>
              <span className="text-[10px] font-medium tracking-wider text-white/45 uppercase font-mono">
                Bangalore · Hyderabad · Chennai · Kochi · Trivandrum
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 font-sans">
              Sandesh
              <br />
              Girish
            </h1>
            <h2 className="text-lg md:text-xl font-mono text-[#81D8D0]/95 font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#81D8D0]" />
              Technical Operations Lead & Full-Stack Dev
            </h2>
          </motion.div>

          {/* Typing Text Container */}
          <div className="min-h-[120px] sm:min-h-[90px] md:min-h-[70px]">
            <p className="text-base text-white/60 font-light leading-relaxed tracking-wide max-w-xl border-l border-white/10 pl-4 font-sans">
              {text}
              <span className="animate-pulse inline-block w-1.5 h-4 bg-[#81D8D0] ml-1 align-middle" />
            </p>
          </div>

          {/* Info Tags */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2.5 max-w-xl"
          >
            <div className="flex items-center gap-2 text-[11px] font-mono text-white/50 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full">
              <Briefcase className="w-3.5 h-3.5 text-[#81D8D0]" />
              <span>@ Webgeon Results</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-white/50 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-[#81D8D0]" />
              <span>Kochi, India</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-white/50 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full">
              <Code2 className="w-3.5 h-3.5 text-[#81D8D0]" />
              <span>Corporate Ops · System Design</span>
            </div>
          </motion.div>

          {/* CTA & Social Area */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="https://wa.me/916238838200?text=Hi%20Sandesh%2C%20I%20visited%20your%20portfolio!"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 bg-[#81D8D0] text-black px-6 py-3.5 rounded-full font-medium text-xs hover:scale-[1.03] transition-all duration-300 shadow-[0_0_25px_-5px_rgba(129,216,208,0.4)]"
            >
              <span>Let's Talk</span>
              <MessageCircle className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <button
              onClick={() => scrollToSection('projects')}
              className="group flex items-center gap-2 bg-white/5 border border-white/8 hover:border-white/20 text-white px-6 py-3.5 rounded-full font-medium text-xs hover:bg-white/10 transition-all duration-300"
            >
              <span>View Portfolio</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-[#81D8D0]" />
            </button>

            <div className="flex items-center gap-3 pl-2">
              <a
                href="https://www.linkedin.com/in/sandeshgirish/"
                target="_blank"
                rel="noreferrer"
                className="text-white/40 hover:text-[#81D8D0] hover:scale-110 transition-all p-1"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/sandesh-000016"
                target="_blank"
                rel="noreferrer"
                className="text-white/40 hover:text-[#81D8D0] hover:scale-110 transition-all p-1"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-white/40 hover:text-[#81D8D0] hover:scale-110 transition-all p-1 flex items-center gap-1 text-[11px] font-mono"
                title="Resume"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">CV</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: iOS Widgets Grid (Without theme toggle widget) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 flex flex-col gap-4 order-1 lg:order-2"
        >
          <div className="w-full grid grid-cols-2 gap-4">
            
            {/* Widget 1: Profile Card (Double Column, Initials instead of Photo) */}
            <div 
              onClick={() => scrollToSection('experience')}
              className="ios-glass rounded-[32px] p-6 col-span-2 flex items-center justify-between hover:bg-white/5 transition-all duration-500 group cursor-pointer border border-white/5 hover:border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#81D8D0] to-blue-600 p-[2px] shadow-lg">
                  <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center overflow-hidden">
                    <span className="font-semibold text-lg text-white font-mono">SG</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-medium text-base tracking-tight group-hover:text-[#81D8D0] transition-colors">
                    Sandesh Girish
                  </h3>
                  <p className="text-white/40 text-xs mt-0.5 font-mono">
                    Technical Delivery & Operations
                  </p>
                </div>
              </div>
              <div className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#81D8D0] group-hover:text-black transition-all duration-300 text-white/40">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Widget 2: Stats Widget */}
            <div className="ios-glass rounded-[32px] p-5 flex flex-col justify-between group border border-white/5 hover:border-white/10 hover:bg-white/5 transition-colors cursor-default">
              <div className="flex justify-between items-start">
                <div className="p-2.5 rounded-xl bg-white/5 text-[#81D8D0]">
                  <Layers className="w-4.5 h-4.5" />
                </div>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-medium text-white tracking-tight font-sans">
                  30+
                </div>
                <div className="text-[11px] text-white/40 mt-1 font-mono uppercase tracking-wider">
                  Projects Shipped
                </div>
              </div>
            </div>

            {/* Widget 3: Experience Widget */}
            <div className="ios-glass rounded-[32px] p-5 flex flex-col justify-between group border border-white/5 hover:border-white/10 hover:bg-white/5 transition-colors cursor-default">
              <div className="flex justify-between items-start">
                <div className="p-2.5 rounded-xl bg-white/5 text-[#81D8D0]">
                  <Briefcase className="w-4.5 h-4.5" />
                </div>
              </div>
              <div className="mt-4">
                <div className="text-3xl font-medium text-white tracking-tight font-sans">
                  2 Years
                </div>
                <div className="text-[11px] text-white/40 mt-1 font-mono uppercase tracking-wider">
                  Experience
                </div>
              </div>
            </div>

            {/* Widget 4: Skill Stack / Visual (Double Column) */}
            <div className="ios-glass rounded-[32px] col-span-2 p-5 flex flex-col border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all duration-500 relative overflow-hidden group">
              <h4 className="text-white font-medium text-sm tracking-tight font-mono flex items-center gap-1.5 mb-3">
                <Laptop className="w-4 h-4 text-[#81D8D0]" />
                Technical Stack Highlights
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-white/60 relative z-10">
                <div className="flex items-center gap-1.5 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#81D8D0] shrink-0" />
                  <span>React / Next.js</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#81D8D0] shrink-0" />
                  <span>CI/CD & Actions</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#81D8D0] shrink-0" />
                  <span>MongoDB / API</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#81D8D0] shrink-0" />
                  <span>Power Automate</span>
                </div>
              </div>

              {/* Abstract Shape */}
              <div className="absolute right-[-20px] bottom-[-30px] w-28 h-28 bg-gradient-to-br from-[#81D8D0] to-transparent rounded-full opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator button */}
      <div className="flex justify-center mt-12 lg:mt-6">
        <button
          onClick={() => scrollToSection('experience')}
          className="text-white/30 hover:text-[#81D8D0] transition-colors p-2 flex flex-col items-center gap-1 text-[10px] font-mono tracking-widest uppercase"
        >
          <span>Scroll down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 mt-1" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}

