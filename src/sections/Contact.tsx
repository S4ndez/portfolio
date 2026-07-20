import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MessageCircle,
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
  MapPin,
  Clock,
  Send,
} from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const whatsappNumber = '916238838200';
  const whatsappMessage = encodeURIComponent(
    "Hi Sandesh, I visited your portfolio and would like to connect!"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-28 px-4 md:px-8 relative w-full max-w-4xl z-10">
      <div className="w-full" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[#81D8D0] font-mono text-[11px] mb-4 bg-white/5 border border-white/5 px-4 py-2 rounded-full uppercase tracking-wider">
            <Send className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-4 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto font-sans leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'm just a message away.
          </p>
        </motion.div>

        {/* Main CTA — WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative block ios-glass rounded-[32px] p-8 md:p-10 overflow-hidden border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500"
          >
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/[0.02] to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-105 transition-transform duration-300 shrink-0 shadow-lg">
                <MessageCircle className="w-7 h-7" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-medium text-white mb-1.5 group-hover:text-green-400 transition-colors font-sans">
                  Message me on WhatsApp
                </h3>
                <p className="text-white/40 text-xs font-mono leading-relaxed">
                  The fastest way to reach me. Typically respond within a few hours.
                </p>
              </div>

              <div className="flex items-center gap-1.5 px-5 py-3 rounded-full bg-green-500 hover:bg-green-400 text-white font-medium text-xs transition-all duration-300 shrink-0 hover:scale-[1.03]">
                <span>Chat Now</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </a>
        </motion.div>

        {/* Other contact options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {/* Email */}
          <a
            href="mailto:sandeshgirish348@gmail.com"
            className="group ios-glass rounded-[28px] p-6 hover:bg-white/[0.04] border border-white/5 hover:border-[#81D8D0]/30 transition-all duration-300 text-center flex flex-col items-center justify-center"
          >
            <div className="w-11 h-11 mb-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#81D8D0] group-hover:bg-[#81D8D0]/10 transition-all">
              <Mail className="w-4.5 h-4.5" />
            </div>
            <h4 className="text-white font-medium text-xs mb-1 font-sans">
              Email
            </h4>
            <p className="text-white/40 text-[10px] font-mono break-all max-w-[200px]">
              sandeshgirish348@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sandeshgirish/"
            target="_blank"
            rel="noreferrer"
            className="group ios-glass rounded-[28px] p-6 hover:bg-white/[0.04] border border-white/5 hover:border-[#81D8D0]/30 transition-all duration-300 text-center flex flex-col items-center justify-center"
          >
            <div className="w-11 h-11 mb-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#81D8D0] group-hover:bg-[#81D8D0]/10 transition-all">
              <Linkedin className="w-4.5 h-4.5" />
            </div>
            <h4 className="text-white font-medium text-xs mb-1 font-sans">
              LinkedIn
            </h4>
            <p className="text-white/40 text-[10px] font-mono">
              in/sandeshgirish
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sandesh-000016"
            target="_blank"
            rel="noreferrer"
            className="group ios-glass rounded-[28px] p-6 hover:bg-white/[0.04] border border-white/5 hover:border-[#81D8D0]/30 transition-all duration-300 text-center flex flex-col items-center justify-center"
          >
            <div className="w-11 h-11 mb-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#81D8D0] group-hover:bg-[#81D8D0]/10 transition-all">
              <Github className="w-4.5 h-4.5" />
            </div>
            <h4 className="text-white font-medium text-xs mb-1 font-sans">
              GitHub
            </h4>
            <p className="text-white/40 text-[10px] font-mono">
              sandesh-000016
            </p>
          </a>
        </motion.div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-[10px] text-white/30 font-mono uppercase tracking-wider"
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#81D8D0]" />
            <span>Kochi, India</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#81D8D0]" />
            <span>IST (UTC+5:30)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span>Open for new roles</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

