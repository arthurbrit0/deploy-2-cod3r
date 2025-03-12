"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, BarChart2 } from "lucide-react";
import Title from "../../../shared/components/Title";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: Array<{
    name: string;
    logo: string;
  }>;
  difficulty: "Iniciante" | "Intermediário" | "Avançado";
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const [active, setActive] = React.useState(0);

  const handleNext = React.useCallback(() => {
    setActive((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const handlePrev = React.useCallback(() => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const isActive = (index: number) => index === active;

  React.useEffect(() => {
    const interval = setInterval(handleNext, 10000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  const getDifficultyLevel = (difficulty: Project["difficulty"]) => {
    switch (difficulty) {
      case "Iniciante":
        return { bars: 1, color: "emerald" };
      case "Intermediário":
        return { bars: 2, color: "yellow" };
      case "Avançado":
        return { bars: 3, color: "red" };
    }
  };

  if (!projects.length) return null;

  return (
    <div className="py-20 relative overflow-hidden bg-none">
      <Title
        main={[
          {
            value: "Projetos que você vai",
          },
          {
            value: "construir",
            gradient: true,
          },
        ]}
        secondary="Aprenda na prática construindo projetos do mundo real"
      />

      <div className="max-w-6xl mx-auto px-4 mt-12">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
          <div className="relative h-[300px] md:h-[500px] w-full order-1 md:order-none">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={project.image}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 999 : projects.length + 2 - index,
                    y: isActive(index) ? [0, -40, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="relative h-full w-full rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-center"
                      fill
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex justify-center flex-col gap-8 order-2 md:order-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="relative"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg
                      bg-${getDifficultyLevel(projects[active].difficulty).color}-500/10
                      text-${getDifficultyLevel(projects[active].difficulty).color}-500
                    `}
                  >
                    <BarChart2 className="w-4 h-4" />
                    <div className="flex gap-0.5">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`
                            w-2 h-4 rounded-sm
                            ${
                              i < getDifficultyLevel(projects[active].difficulty).bars
                                ? `bg-${getDifficultyLevel(projects[active].difficulty).color}-500`
                                : `bg-${getDifficultyLevel(projects[active].difficulty).color}-500/30`
                            }
                          `}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium ml-1">
                      {projects[active].difficulty}
                    </span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  {projects[active].title}
                </h3>

                <motion.p className="text-lg text-gray-400 mb-8">
                  {projects[active].description.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>

                <div className="flex flex-wrap gap-4">
                  {projects[active].technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="relative flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-xl"
                    >
                      <div className="relative w-5 h-5">
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="h-10 w-10 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center group transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:-translate-x-0.5 transition-all" />
              </button>
              <button
                onClick={handleNext}
                className="h-10 w-10 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center group transition-colors"
              >
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
