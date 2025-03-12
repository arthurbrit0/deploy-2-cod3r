"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Title from "../../features/shared/components/Title";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-none" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <Title
          main={[
            {
              value: "Trilhas desta",
            },
            {
              value: "área",
              gradient: true,
            },
          ]}
          secondary="Siga a ordem recomendada para melhor aproveitamento do conteúdo"
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        <div
          className="
            absolute top-0 h-full w-[2px] z-0
            left-[11px]
            md:left-1/2
            md:-translate-x-1/2
          "
        >
          <div className="h-full w-full bg-gradient-to-b from-transparent via-gray-800 to-transparent relative">
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent"
            />
          </div>
        </div>
        <div className="relative z-10">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center mb-20"
            >
              <div
                className="
                  grid
                  w-full
                  items-start
                  gap-8
                  grid-cols-[auto,1fr]
                  md:grid-cols-[1fr,auto,1fr]
                "
              >
                <div
                  className="
                    relative w-6 h-full flex items-center justify-center
                    row-start-1 col-start-1
                    md:col-start-2
                  "
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg" />
                </div>
                <div
                  className={`
                    hidden md:block md:row-start-1 md:col-start-1
                    ${index % 2 === 0 ? "pr-8" : "opacity-0 pointer-events-none"}
                  `}
                >
                  <div className="w-full max-w-lg ml-auto">
                    {index % 2 === 0 && item.content}
                  </div>
                </div>
                <div
                  className={`
                    row-start-1 col-start-2
                    md:row-start-1 md:col-start-3
                    ${index % 2 === 1 ? "pl-0 md:pl-8" : "pl-0 md:pl-8 md:opacity-0 md:pointer-events-none"}
                  `}
                >
                  <div className="w-full max-w-lg">
                    {index % 2 === 1 ? item.content : (
                      <div className="block md:hidden">
                        {item.content}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
