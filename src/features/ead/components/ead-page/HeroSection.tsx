"use client"

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Video from '@/features/shared/components/video';

const HeroSection = () => {
  return (
    <div className="relative py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
          <div className="order-1 md:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="relative z-10 w-full"
            >
              <Video url="youtube.com" />
            </motion.div>
          </div>
          <div className="space-y-8 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400/20 to-emerald-400/10 rounded-full px-4 py-1.5"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium">
                Projeto em Desenvolvimento
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Reconstrua nossa plataforma de ensino
              <div className="relative">
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  em comunidade
                </span>
              </div>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 max-w-lg"
            >
              Junte-se a uma comunidade de desenvolvedores apaixonados por educação e tecnologia,
              contribua com código real e aprenda na prática.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6"
            >
              <a
                href="#join"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-blue-400 px-6 py-3 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
                <ArrowRight className="w-5 h-5" />
                <span className="font-medium">Participar Agora</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
