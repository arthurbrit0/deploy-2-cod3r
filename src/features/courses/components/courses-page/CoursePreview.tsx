"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Title from "@/features/shared/components/Title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

interface PreviewLesson {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  description: string;
  fullDescription?: string;
  topics?: string[];
}

const previewLessons: PreviewLesson[] = [
  {
    id: "intro",
    title: "Introdução ao Desenvolvimento Web",
    duration: "15:30",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    description: "Aprenda os conceitos fundamentais de desenvolvimento web.",
    fullDescription: "Nesta aula, você vai aprender os conceitos fundamentais de desenvolvimento web, incluindo a arquitetura cliente-servidor, o funcionamento dos navegadores e a diferença entre frontend e backend.",
    topics: [
      "Arquitetura Cliente-Servidor",
      "Navegadores e Como Funcionam",
      "Introdução ao Frontend e Backend",
      "O que é HTML, CSS e JavaScript",
      "Principais Tecnologias Web"
    ]
  },
  {
    id: "setup",
    title: "Configurando seu Ambiente de Desenvolvimento",
    duration: "12:45",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    description: "Aprenda a configurar um ambiente de desenvolvimento eficiente.",
    fullDescription: "Nesta aula, você vai aprender a configurar um ambiente de desenvolvimento eficiente, incluindo a instalação do Visual Studio Code, extensões essenciais, configuração do Git, noções básicas de linha de comando e instalação do Node.js.",
    topics: [
      "Instalação do Visual Studio Code",
      "Extensões Essenciais para Desenvolvimento Web",
      "Configuração do Git e GitHub",
      "Noções Básicas de Linha de Comando",
      "Instalação do Node.js"
    ]
  },
  {
    id: "html-css",
    title: "HTML e CSS para Iniciantes",
    duration: "20:15",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80",
    description: "Aprenda a estruturar conteúdo web e estilizá-lo com CSS.",
    fullDescription: "Nesta aula, você vai aprender a estruturar conteúdo web com HTML e estilizá-lo com CSS. Vamos abordar os principais conceitos de HTML, tags essenciais, seletores e propriedades de CSS, layout com Flexbox e Grid e princípios de design responsivo.",
    topics: [
      "Introdução ao HTML e CSS",
      "Tags e Estruturação de Conteúdo",
      "Seletores e Propriedades de CSS",
      "Layout com Flexbox e Grid",
      "Design Responsivo"
    ]
  }
];

const PreviewCard = ({ 
  title, 
  duration, 
  thumbnail, 
  description,
  onClick 
}: PreviewLesson & { onClick: () => void }) => {
  return (
    <div 
      className="bg-gradient-to-b from-zinc-900 to-black border border-gray-800 rounded-xl overflow-hidden h-full cursor-pointer transition-transform hover:scale-[1.02]"
      onClick={onClick}
    >
      <div className="relative aspect-video">
        <Image
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Button 
            className="w-16 h-16 rounded-full shadow-lg bg-gradient-to-r from-pink-500 to-blue-800 text-white hover:scale-105 transition-all duration-200"
          >
            <Play className="w-8 h-8" />
          </Button>
        </div>
        <div className="absolute bottom-3 right-3 px-2.5 py-1.5 bg-black/70 backdrop-blur-sm rounded-md text-xs font-medium">
          {duration}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

const ExpandedPreview = ({ title, duration, thumbnail, fullDescription, topics }: PreviewLesson) => {
  return (
    <div className="space-y-6">
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Button 
            className="w-20 h-20 rounded-full shadow-lg bg-gradient-to-r from-pink-500 to-blue-800 text-white hover:scale-105 transition-all duration-200"
          >
            <Play className="w-10 h-10" />
          </Button>
        </div>
        <div className="absolute bottom-4 right-4 px-3 py-2 bg-black/70 backdrop-blur-sm rounded-md text-sm font-medium">
          {duration}
        </div>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-muted-foreground">{fullDescription}</p>
        
        <div className="space-y-2">
          <h3 className="font-semibold">O que você vai aprender:</h3>
          <ul className="space-y-2">
            {topics?.map((topic, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export function CoursePreview() {
  const [selectedLesson, setSelectedLesson] = useState<PreviewLesson | null>(null);

  return (
    <div>
      <Title
        main={[
          {
            value: "Aulas de",
            gradient: true,
          },
          {
            value: "demonstração",
          },
        ]}
        secondary="Confira algumas aulas do curso"
      />

      <div className="mt-12">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-3xl mx-auto"
        >
          <CarouselContent>
            {previewLessons.map((lesson) => (
              <CarouselItem key={lesson.id}>
                <div className="p-1">
                  <PreviewCard 
                    {...lesson} 
                    onClick={() => setSelectedLesson(lesson)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="static text-primary" />
            <CarouselNext className="static text-primary" />
          </div>
        </Carousel>
      </div>

      <Dialog open={!!selectedLesson} onOpenChange={() => setSelectedLesson(null)}>
        <DialogContent className="max-w-3xl">
          {selectedLesson && <ExpandedPreview {...selectedLesson} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}