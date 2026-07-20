import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Eye, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
// Simple animated background component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue/20 rounded-full blur-[120px]" />

      {/* Simulated code rain effect */}
      <div className="absolute inset-0 flex justify-around opacity-30">
        {[...Array(10)].map((_, i) =>
        <motion.div
          key={i}
          initial={{
            y: -1000
          }}
          animate={{
            y: '100vh'
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 10
          }}
          className="text-cyan/30 font-mono text-xs whitespace-pre select-none writing-vertical-rl"
          style={{
            writingMode: 'vertical-rl'
          }}>
          
            {`function init() {
  const sys = new System();
  sys.boot();
  return true;
}`}
          </motion.div>
        )}
      </div>
    </div>);

};
export function Home() {
  const [text, setText] = useState('');
  const fullText =
  'I build automation systems, CI/CD pipelines, internal tools, GitHub workflows, and technical processes that scale.';
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative min-h-[calc(100vh-12rem)] flex items-center justify-center">
      <AnimatedBackground />

      <div className="relative z-10 max-w-3xl w-full">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5
          }}
          className="space-y-6">
          
          <div className="flex items-center gap-2 text-cyan font-mono mb-8">
            <Terminal className="w-5 h-5" />
            <span>$ whoami</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tight text-white mb-2">
            <span className="text-glow-cyan">Sandesh</span>
            <span className="animate-pulse text-cyan">_</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 font-mono font-medium mb-6">
            Technical Operations Lead & Developer
          </h2>

          <div className="h-24 md:h-16">
            <p className="text-lg text-gray-400 font-mono leading-relaxed border-l-2 border-cyan/30 pl-4">
              {text}
              <span className="animate-pulse inline-block w-2 h-5 bg-cyan ml-1 align-middle" />
            </p>
          </div>

          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: 1.5,
              duration: 0.5
            }}
            className="flex flex-wrap gap-4 pt-8">
            
            <Link to="/projects">
              <Button
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}>
                
                View Projects
              </Button>
            </Link>
            <Button
              variant="secondary"
              icon={<Eye className="w-4 h-4" />}
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </Button>
            <Button
              variant="outline"
              icon={<Linkedin className="w-4 h-4" />}
              href="https://linkedin.com">
              
              LinkedIn
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>);

}