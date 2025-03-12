"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Image from "next/image";

export default function TechStack() {
  return (
    <section className="w-full py-16 md:py-32 bg-none text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 space-y-12">
        {/* Grupo Front-end */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Tecnologias front-end
            </h2>
            <p className="text-gray-400 mb-4 text-sm md:text-base">
              Utilizaremos as melhores tecnologias front-end para criar uma
              aplicação moderna e responsiva.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {FRONTEND_ICONS.map((icon, idx) => (
                <CanvasCard
                  key={idx}
                  title={icon.label}
                  icon={icon.icon}
                  revealEffectProps={{
                    animationSpeed: 3,
                    containerClassName: "bg-sky-600",
                    colors: [[125, 211, 252]],
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Grupo Back-end */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Tecnologias back-end
            </h2>
            <p className="text-gray-400 mb-4 text-sm md:text-base">
              Utilizaremos as melhores tecnologias back-end para criar uma
              aplicação escalável e segura.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {BACKEND_ICONS.map((icon, idx) => (
                <CanvasCard
                  key={idx}
                  title={icon.label}
                  icon={icon.icon}
                  revealEffectProps={{
                    animationSpeed: 3,
                    containerClassName: "bg-emerald-400",
                    colors: [
                      [0, 150, 136],
                      [64, 224, 208],
                    ],
                    dotSize: 3,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CanvasCardProps {
  readonly title: string;
  readonly icon: React.ReactNode;
  readonly revealEffectProps?: React.ComponentProps<typeof CanvasRevealEffect>;
}

function CanvasCard({ title, icon, revealEffectProps }: CanvasCardProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="relative border border-white/20 bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-4 sm:p-6 flex items-center justify-center h-48 sm:h-56 w-full group cursor-pointer overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <CanvasRevealEffect {...(revealEffectProps ?? {})} />
            <div className="absolute inset-0 [mask-image:radial-gradient(250px_at_center,white,transparent)] bg-black/50" />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="relative z-10 text-white"
        animate={{ y: hovered ? -8 : 0, opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      <motion.h3
        className="absolute z-20 font-bold text-center text-white opacity-0 text-sm sm:text-base"
        initial={{ y: 0 }}
        animate={{ y: hovered ? 0 : 10, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>
    </div>
  );
}

const FRONTEND_ICONS = [
  {
    label: "React",
    icon: (
      <Image src="/tech/react.svg" alt="React Icon" width={64} height={64} />
    ),
  },
  {
    label: "Next.js",
    icon: (
      <Image src="/tech/next.svg" alt="Next.js Icon" width={64} height={64} />
    ),
  },
  {
    label: "Tailwind CSS",
    icon: (
      <Image
        src="/tech/tailwind.svg"
        alt="Tailwind CSS Icon"
        width={64}
        height={64}
      />
    ),
  },
  {
    label: "TypeScript",
    icon: (
      <Image
        src="/tech/typescript.svg"
        alt="TypeScript Icon"
        width={64}
        height={64}
      />
    ),
  },
];

const BACKEND_ICONS = [
  {
    label: "TypeScript",
    icon: (
      <Image
        src="/tech/typescript.svg"
        alt="TypeScript Icon"
        width={64}
        height={64}
      />
    ),
  },
  {
    label: "Node.js",
    icon: (
      <Image src="/tech/node.svg" alt="Node.js Icon" width={64} height={64} />
    ),
  },
  {
    label: "Nest.js",
    icon: (
      <Image src="/tech/nest.svg" alt="Nest.js Icon" width={64} height={64} />
    ),
  },
  {
    label: "Firebase",
    icon: (
      <Image
        src="/tech/firebase.svg"
        alt="Firebase Icon"
        width={64}
        height={64}
      />
    ),
  },
];
