"use client";

import Header from "@/features/shared/components/header/Header";
import Footer from "@/features/shared/components/footer";
import Container from "@/features/shared/layouts/Container";
import { Timeline } from "@/components/ui/timeline";
import { TrackHero } from "@/features/products/components/TrackHero";
import { TrackAudience } from "@/features/products/components/TrackAudience";
import { Card } from "@/components/ui/card";
import Button from "@/features/shared/components/Button";
import { TrackTechnologies } from "@/features/products/components/TrackTechnologies";
import { Clock, BookOpen, Video } from "lucide-react";
import { TrackStats } from "@/features/products/components/TrackStats";
import Image from "next/image";
import Cta from "@/features/shared/components/cta";
import Faq from "@/features/shared/components/faq";
import TestimonialCarousel from "@/features/checkout/components/TestimonialsCheckout";
import Section from "@/features/shared/layouts/SectionWrapper";
import TrackFeatures from "../components/TrackFeatures";

interface TrackData {
  id: string;
  title: string;
  description: string;
  image: string;
  tecnologias?: { nome: string; url: string }[];
  qtdeDeCursos: number;
  qtdeDeAulas: number;
  duracao: number;
}

interface MappedProduct {
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
  tracks: TrackData[];
  qtdeDeTrilhas?: number;
  qtdeDeCursos?: number;
  qtdeDeAulas?: number;
  duracao?: number;
}

export function ProductPageClient({ product }: { product: MappedProduct }) {
  const timelineData = product.tracks.map((track, index) => ({
    title: track.title,
    image: track.image,
    content: (
      <Card className="bg-gray-900 border-gray-800 w-full">
        <div className="p-6">
          <div className="flex md:flex-row flex-col items-stretch gap-8 min-h-[200px]">
            {/* Container da imagem sempre renderizado primeiro */}
            <div
              className={`flex-shrink-0 self-stretch flex items-center ${
                index % 2 === 1 ? "md:order-last" : ""
              }`}
            >
              <div className="h-full flex items-center bg-gray-800 rounded-lg p-4">
                <Image
                  src={track.image}
                  alt={track.title}
                  className="object-contain"
                  width={128}
                  height={128}
                />
              </div>
            </div>
  
            {/* Container do conteúdo */}
            <div
              className={`flex-1 flex flex-col ${
                index % 2 === 1 ? "md:order-first" : ""
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {track.title}
                </h3>
                <p className="text-gray-400 mb-4">{track.description}</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <BookOpen className="w-4 h-4" />
                    <span>{track.qtdeDeCursos} cursos</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Video className="w-4 h-4" />
                    <span>{track.qtdeDeAulas} aulas</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{Math.round(track.duracao / 3600)} horas</span>
                  </div>
                </div>
              </div>
  
              <div className="mt-auto">
                <a href={`${product.title.toLowerCase() + "-dev"}/trilhas/${track.id}`}>
                  <Button className="w-full group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    Ver trilha
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>
    ),
  }));
  

  const allTechnologies = product.tracks
    .flatMap((track) => track.tecnologias || [])
    .reduce((acc: { nome: string; url: string }[], tech) => {
      if (!acc.find((t) => t.nome === tech.nome)) {
        acc.push(tech);
      }
      return acc;
    }, []);

  const stats = {
    totalTracks: product.qtdeDeTrilhas || 0,
    totalCourses: product.qtdeDeCursos || 0,
    totalLessons: product.qtdeDeAulas || 0,
    totalDuration: product.duracao || 0,
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <TrackHero 
          title={product.title}
          description={product.description}
          image={product.image}
          videoUrl={product.videoUrl}
          />
          <Section backgroundUrl="/bg.svg" style={{backgroundPosition: 'top', paddingBottom: '100px'}}>
          <TrackStats stats={stats} />
            <Container className="py-12">
              <TrackTechnologies technologies={allTechnologies} />
            </Container>
          <TrackFeatures />
          </Section>
        <div
          style={{
            backgroundImage: "url('/bg-depoimentos-2.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}  
        >
          <Container className="py-16">
            <Timeline data={timelineData} />
          </Container>
        </div>
        <Section backgroundUrl="/bg-roxo-verde.svg" style={{backgroundPosition: 'center'}}>
          <TrackAudience />
          <TestimonialCarousel />
        </Section>
          <Cta />
        <Container>
          <Faq />
        </Container>
      </main>
      <Container className="py-16">
        <Footer />
      </Container>
    </div>
  );
}