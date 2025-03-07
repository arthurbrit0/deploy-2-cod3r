// testimonial-data.ts

import React from "react";

export interface TestimonialItem {
  quote: React.ReactNode;
  author: string;
  position: string;
  highlight?: boolean;
  // Grid placement
  rowStart: number;
  rowSpan: number;
  colStart: number;
  colSpan: number;
}

export const testimonialData: TestimonialItem[] = [
  {
    quote: (
      <>
        A formação dev transformou minha carreira. Com o projeto open source,
        aprendi na prática como desenvolver uma plataforma EAD do zero, com
        suporte real e mentorias incríveis.
      </>
    ),
    author: "João Silva",
    position: "Desenvolvedor Full Stack",
    highlight: false,
    rowStart: 1,
    rowSpan: 2,
    colStart: 1,
    colSpan: 1,
  },
  {
    quote:
      "O curso e o projeto me permitiram adquirir habilidades essenciais e aplicar técnicas modernas em um ambiente real de desenvolvimento.",
    author: "Mariana Costa",
    position: "Engenheira de Software",
    highlight: false,
    rowStart: 1,
    rowSpan: 1,
    colStart: 2,
    colSpan: 1,
  },
  {
    quote:
      "Aprendi a trabalhar com tecnologias de ponta e a colaborar em um projeto open source que impacta a comunidade.",
    author: "Carlos Oliveira",
    position: "Desenvolvedor Front-end",
    highlight: false,
    rowStart: 1,
    rowSpan: 1,
    colStart: 3,
    colSpan: 1,
  },
  {
    quote:
      "O suporte dos mentores foi fundamental para superar desafios e acelerar meu aprendizado.",
    author: "Ana Martins",
    position: "Estudante de Desenvolvimento",
    highlight: false,
    rowStart: 2,
    rowSpan: 1,
    colStart: 2,
    colSpan: 1,
  },
  {
    quote:
      "Participar do projeto open source foi uma experiência única que me preparou para o mercado, trabalhando em projetos reais de forma colaborativa.",
    author: "Ricardo Lima",
    position: "Líder de Projeto",
    highlight: true,
    rowStart: 2,
    rowSpan: 2,
    colStart: 3,
    colSpan: 1,
  },
  {
    quote:
      "A plataforma EAD foi desenvolvida do zero com muita dedicação e inovação, proporcionando um aprendizado prático e eficiente.",
    author: "Fernanda Almeida",
    position: "Coordenadora de Curso",
    highlight: false,
    rowStart: 3,
    rowSpan: 1,
    colStart: 1,
    colSpan: 1,
  },
  {
    quote:
      "O ambiente colaborativo e as mentorias personalizadas fizeram toda a diferença no meu desenvolvimento profissional.",
    author: "Eduardo Souza",
    position: "Desenvolvedor Back-end",
    highlight: false,
    rowStart: 3,
    rowSpan: 1,
    colStart: 2,
    colSpan: 1,
  },
];
