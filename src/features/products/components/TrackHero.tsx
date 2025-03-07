"use client";

import { motion } from "framer-motion";
import Container from "@/features/shared/layouts/Container";
import Image from "next/image";
import ButtonCTA from "@/features/shared/components/cta/ButtonCTA";

interface TrackHeroProps {
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
}

export function TrackHero({ 
  title, 
  description, 
  image, 
  videoUrl,
}: TrackHeroProps) {
  return (
    <div className="relative overflow-hidden bg-black min-h-[520px] pt-2 md:pb-8 pb-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(120,119,198,0.4),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_0%_400px,rgba(59,130,246,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_300px,rgba(79,70,229,0.3),transparent)]" />
      </div>
      <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')]" />
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[550px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            {videoUrl ? (
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src={videoUrl}
                  title={title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={image}
                  alt={title}
                  className="object-cover w-full h-full"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                {title}
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-white/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ButtonCTA />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
