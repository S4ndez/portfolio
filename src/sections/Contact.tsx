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

  // UPDATE: Replace with your actual WhatsApp number (include country code, no + sign)
  const whatsappNumber = '916238838200';
  const whatsappMessage = encodeURIComponent(
    "Hi Sandesh, I visited your portfolio and would like to connect!"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-violet/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-cyan font-mono text-sm mb-4 bg-cyan/5 border border-cyan/10 px-4 py-2 rounded-full">
            <Send className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-400 font-mono max-w-lg mx-auto">
            Have a project in mind or want to discuss opportunities? I'm just a
            message away.
          </p>
        </motion.div>

        {/* Main CTA — WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative block glass-panel rounded-2xl p-8 md:p-10 overflow-hidden hover:border-green-500/30 transition-all duration-500"
          >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:bg-green-500/20 group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all duration-300 shrink-0">
                <MessageCircle className="w-8 h-8" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold font-mono text-white mb-2 group-hover:text-green-400 transition-colors">
                  Message me on WhatsApp
                </h3>
                <p className="text-gray-400 text-sm font-mono">
                  The fastest way to reach me. I typically respond within a few
                  hours.
                </p>
              </div>

              <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-mono text-sm font-medium group-hover:bg-green-400 transition-all duration-300 shrink-0">
                <span>Chat Now</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </a>
        </motion.div>

        {/* Other contact options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {/* Email */}
          <a
            href="mailto:sandeshgirish348@gmail.com"
            className="group glass-panel rounded-xl p-6 hover:border-cyan/30 transition-all duration-300 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan group-hover:bg-cyan/20 group-hover:shadow-neon-cyan transition-all">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="text-white font-mono font-medium text-sm mb-1">
              Email
            </h4>
            <p className="text-gray-400 text-xs font-mono">
              sandeshgirish348@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sandeshgirish/"
            target="_blank"
            rel="noreferrer"
            className="group glass-panel rounded-xl p-6 hover:border-blue/30 transition-all duration-300 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-blue/10 border border-blue/20 flex items-center justify-center text-blue group-hover:bg-blue/20 group-hover:shadow-neon-blue transition-all">
              <Linkedin className="w-5 h-5" />
            </div>
            <h4 className="text-white font-mono font-medium text-sm mb-1">
              LinkedIn
            </h4>
            <p className="text-gray-400 text-xs font-mono">in/sandeshgirish/</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sandesh-000016"
            target="_blank"
            rel="noreferrer"
            className="group glass-panel rounded-xl p-6 hover:border-white/20 transition-all duration-300 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:bg-white/10 transition-all">
              <Github className="w-5 h-5" />
            </div>
            <h4 className="text-white font-mono font-medium text-sm mb-1">
              GitHub
            </h4>
            <p className="text-gray-400 text-xs font-mono">
              sandesh-000016
            </p>
          </a>
        </motion.div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-gray-500 font-mono"
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3" />
            <span>India</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            <span>IST (UTC+5:30)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span>Open to opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
