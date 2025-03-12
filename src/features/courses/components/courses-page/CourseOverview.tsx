"use client";

import { Check } from "lucide-react";
import Title from "../../../shared/components/Title";

interface CourseOverviewProps {
  outcomes?: string[];
  technologies?: {
    name: string;
    color?: "default" | "primary" | "secondary" | "destructive" | "success";
  }[];
}

export default function CourseOverview({ 
  outcomes = [
    "Construa aplicações web modernas com React e Next.js",
    "Domine os conceitos de componentização e reatividade do React",
    "Implemente designs responsivos e acessíveis com Tailwind CSS",
    "Crie componentes reutilizáveis com Storybook",
    "Aprenda o conceito de hooks e context API",
    "Faça uma aplicação completa com autenticação e banco de dados",
  ]
}: CourseOverviewProps) {
  return (
    <div className="py-6">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex justify-center w-full">
          <Title
            main={[
              {
                value: "O que você ",
                gradient: true,
              },
              {
                value: "vai aprender",
              },
            ]}
            secondary="Tecnologias e conceitos abordados no curso"
          />
        </div>
      </div>

      <div className="mt-8 max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-4 items-center justify-center">
        {outcomes.map((outcome, index) => (
          <div key={index} className="flex items-start gap-3 group">
            <div className="flex-shrink-0 mt-1">
              <div className="h-5 w-5 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Check className="h-3 w-3 text-primary" />
              </div>
            </div>
            <p className="text-muted-foreground group-hover:text-foreground transition-colors">{outcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { CourseOverview }