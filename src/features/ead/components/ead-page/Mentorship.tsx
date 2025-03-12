"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Mentorias ao vivo",
    description: "Participe de mentorias ao vivo para tirar suas dúvidas",
    image: "/images/logs.png",
  },
  {
    title: "Comunidade ativa",
    description:
      "Participe de uma comunidade ativa e engajada de desenvolvedores",
    image: "/images/commands.png",
  },
  {
    title: "Suporte ativo",
    description: "Suporte ativo para te ajudar a resolver seus problemas",
    image: "/images/metrics.png",
  },
];

export default function EverythingYouNeed() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ top: 0, height: 0 });
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current && itemRefs.current[activeIndex]) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const activeItemRect = itemRefs.current[activeIndex]!.getBoundingClientRect();
      setIndicator({
        top: activeItemRect.top - containerRect.top,
        height: activeItemRect.height,
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, [containerRef, features]);

  return (
    <section className="py-16 bg-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Nós te ajudaremos a desenvolver o projeto
        </h2>
        <p className="mt-2 text-gray-300 max-w-2xl">
          Acompanhamento personalizado com especialistas para te ajudar a
          desenvolver o projeto do início ao fim.
        </p>
        {/* Added items-center to vertically center both columns */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="relative flex flex-col justify-center">
            <div
              className="absolute left-0 top-0 w-0.5 bg-gray-300"
              style={{ height: containerHeight }}
            />
            <motion.div
              className="absolute left-0 w-0.5 bg-emerald-500"
              animate={{ top: indicator.top, height: indicator.height }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <ul ref={containerRef} className="space-y-6 pl-6">
              {features.map((feature, idx) => (
                <li key={feature.title} ref={(el) => {(itemRefs.current[idx] = el)}}>
                  <button
                    onClick={() => setActiveIndex(idx)}
                    className="text-left w-full"
                  >
                    <h3 className="text-3xl font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-400 mt-1">
                      {feature.description}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-50 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={features[activeIndex].title}
                  src={features[activeIndex].image}
                  alt={features[activeIndex].title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
