import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Eye,
  Linkedin,
  ArrowDown,
  MapPin,
  Briefcase,
  Code2,
  MessageCircle,
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
    }, 20);
    return () => clearInterval(timer);
  }, []);

  const scrollToExperience = () => {
    const el = document.getElementById('experience');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue/8 rounded-full blur-[100px]" />
      </div>

      {/* Animated code rain */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -800 }}
            animate={{ y: '100vh' }}
            transition={{
              duration: Math.random() * 12 + 18,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 8,
            }}
            className="absolute text-cyan/40 font-mono text-[10px] whitespace-pre select-none"
            style={{
              writingMode: 'vertical-rl',
              left: `${(i + 1) * 10}%`,
            }}
          >
            {`const deploy = async () => {
  await build();
  await test();
  return push();
};`}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex-1 space-y-6"
          >


            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight text-white mb-3">
                Hi, I'm{' '}
                <span className="text-white">
                  Sandesh Girish
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-mono font-medium">
                Full-Stack Developer & Techops Engineer
              </h2>
            </div>

            {/* Info chips */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-400 font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <Briefcase className="w-4 h-4 text-cyan" />
                <span>@ Webgeon Results Private Limited</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <MapPin className="w-4 h-4 text-violet" />
                <span>Kochi, Kerala, India</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <Code2 className="w-4 h-4 text-blue" />
                <span>Corporate Ops · Client Handling · IT Operations . Software Developer</span>
              </div>
            </div>

            {/* Typing text */}
            <div className="min-h-[140px] sm:min-h-[100px] md:min-h-[80px]">
              <p className="text-base md:text-lg text-gray-400 font-mono leading-relaxed border-l-2 border-cyan/30 pl-4">
                {text}
                <span className="animate-pulse inline-block w-2 h-5 bg-cyan ml-1 align-middle" />
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="https://wa.me/916238838200?text=Hi%20Sandesh%2C%20I%20visited%20your%20portfolio!"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-medium bg-gradient-to-r from-cyan to-blue text-background hover:shadow-neon-cyan transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                Let's Talk
              </a>
              <a
                href="/Sandesh_Project%20cordinator.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-medium bg-white/5 text-gray-300 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Eye className="w-4 h-4" />
                View Portfolio
              </a>
              <a
                href="https://www.linkedin.com/in/sandeshgirish/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-medium bg-blue/10 text-blue border border-blue/30 hover:bg-blue/20 hover:shadow-neon-blue transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan/20 via-blue/20 to-violet/20 rounded-full blur-2xl opacity-60" />

              {/* Photo container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-cyan/30 shadow-neon-cyan/20">
                <img src="/ppformal.png" alt="Sandesh Girish" className="w-full h-full object-cover" />
              </div>

              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-6 rounded-full border border-dashed border-cyan/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-10 rounded-full border border-dashed border-violet/10"
              />

              {/* Floating tech badges around photo */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-4 bg-surface/90 backdrop-blur border border-white/10 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan shadow-lg"
              >
                next.js
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -left-4 bg-surface/90 backdrop-blur border border-white/10 px-3 py-1.5 rounded-lg text-xs font-mono text-violet shadow-lg"
              >
                Search Engine Optimization
              </motion.div>
              <motion.div
                animate={{ y: [-3, 7, -3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 -right-8 bg-surface/90 backdrop-blur border border-white/10 px-3 py-1.5 rounded-lg text-xs font-mono text-blue shadow-lg"
              >
                IT Ops
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToExperience}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-cyan transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
