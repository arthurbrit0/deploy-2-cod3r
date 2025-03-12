import React from 'react';

interface FloatingCardProps {
  direction: 'up' | 'down';
  delay: number;
  className?: string;
  children: React.ReactNode;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ direction, delay, className = '', children }) => {
  const animationClass = direction === 'up' 
    ? 'animate-float-up'
    : 'animate-float-down';

  return (
    <div 
      className={`
        bg-white/10 backdrop-blur-lg rounded-xl p-4
        shadow-lg transform transition-all duration-1000
        ${animationClass} opacity-80 hover:opacity-100
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FloatingCard;