"use client"

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Container from "@/features/shared/layouts/Container";

interface Testimonial {
  id: number;
  text: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac urna sed massa.",
    name: "John Doe",
  },
  {
    id: 2,
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
    name: "Jane Smith",
  },
  {
    id: 3,
    text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Mark Wilson",
  },
  {
    id: 4,
    text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Mark Wilson",
  },
  {
    id: 5,
    text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Mark Wilson",
  },
  {
    id: 6,
    text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Mark Wilson",
  },
  {
    id: 7,
    text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Mark Wilson",
  },
  {
    id: 8,
    text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Mark Wilson",
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const slidesCount = 3;

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesCount);
    }, 6000);
    return () => clearInterval(interval);
  }, [slidesCount]);

  return (
    <section ref={containerRef} className="overflow-hidden relative w-full py-24 space-y-4">
      <h2 className="font-bold text-3xl text-center">
        Se junte aos mais de <span className="text-purple-400">5000</span> alunos da Formação DEV!
      </h2>
      <Container>

      <motion.div
        className="flex"
        animate={{ x: -currentIndex * containerWidth }}
        transition={{ duration: 3, ease: "easeInOut" }}
        >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex-none w-1/2 mx-auto p-4">
            <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
              <p className="text-lg italic">{testimonial.text}</p>
              <h3 className="mt-4 text-right font-bold">- {testimonial.name}</h3>
            </div>
          </div>
        ))}
      </motion.div>
        </Container>
    </section>
  );
};

export default TestimonialCarousel;
