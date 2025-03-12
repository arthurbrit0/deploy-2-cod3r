"use client";

import Container from "@/features/shared/layouts/Container";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, Code, Briefcase } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Iniciantes",
    description: "Ideal para quem está começando e quer construir uma base sólida"
  },
  {
    icon: Code,
    title: "Desenvolvedores",
    description: "Perfeito para devs que querem se especializar e evoluir na carreira"
  },
  {
    icon: Briefcase,
    title: "Profissionais",
    description: "Ótimo para quem busca atualização e novas oportunidades"
  }
];

export function TrackAudience() {
  return (
    <section className="pt-32 pb-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Para quem é a Formação?</h2>
          <p className="text-gray-400">Desenvolvemos a Formação DEV para atingir os mais diferentes níveis de profissionais</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-gray-900 border-gray-800 p-6 hover:border-purple-500/50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{audience.title}</h3>
                  <p className="text-gray-400">{audience.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}