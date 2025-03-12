import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twm } from "@/utils/tw";

export const CardWithCursor = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={twm("relative", className)}
    >
      <style>
        {`
          .cursor-wrapper * {
            cursor: none !important;
          }
          .cursor-wrapper a:hover,
          .cursor-wrapper button:hover {
            cursor: none !important;
          }
        `}
      </style>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="pointer-events-none fixed z-[9999]"
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              transform: "translate(-50%, -50%)"
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <div className="relative">
              {/* Main cursor shape */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="1"
                viewBox="0 0 16 16"
                className="h-6 w-6 text-sky-500 transform -rotate-[70deg] -translate-x-[12px] -translate-y-[10px] stroke-sky-600"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
            </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={twm(
        "cursor-wrapper transition-opacity duration-200",
        isHovered ? "opacity-100" : "opacity-100"
      )}>
        {children}
      </div>
    </div>
  );
};