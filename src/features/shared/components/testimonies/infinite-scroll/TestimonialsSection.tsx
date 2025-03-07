"use client";

import React from "react";
import { InfiniteMovingCards } from "../../../../../components/ui/infinite-moving-cards";
import { Badge } from "../../../../../components/ui/badge";

export function TestimonialsSection() {
  return (
    <div className="space-y-0 bg-gradient-to-l from-pink-600 to-purple-600 pt-4">  
        <div className="justify-center text-center mt-6 space-y-3">
            <Badge className="mb-2">
                <span className="text-zinc-700 font-bold text-md">DEPOIMENTOS</span>
            </Badge>
            <h2 className="text-2xl md:text-4xl font-bold">O que nossos <span className="text-white">alunos falam</span></h2>
            <p className="text-sm md:w-full w-2/3 mx-auto md:text-lg">Configura alguns dos depoimentos dos alunos da Cod3r!</p>
        </div>
        <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
        />
        </div>
    </div>
  );
}
const testimonials = [
    {
      quote:
        "O curso de programação da Cod3r foi transformador. Com aulas práticas e conteúdos atualizados, consegui dar um salto na minha carreira e enfrentar desafios com confiança.",
      name: "Carlos Souza",
      title: "Desenvolvedor Full Stack",
      img: "/team/leo.png"
    },
    {
      quote:
        "Aprender a programar nunca foi tão envolvente. A metodologia da Cod3r me proporcionou uma experiência completa e motivadora para ingressar no mundo da tecnologia.",
      name: "Mariana Silva",
      title: "Engenheira de Software",
      img: "/team/leo.png"
    },
    {
      quote:
        "A didática dos instrutores e o suporte constante da comunidade Cod3r fizeram toda a diferença. Hoje, me sinto preparado para encarar os desafios do mercado de TI.",
      name: "Pedro Gomes",
      title: "Programador Front-End",
      img: "/team/leo.png"
    },
    {
      quote:
        "O curso da Cod3r não é apenas sobre aprender a programar – é sobre transformar ideias em soluções reais. Recomendo para todos que querem inovar na área de tecnologia.",
      name: "Ana Clara",
      title: "Desenvolvedora Web",
      img: "/team/leo.png"
    },
    {
      quote:
        "Com a Cod3r, adquiri não só conhecimento técnico, mas também a confiança para transformar desafios em oportunidades. Minha carreira em tecnologia deu um salto incrível!",
      name: "Lucas Almeida",
      title: "Tech Enthusiast",
      img: "/team/leo.png"
    },
  ];
  
