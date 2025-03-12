"use client";

import { motion } from "framer-motion";
import Container from "@/features/shared/layouts/Container";
import { CheckCircle2, BookOpen, Video, Clock } from "lucide-react";

interface TrackStatsProps {
  stats: {
    totalTracks: number;
    totalCourses: number;
    totalLessons: number;
    totalDuration: number;
  };
}

export function TrackStats({ stats }: TrackStatsProps) {
  const totalHours = Math.round(stats.totalDuration / 3600);

  const statsCards = [
    {
      icon: CheckCircle2,
      value: stats.totalTracks,
      label: "Total de trilhas",
      color: "text-emerald-500",
      iconBg: "bg-emerald-500/10",
    },
    {
      icon: Video,
      value: stats.totalLessons,
      label: "Total de aulas",
      color: "text-blue-500",
      iconBg: "bg-blue-500/10",
    },
    {
      icon: Clock,
      value: `${totalHours}h`,
      label: "Total de horas",
      color: "text-amber-500",
      iconBg: "bg-amber-500/10",
    },
    {
      icon: BookOpen,
      value: stats.totalCourses,
      label: "Total de cursos",
      color: "text-purple-500",
      iconBg: "bg-purple-500/10",
    },
  ];

  return (
    <div className="relative -mt-16 mb-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsCards.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-gray-900 border border-slate-800 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm text-gray-400">{stat.label}</h3>
                  <div className={`p-2 rounded-lg ${stat.iconBg}`}>
                    <stat.icon className={`w-25 h-25 ${stat.color}`} />
                  </div>
                </div>
                <div className="flex items-baseline">
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}   