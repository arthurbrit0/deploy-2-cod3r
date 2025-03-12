"use client";

import Image from "next/image";
import React from "react";

interface Technology {
  nome: string;
  url: string;
}

interface TrackTechnologiesProps {
  technologies: Technology[];
}

export function TrackTechnologies({ technologies }: TrackTechnologiesProps) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <>
    <div className="bg-none text-center py-4 space-y-2">
        <h2 className="text-4xl font-bold">Tecnologias abordadas na área</h2>
        <p className="text-muted-foreground">Conheça as tecnologias que serão utilizadas nessa área da Formação</p>
    </div>
        <div className="flex flex-wrap max-w-5xl mx-auto gap-2 justify-center">
        {technologies.map((tech) => (
            <div
            key={tech.nome}
            className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors"
            >
            <Image
                src={tech.url}
                alt={`${tech.nome} logo`}
                className="object-contain"
                width={32}
                height={32}
                />
            <span className="text-md font-semibold">{tech.nome}</span>
            </div>
        ))}
        </div>
    </>
  );
}
