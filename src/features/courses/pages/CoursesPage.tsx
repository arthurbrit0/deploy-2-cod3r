"use client";

import { CourseHero } from "@/features/courses/components/courses-page/CourseHero";
import { CourseInstructor } from "@/features/courses/components/courses-page/CourseInstructor";
import { CourseCurriculum } from "@/features/courses/components/courses-page/CourseCurriculum";
import Header from "@/features/shared/components/header/Header";
import Footer from "@/features/shared/components/footer";
import Container from "@/features/shared/layouts/Container";
import { WhyLearn } from "@/features/courses/components/courses-page/CourseWhyLearn";
import { CoursePreview } from "@/features/courses/components/courses-page/CoursePreview";
import CourseOverview from "@/features/courses/components/courses-page/CourseOverview";
import CourseStats from "@/features/courses/components/courses-page/CourseStats";
import Faq from "@/features/shared/components/faq";
import { Projects } from "@/features/courses/components/projects";
import GradientCta from "@/features/shared/components/cta";
import Section from "@/features/shared/layouts/SectionWrapper";

interface LessonData {
  title: string;
  description: string;
  duration: string;
}

interface SectionData {
  title: string;
  description: string;
  duration: string;   
  lessonsCount: number;  
  sections: NestedSection[];
}

interface NestedSection {
  title: string;
  lessons: LessonData[];
}

interface PageProps {
  courseData: {
    title: string;
    description: string;
    image: string;
    duration: string;
    level: string;
    lessonsCount: number;
    curriculum: SectionData[];
  };
  trackStats: {
    trackName: string;
    qtdeDeCursos: number;
    qtdeDeAulas: number;
    duracao: number; 
  };
}

const projects = [
  {
    title: "Clone do Spotify",
    description:
      "Desenvolva um clone do Spotify com React, Tailwind e APIs de música. Aprenda sobre autenticação, gerenciamento de estado e integração com APIs externas.",
    image:
      "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1000&auto=format&fit=crop",
    technologies: [
      {
        name: "React",
        logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
      },
      {
        name: "Tailwind CSS",
        logo: "https://raw.githubusercontent.com/github/explore/261c2cda92d09ccad6f8b2dc91af32a2a5856989/topics/tailwind/tailwind.png",
      },
      {
        name: "TypeScript",
        logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
      },
    ],
    difficulty: "Intermediário" as const,
  },
  {
    title: "Sistema de E-commerce",
    description:
      "Crie uma loja virtual completa com carrinho de compras, pagamentos e painel administrativo. Aprenda sobre arquitetura de software e boas práticas.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    technologies: [
      {
        name: "Next.js",
        logo: "https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/nextjs/nextjs.png",
      },
      {
        name: "Prisma",
        logo: "https://www.prisma.io/images/favicon-32x32.png",
      },
      {
        name: "PostgreSQL",
        logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png",
      },
    ],
    difficulty: "Avançado" as const,
  },
  {
    title: "Todo App",
    description:
      "Desenvolva uma aplicação de lista de tarefas com recursos modernos como drag-and-drop, filtros e temas personalizados.",
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop",
    technologies: [
      {
        name: "React",
        logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
      },
      {
        name: "TypeScript",
        logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
      },
    ],
    difficulty: "Iniciante" as const,
  },
];

export default function TracksPage({ courseData, trackStats }: PageProps) {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <main className="pt-16">
        <CourseHero
          title={courseData.title}
          description={courseData.description}
          image={courseData.image}
        />
        <div className="bg-gradient-to-l from-pink-500 to-purple-500">
          <CourseStats
            productStats={{
              qtdeDeCursos: trackStats.qtdeDeCursos,
              qtdeDeAulas: trackStats.qtdeDeAulas,
              duracao: trackStats.duracao,
            }}
          />
        </div>
        <Container>
          <div className="py-8 sm:py-12 flex flex-col gap-8 sm:gap-12 ">
            <CourseOverview />
            <WhyLearn technology={courseData.title} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <aside className="block h-fit md:sticky top-24">
                <CoursePreview />
              </aside>
              <div className="min-h-[800px]">
                <CourseCurriculum curriculum={courseData.curriculum} />
              </div>
            </div>
            <div className="w-screen relative left-1/2 -translate-x-1/2">
              <Section backgroundUrl="/bg-depoimentos-2.svg " style={{backgroundPosition: 'bottom'}}>
                <Container>
                  <Projects projects={projects} />
                </Container>
              </Section>
            </div>
            <div className="bg-black p-8">
              <GradientCta />
            </div>
            <CourseInstructor />
            <Faq />
          </div>
        </Container>
        <Container>
          <div className="py-12">
            <Footer />
          </div>
        </Container>
      </main>
    </div>
  );
}
