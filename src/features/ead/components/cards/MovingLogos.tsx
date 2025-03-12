"use client"
import Image from 'next/image';
import React, { useState } from 'react';

interface MovingLogosProps {
  direction: 'up' | 'down';
  height: string;
}

interface Logo {
  image: string;
  title: string;
}

const MovingLogos: React.FC<MovingLogosProps> = ({ direction, height }) => {
  const logos: Logo[] = [
    { 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      title: 'JavaScript'
    },
    { 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      title: 'TypeScript'
    },
    { 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      title: 'React'
    },
    { 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      title: 'Next.js'
    },
    { 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
      title: 'Firebase'
    },
    { 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      title: 'PostgreSQL'
    },
    { 
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      title: 'Node.js'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
      title: 'Nest.js'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      title: 'Git'
    }
  ];

  const allLogos = [...logos, ...logos];

  const [isPaused, setIsPaused] = useState(false);
  const animationStyle = { animationPlayState: isPaused ? 'paused' : 'running' };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const renderLogo = (logo: Logo, index: number, isSecondInstance = false) => (
    <div
      key={isSecondInstance ? `second-${index}` : index}
      className="w-10 h-10 flex items-center justify-center shrink-0 mb-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={logo.image}
        alt={logo.title}
        className="object-contain"
        width={40}
        height={40}
      />
    </div>
  );

  return (
    <div className="relative overflow-hidden w-10" style={{ height }}>
      <div
        className={`absolute w-full ${direction === 'up' ? 'animate-scroll-up' : 'animate-scroll-down'}`}
        style={animationStyle}
      >
        {allLogos.map((logo, index) => renderLogo(logo, index))}
      </div>
      <div
        className={`absolute w-full ${direction === 'up' ? 'animate-scroll-up' : 'animate-scroll-down'} [animation-delay:-10s]`}
        style={animationStyle}
      >
        {allLogos.map((logo, index) => renderLogo(logo, index, true))}
      </div>
    </div>
  );
};

export default MovingLogos;