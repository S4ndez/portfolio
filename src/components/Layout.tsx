import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail, Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navLinks.map((l) => document.getElementById(l.id));
      let current = 'hero';
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global Background */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background/90 to-background pointer-events-none z-0" />

      {/* Ambient glow orbs */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[200px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-violet/5 rounded-full blur-[200px] pointer-events-none z-0" />

      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-panel border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-center relative">
         
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`font-mono text-sm relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-cyan bg-cyan/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-cyan rounded-full shadow-neon-cyan"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-400 hover:text-white p-2 absolute right-6"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden glass-panel border-t border-white/5 overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollTo(link.id)}
                      className={`font-mono text-sm py-3 px-4 rounded-lg text-left transition-all ${
                        isActive
                          ? 'text-cyan bg-cyan/10 border-l-2 border-cyan'
                          : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent'
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10">{children}</main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/916238838200?text=Hi%20Sandesh%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-400/50 transition-all duration-300 hover:scale-110 group"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute right-full mr-3 bg-surface border border-white/10 text-white text-xs font-mono px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 glass-panel mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
            <Terminal className="w-4 h-4" />
            <span>
              © {new Date().getFullYear()} Sandesh. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sandesh-000016"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-cyan transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sandeshgirish/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sandeshgirish348@gmail.com"
              className="text-gray-400 hover:text-violet transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}