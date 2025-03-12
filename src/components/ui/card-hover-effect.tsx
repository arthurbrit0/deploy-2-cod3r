import { twm } from "@/utils/tw";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    quantity: number | string;
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={twm(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="
            relative group block p-2 
            h-full w-full
          "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="
                  absolute inset-0 
                  h-full w-full 
                  bg-neutral-200 
                  dark:bg-white/[0.2]
                  block 
                  rounded-3xl
                "
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex flex-col items-center justify-center h-full gap-2">
              <div className="flex items-center gap-2">
                {item.icon && <span className="text-white">{item.icon}</span>}

                <span
                  className="
                    text-xl font-bold 
                    text-slate-100
                  "
                >
                  {item.quantity}
                </span>

                <CardTitle className="text-xl">{item.title}</CardTitle>
              </div>

              <CardDescription className="text-center">
                {item.description}
              </CardDescription>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={twm(
        "rounded-2xl h-full w-full p-6 overflow-hidden bg-gradient-to-b from-black to-black/80 border border-slate-400 dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      {/* 
        Mantemos h-full para
        todo o conteúdo ficar centralizado.
      */}
      <div className="relative z-50 h-full">{children}</div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={twm("text-zinc-100 font-bold tracking-wide", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={twm(
        "text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
