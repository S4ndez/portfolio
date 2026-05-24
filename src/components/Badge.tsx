import React from 'react';
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'blue' | 'violet' | 'gray';
  icon?: React.ReactNode;
}
export function Badge({ children, variant = 'cyan', icon }: BadgeProps) {
  const variants = {
    cyan: 'bg-cyan/10 text-cyan border-cyan/20',
    blue: 'bg-blue/10 text-blue border-blue/20',
    violet: 'bg-violet/10 text-violet border-violet/20',
    gray: 'bg-white/5 text-gray-300 border-white/10'
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono border ${variants[variant]}`}>
      
      {icon && <span className="w-3 h-3">{icon}</span>}
      {children}
    </span>);

}