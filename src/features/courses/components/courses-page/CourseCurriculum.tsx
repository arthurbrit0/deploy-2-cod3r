"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock } from "lucide-react";
import Title from "../../../shared/components/Title";

interface LessonData {
  title: string;
  description: string;
  duration: string;
}

interface NestedSection {
  title: string;
  lessons: LessonData[];
}

export interface SectionData {
  title: string;
  description: string;
  duration: string;     
  lessonsCount: number;  
  sections: NestedSection[];
}

interface CourseCurriculumProps {
  curriculum: SectionData[];
}

export function CourseCurriculum({ curriculum }: CourseCurriculumProps) {
  return (
    <div className="transition-all duration-300 space-y-12">
      <div>
        <Title
          main={[
            { value: "Cursos ", gradient: true },
            { value: "desta trilha" },
          ]}
          secondary="Siga a ordem recomendada para melhor aproveitamento do conteúdo"
        />
      </div>
      <Accordion type="multiple" className="space-y-4">
        {curriculum.map((sectionData, i) => (
          <AccordionItem
            key={i}
            value={sectionData.title}
            className="bg-gradient-to-b from-zinc-950 to-black rounded-2xl border border-slate-900/90 px-6 overflow-hidden transition-all duration-300"
          >
            <AccordionTrigger className="py-4 hover:no-underline group transition-all duration-200">
              <div className="flex flex-col items-start gap-1">
                <h3 className="text-xl font-semibold text-primary transition-colors duration-200">
                  {sectionData.title}
                </h3>
                <div className="text-sm text-muted-foreground flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-primary" />
                    {sectionData.duration}
                  </div>
                  <span className="text-gray-500">•</span>
                  <span>{sectionData.lessonsCount} aulas</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="transition-all duration-300 ease-in-out py-4">
              <p className="text-sm text-muted-foreground">
                {sectionData.description}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
