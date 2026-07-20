import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail, Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'hero', label: 'Home' },
 
  { id: 'projects', label: 'Projects' },
   { id: 'experience', label: 'Experience' },
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
          // Offset to trigger earlier when scrolling
          if (rect.top <= 200) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on load
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-black text-white overflow-x-hidden">
      {/* Global Grid Overlay */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />

      {/* Background Ambiance (Fixed) matching reference design */}
      <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#81D8D0] rounded-full mix-blend-screen filter blur-[140px] opacity-[0.08] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900 rounded-full mix-blend-screen filter blur-[140px] opacity-[0.12] pointer-events-none z-0"></div>

      {/* Navigation (iOS Dynamic Island Style) */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="ios-glass rounded-full px-2 py-1.5 flex items-center gap-1 shadow-2xl relative"
        >
          {/* Desktop Nav Links */}
          <div className="hidden sm:flex items-center gap-1 relative">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 relative ${
                    isActive
                      ? 'text-black font-semibold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-[#81D8D0] rounded-full shadow-[0_0_20px_-5px_rgba(129,216,208,0.6)]"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Active Header Indicator */}
          <div className="flex sm:hidden items-center justify-between w-[280px] px-3 py-1">
            <span className="text-xs font-medium tracking-wider text-white">
              {navLinks.find((l) => l.id === activeSection)?.label || 'Home'}
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white/80 hover:text-white p-1"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Dropdown Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="absolute top-16 left-4 right-4 ios-glass rounded-[24px] p-4 flex flex-col gap-2 shadow-2xl z-50 border border-white/10"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`w-full py-3 px-4 rounded-xl text-left text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-[#81D8D0] text-black font-semibold'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 w-full flex flex-col items-center">
        {children}
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/916238838200?text=Hi%20Sandesh%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-400/50 transition-all duration-300 hover:scale-110 group"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="absolute right-full mr-3 bg-neutral-900 border border-white/10 text-white text-xs font-mono px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Footer */}
      <footer className="w-full text-center py-16 border-t border-white/5 mt-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <p className="text-[10px] text-white/20 uppercase tracking-widest mb-4">
            Designed for the future
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://github.com/sandesh-000016" 
              target="_blank" 
              rel="noreferrer" 
              className="text-xs text-white/40 hover:text-[#81D8D0] transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/sandeshgirish/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-xs text-white/40 hover:text-[#81D8D0] transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:sandeshgirish348@gmail.com" 
              className="text-xs text-white/40 hover:text-[#81D8D0] transition-colors"
            >
              Email
            </a>
          </div>
          <p className="text-[10px] text-white/20 font-mono">
            © {new Date().getFullYear()} Sandesh Girish. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
