"use client";

import { useState } from "react";
import Image from "next/image";
import ButtonCTA from "@/features/shared/components/cta/ButtonCTA";

type TabLayout = "left" | "right";

interface TabItem {
  id: number;
  label: string;
  title: string;
  description: string;
  imgSrc: string;
  layout: TabLayout;
}

export default function TrackFeatures() {
  const tabsData: TabItem[] = [
    {
      id: 1,
      label: "Plataforma",
      title: "Plataforma simples e intuitiva",
      description:
        "Suas conquistas e dados de evolução são exibidos de maneira clara, facilitando o acompanhamento do seu progresso.",
      imgSrc: "/team/leo.png",
      layout: "left",
    },
    {
      id: 2,
      label: "Suporte",
      title: "Suporte especializado",
      description:
        "Você conta com recursos exclusivos para gerenciar seus estudos, receber feedbacks e melhorar seu desempenho.",
      imgSrc: "/team/leo.png",
      layout: "right",
    },
    {
      id: 3,
      label: "Mentorias",
      title: "Mentorias exclusivas",
      description:
        "Acesso a conteúdos detalhados que vão te ajudar a resolver problemas reais e avançar no aprendizado.",
      imgSrc: "/team/leo.png",
      layout: "left",
    },
    {
      id: 4,
      label: "Certificados",
      title: "Certificados reconhecidos",
      description:
        "Ao concluir cada módulo, você recebe um certificado para comprovar suas habilidades no mercado de trabalho.",
      imgSrc: "/team/leo.png",
      layout: "right",
    },
    {
      id: 5,
      label: "Garantia",
      title: "Garantia de satisfação",
      description:
        "Ao concluir cada módulo, você recebe um certificado para comprovar suas habilidades no mercado de trabalho.",
      imgSrc: "/team/leo.png",
      layout: "left",
    },
  ];

  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="mx-auto max-w-5xl pt-24">
      <div className="text-center py-8 space-y-2">
        <h2 className="text-4xl font-bold">
          Como funciona a{" "}
          <span className="text-transparent bg-gradient-to-l from-purple-500 to-pink-400 bg-clip-text">
            Formação DEV?
          </span>
        </h2>
        <p className="text-muted-foreground">
          A Formação dispõe de diversos recursos que ajudarão a sua jornada
          dentro da programação
        </p>
      </div>

      <div className="flex justify-center mb-8">
        {tabsData.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={`
              px-4 py-2 border-b-2 font-medium transition-colors duration-300
              ${
                activeTab === index
                  ? "border-purple-500 text-purple-500"
                  : "border-transparent text-gray-400 hover:text-purple-500"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative min-h-[500px] bg-zinc-950 border border-zinc-800 rounded-3xl shadow">
        <div className="absolute inset-0 overflow-hidden rounded-3xl [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <GridPattern />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_500px_at_50%_-100px,rgba(30,30,30,0.9)_0%,rgba(60,60,60,0)_70%)]" />
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_700px_at_0%_400px,rgba(20,20,20,0.9)_0%,rgba(50,50,50,0)_70%)]" />
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_800px_at_100%_300px,rgba(10,10,10,0.9)_0%,rgba(40,40,40,0)_70%)]" />
        </div>

        <div className="absolute inset-0 opacity-30 rounded-3xl bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVFdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')]" />

        {tabsData.map((tab, index) => {
          const isActive = activeTab === index;
          return (
            <div
              key={tab.id}
              className={`absolute inset-0 flex flex-col transition-all duration-300 ease-in-out
                ${
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }
                ${tab.layout === "right" ? "md:flex-row-reverse" : "md:flex-row"}
              `}
              style={{ willChange: "opacity, transform" }}
            >
              <div className="md:w-1/2 px-4 md:px-20 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-100">
                  {tab.title}
                </h2>
                <p className="text-gray-300 mb-6">{tab.description}</p>
                <ButtonCTA />
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
                <div className="w-full max-w-md">
                  <Image
                    src={tab.imgSrc}
                    alt={tab.label}
                    width={400}
                    height={300}
                    className="rounded-2xl shadow object-contain"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function GridPattern() {
  const columns = 41;
  const rows = 11;

  return (
    <div className="flex bg-gray-100 dark:bg-gray-950 shrink-0 flex-wrap justify-center items-center w-full h-full">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          return (
            <div
              key={`${col}-${row}`}
              className={`w-10 h-10 flex shrink-0 rounded-[2px] ${
                index % 2 === 0
                  ? "bg-gray-50 dark:bg-gray-950"
                  : "bg-gray-50 dark:bg-gray-950 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
              }`}
            />
          );
        })
      )}
    </div>
  );
}
