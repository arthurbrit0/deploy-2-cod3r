"use client";

import { motion } from "framer-motion";
import { TrendingUp, Brain, Briefcase, Users, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface WhyLearnProps {
  technology: string;
}

export function WhyLearn({ technology }: WhyLearnProps) {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Alta demanda",
      description: "Aprenda uma tecnologia com muitas oportunidades"
    },
    {
      icon: Brain,
      title: "Habilidades duradouras",
      description: "Desenvolva habilidades valiosas e duradouras"
    },
    {
      icon: Briefcase,
      title: "Crescimento de carreira",
      description: "Impulsione sua carreira com novas habilidades"
    },
    {
      icon: Users,
      title: "Comunidade ativa",
      description: "Faça parte de uma comunidade ativa e colaborativa"
    },
    {
      icon: Rocket,
      title: "Desenvolvimento rápido",
      description: "Desenvolva projetos rapidamente com a tecnologia"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-full min-h-[300px] md:min-h-[500px] bg-gradient-to-br from-primary/10 to-primary/5">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80')`,
                opacity: 0.25
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/50" />
            <div className="relative p-8 flex flex-col justify-center h-full">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Por que aprender {technology}?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground"
              >
                Descubra as vantagens de aprender {technology} e como isso pode impulsionar sua carreira
              </motion.p>
            </div>
          </div>
          <div className="p-8 bg-gradient-to-b from-zinc-950 to-black/90">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-l from-pink-400 to-blue-600 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold mb-1">{reason.title}</h3>
                      <p className="text-sm text-muted-foreground">{reason.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}