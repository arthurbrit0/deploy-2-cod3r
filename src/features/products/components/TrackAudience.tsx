"use client";

import Container from "@/features/shared/layouts/Container";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, Code, Briefcase } from "lucide-react";
import { IconSwitch } from "@tabler/icons-react";
import { GridPattern } from "./TrackFeatures";

const audiences = [
  {
    icon: GraduationCap,
    title: "Iniciantes",
    description: [
      <>
        Aprenda os conceitos fundamentais de <strong className="text-purple-400">programação</strong> e desenvolvimento de maneira prática e acessível, mesmo sem nenhum conhecimento prévio.
      </>,
      <>
        Descubra como desenvolver seus próprios programas e aplicativos do <strong className="text-purple-400">zero</strong> com as principais tecnologias do mercado.
      </>
    ]
  },
  {
    icon: Code,
    title: "Estudantes de programação",
    description: [
      <>
        Revisite conceitos relacionados ao desenvolvimento de software e aprenda a integrar tecnologias utilizadas no mercado com <strong className="text-purple-400">projetos reais</strong>.
      </>,
      <>
        Eleve suas habilidades com desafios que estimulam seu <strong className="text-purple-400">crescimento</strong> profissional.
      </>
    ]
  },
  {
    icon: Briefcase,
    title: "Profissionais de desenvolvimento",
    description: [
      <>
        Aprofunde seus conhecimentos em <strong className="text-purple-400">programação</strong>, frameworks e práticas de <strong className="text-purple-400">arquitetura</strong> de software.
      </>,
      <>
        Explore tópicos do <strong className="text-purple-400">frontend</strong> ao <strong className="text-purple-400">backend</strong> para se manter atualizado com as tecnologias do mercado.
      </>
    ]
  },
  {
    icon: IconSwitch,
    title: "Profissionais em transição de carreira",
    description: [
      <>
        Adquira os fundamentos necessários para iniciar uma nova carreira em tecnologia mesmo sem experiência prévia, com foco em <strong className="text-purple-400">aprendizado prático</strong>.
      </>,
      <>
        Conheça histórias de sucesso de alunos que já migraram para a área de <strong className="text-purple-400">programação</strong>.
      </>
    ]
  }
];

export function TrackAudience() {
  return (
    <section className="pt-32 pb-16 max-w-5xl mx-auto">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Para quem é a Formação?</h2>
          <p className="text-gray-400">
            Desenvolvemos a Formação DEV para atingir os mais diferentes níveis de profissionais.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
                viewport={{ once: true }}
              >
              <Card className="relative bg-zinc-950 border-zinc-800 p-6 hover:border-purple-500/50 transition-colors h-full flex flex-col">
                <div className="absolute inset-0 overflow-hidden rounded-3xl [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
                  <GridPattern />
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_500px_at_50%_-100px,rgba(30,30,30,0.9)_0%,rgba(60,60,60,0)_70%)]" />
                  <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_700px_at_0%_400px,rgba(20,20,20,0.9)_0%,rgba(50,50,50,0)_70%)]" />
                  <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_800px_at_100%_300px,rgba(10,10,10,0.9)_0%,rgba(40,40,40,0)_70%)]" />
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{audience.title}</h3>
                </div>
                <ul className="relative z-10 text-gray-300 list-disc space-y-4 list-inside flex-1">
                  {audience.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
