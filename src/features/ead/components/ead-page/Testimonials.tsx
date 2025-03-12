"use client";

import React from "react";
import { testimonialData, TestimonialItem } from "./testimonials-data";

// Mapeamentos para garantir que o Tailwind compile as classes necessárias
// (todos prefixados com "md:" para só aplicarem no breakpoint "md" e acima).
const rowStartMapping: Record<number, string> = {
  1: "md:row-start-1",
  2: "md:row-start-2",
  3: "md:row-start-3",
};

const rowSpanMapping: Record<number, string> = {
  1: "md:row-span-1",
  2: "md:row-span-2",
  3: "md:row-span-3",
};

const colStartMapping: Record<number, string> = {
  1: "md:col-start-1",
  2: "md:col-start-2",
  3: "md:col-start-3",
};

const colSpanMapping: Record<number, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
};

export default function TestimonialsExactLayout() {
  return (
    <section className="py-32 bg-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Confira o depoimento de alguns participantes do projeto
        </h2>
        <p className="text-lg mt-2 text-gray-300 max-w-3xl">
          Veja o que os participantes do projeto têm a dizer sobre a experiência
          de participação no desenvolvimento da plataforma EAD!
        </p>

        {/*
          No mobile, 1 coluna => tudo empilhado
          Em telas md: 3 colunas e 3 linhas => aplicação do layout customizado
        */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 relative">
          {testimonialData.map((item) => (
            <TestimonialCard key={item.author} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  const {
    quote,
    author,
    position,
    highlight,
    rowStart,
    rowSpan,
    colStart,
    colSpan,
  } = item;

  // Monta as classes de grid, mas com prefixo "md:" para só valer no desktop
  const gridClasses = `
    ${rowStartMapping[rowStart]}
    ${rowSpanMapping[rowSpan]}
    ${colStartMapping[colStart]}
    ${colSpanMapping[colSpan]}
  `.trim();

  // O primeiro card grande (highlight) é forçado a ser destacado
  const isFirstLargeCard = rowStart === 1 && rowSpan === 2 && colStart === 1;
  const effectiveHighlight = isFirstLargeCard ? true : highlight;
  const quoteTextClass = effectiveHighlight ? "text-xl" : "text-lg";

  let baseClasses = `p-6 rounded-xl shadow flex flex-col transition-colors ${gridClasses} `;
  if (effectiveHighlight) {
    baseClasses +=
      "bg-gradient-to-r from-emerald-400/40 via-cyan-400/40 to-blue-400/40 border border-emerald-400/20 text-white";
  } else {
    baseClasses += "bg-[#0d1117] border-slate-800 border text-white";
  }

  return (
    <div className={baseClasses}>
      <p className={`${quoteTextClass} leading-relaxed`}>
        <em>“{quote}”</em>
      </p>
      <div className="mt-4">
        <h4 className="font-semibold text-sm sm:text-base">{author}</h4>
        <p
          className={`text-xs sm:text-sm ${
            effectiveHighlight ? "text-purple-100/90" : "text-gray-500"
          }`}
        >
          {position}
        </p>
      </div>
    </div>
  );
}
