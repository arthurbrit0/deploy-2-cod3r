"use client";

import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { fromSeconds } from "@/utils/duration";
import { BookIcon, Clock, FileTextIcon } from "lucide-react";

interface CourseStatsProps {
  productStats: {
    qtdeDeCursos: number;
    qtdeDeAulas: number;
    duracao: number; 
  };
}

export default function CourseStats({ productStats }: CourseStatsProps) {
  const totalHoras = fromSeconds(productStats.duracao);

  const items = [
    {
      quantity: productStats.qtdeDeCursos,  
      title: "Cursos",
      description: "Disponíveis",         
      icon: <BookIcon className="w-5 h-5" />,
    },
    {
      quantity: productStats.qtdeDeAulas,
      title: "Aulas",
      description: "Completas",
      icon: <FileTextIcon className="w-5 h-5" />,
    },
    {
      quantity: totalHoras,                 
      title: "Duração",
      description: "de conteúdo",
      icon: <Clock className="w-5 h-5" />,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={items} />
    </div>
  );
}
