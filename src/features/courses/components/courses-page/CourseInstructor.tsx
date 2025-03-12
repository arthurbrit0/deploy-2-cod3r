"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Title from "../../../shared/components/Title";
import Image from "next/image";

interface Instructor {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    github?: string;
  };
}

const instructors: Instructor[] = [
  {
    name: "Leonardo Leitão",
    role: "CTP da Cod3r Ensino e Consultoria",
    bio: "Mestre em Informática Aplicada e fundador da Cod3r, já treinou mais de 420.000 alunos. São mais de 16 anos como professor. Há 20 anos atua na área como desenvolvedor de softwares e trabalhou como arquiteto de software em grandes projetos para o Governo Federal.",
    image: "/team/leo.png",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Letícia Garcez",
    role: "Engenheira de Computação",
    bio: "Engenheira de Computação graduada pela Universidade Federal de Pelotas. Atualmente atua como professora na Cod3r, é embaixadora do programa Women Techmakers e co-organizadora do GDG Pelotas e palestrante.",
    image: "/team/leticia.png",
    social: {
      linkedin: "#",
      github: "#"
    }
  }
];

export function CourseInstructor() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative w-full dark:bg-gray-900 bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative z-10 p-6 sm:p-8 md:p-12">
            <Title
              main={[
                {
                  value: 'Aprenda com',
                  gradient: true,
                },
                {
                  value: 'especialistas',
                },
              ]}
              secondary="Conheça os instrutores que irão guiar sua jornada de aprendizado"
            />
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {instructors.map((instructor, index) => (
                <motion.div
                  key={instructor.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="h-full"
                >
                  <div className="group relative h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-200 blur" />
                    <div className="relative bg-card border bg-gray-950 rounded-2xl p-6 h-full flex flex-col">
                      <div className="flex items-start gap-6">
                        <div className="relative flex-shrink-0">
                          <div className="w-32 h-32 rounded-xl overflow-hidden">
                            <Image
                              src={instructor.image}
                              alt={instructor.name}
                              className="w-full h-full object-cover"
                              fill
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <h3 className="text-2xl font-bold">{instructor.name}</h3>
                          <p className="text-muted-foreground">{instructor.role}</p>
                          
                          <div className="flex gap-2 pt-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              asChild
                            >
                              <a href={instructor.social.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-4 w-4" />
                              </a>
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              asChild
                            >
                              <a href={instructor.social.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mt-6">
                        {instructor.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}