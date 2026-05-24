import React from 'react';
import { motion } from 'framer-motion';
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}
export function GlassCard({
  children,
  className = '',
  hoverEffect = false,
  delay = 0
}: GlassCardProps) {
  return (
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
        duration: 0.5,
        delay
      }}
      whileHover={
      hoverEffect ?
      {
        y: -5,
        transition: {
          duration: 0.2
        }
      } :
      {}
      }
      className={`glass-panel rounded-xl p-6 relative overflow-hidden group ${hoverEffect ? 'hover:border-cyan/30 hover:shadow-neon-cyan/20 cursor-pointer transition-colors duration-300' : ''} ${className}`}>
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </motion.div>);

}