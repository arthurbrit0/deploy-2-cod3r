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
        Aprenda conceitos fundamentais de <strong className="text-purple-400 font-bold">programação</strong> e desenvolvimento de maneira <span className="italic">prática e acessível</span>.
      </>,
    ]
  },
  {
    icon: Code,
    title: "Estudantes de programação",
    description: [
      <>
        Aprofunde seus conhecimentos integrando as <span className="italic">principais tecnologias</span> e se prepare para o <strong className="text-purple-400 font-bold">mercado</strong>.
      </>
    ]
  },
  {
    icon: Briefcase,
    title: "Profissionais de desenvolvimento",
    description: [
      <>
        Em nível <strong className="text-purple-400 font-bold">estratégico e profissional</strong>, explore questões cruciais para o desenvolvimento de <span className="italic">sistemas robustos</span>.
      </>
    ]
  },
  {
    icon: IconSwitch,
    title: "Profissionais em transição de carreira",
    description: [
      <>
        Adquira os <span className="italic">fundamentos necessários</span> para iniciar uma <strong className="text-purple-400 font-bold">nova carreira</strong> mesmo sem experiência prévia.
      </>
    ]
  }
];

export function TrackAudience() {
  return (
    <section className="pt-32 pb-16 max-w-6xl mx-auto">
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

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-purple-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{audience.title}</h3>
                    <div className="text-gray-300 flex-1">
                      {audience.description.map((item, idx) => (
                        <p key={idx} className="mb-2">{item}</p>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
