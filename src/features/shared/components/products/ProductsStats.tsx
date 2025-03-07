"use client";

import React, { useState, useEffect } from "react";
import { getAllFormacaoDevTracks, getAllFormacaoDevCourses } from "@/services/formacaoDevServices";

import { Layers, Book, Film, Clock } from "lucide-react";

interface Stats {
  totalTracks: number;
  totalCourses: number;
  totalClasses: number;
  totalHours: number;
}

export default function ProductsStats() {
  const [stats, setStats] = useState<Stats>({
    totalTracks: 0,
    totalCourses: 0,
    totalClasses: 0,
    totalHours: 0,
  });

  useEffect(() => {
    async function loadData() {
      const allTracks = await getAllFormacaoDevTracks();
      const allCourses = await getAllFormacaoDevCourses();

      console.log("allTracks", allTracks);
      console.log("allCourses", allCourses);

      setStats({
        totalTracks: allTracks.length,
        totalCourses: allCourses.length,
        totalClasses: allCourses.reduce((acc, c) => acc + c.qtdeDeAulas, 0),
        totalHours: allCourses.reduce((acc, c) => acc + c.duracao, 0),
      });
    }
    loadData();
  }, []);

  const summaryItems = [
    {
      icon: Layers,
      valueKey: "totalTracks" as keyof Stats,
      label: "Trilhas",
      subtitle: "Especializadas por assunto",
    },
    {
      icon: Book,
      valueKey: "totalCourses" as keyof Stats,
      label: "Cursos",
      subtitle: "Independentes e progressivos",
    },
    {
      icon: Film,
      valueKey: "totalClasses" as keyof Stats,
      label: "Aulas",
      subtitle: "Nas principais tecnologias do mercado",
    },
    {
      icon: Clock,
      valueKey: "totalHours" as keyof Stats,
      label: "Horas",
      subtitle: "De vídeo-aulas",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center py-12">
      {summaryItems.map(({ icon: Icon, valueKey, label, subtitle }) => (
        <div key={label} className="flex flex-col items-center space-y-2">
          <Icon className="w-10 h-10 text-pink-400" />
          <h2 className="text-xl font-bold text-pink-400">
            +{stats[valueKey]} {label}
          </h2>
          <p className="text-gray-300">{subtitle}</p>
        </div>
      ))}
    </div>
  );
}
