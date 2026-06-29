import React from 'react';
import { motion } from 'framer-motion';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}
export function Button({
  variant = 'primary',
  children,
  icon,
  href,
  target,
  rel,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-mono text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background';
  const variants = {
    primary:
    'bg-cyan/10 text-cyan border border-cyan/50 hover:bg-cyan/20 hover:shadow-neon-cyan hover:border-cyan',
    secondary:
    'bg-blue/10 text-blue border border-blue/50 hover:bg-blue/20 hover:shadow-neon-blue hover:border-blue',
    outline:
    'bg-transparent text-gray-300 border border-white/10 hover:border-white/30 hover:bg-white/5'
  };
  const content =
  <>
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </>;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        whileHover={{
          scale: 1.02
        }}
        whileTap={{
          scale: 0.98
        }}
        className={`${baseStyles} ${variants[variant]} ${className}`}>
        
        {content}
      </motion.a>);

  }
  return (
    <motion.button
      whileHover={{
        scale: 1.02
      }}
      whileTap={{
        scale: 0.98
      }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}>
      
      {content}
    </motion.button>);

}