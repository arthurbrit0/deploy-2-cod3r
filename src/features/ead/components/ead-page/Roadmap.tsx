"use client";

import React from "react";
import {
  CheckCircle2,
  Circle,
  GitPullRequest,
  Code2,
  Users,
  Database,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

const phases = [
  {
    status: "completed",
    title: "Fase 1: Fundação",
    description: "Setup inicial do projeto e estrutura base",
    icon: Code2,
    color: "emerald",
    items: [
      "Setup do Next.js e TypeScript",
      "Configuração do ESLint e Prettier",
      "CI/CD Pipeline com GitHub Actions",
      "Documentação inicial do projeto",
    ],
  },
  {
    status: "current",
    title: "Fase 2: Core Features",
    description: "Desenvolvimento das funcionalidades principais",
    icon: Database,
    color: "cyan",
    items: [
      "Sistema de Autenticação com múltiplos providers",
      "Gerenciamento de Cursos e Módulos",
      "API REST com Swagger Documentation",
      "Sistema de Upload de Vídeos",
    ],
  },
  {
    status: "upcoming",
    title: "Fase 3: Expansão",
    description: "Novas features e melhorias",
    icon: Users,
    color: "purple",
    items: [
      "Sistema de Pagamentos com Stripe",
      "Analytics e Dashboards",
      "Área do Professor com Métricas",
      "Sistema de Certificados",
    ],
  },
  {
    status: "upcoming",
    title: "Fase 4: Otimização",
    description: "Performance e segurança",
    icon: Rocket,
    color: "pink",
    items: [
      "Otimização de Performance",
      "Testes E2E com Cypress",
      "Monitoramento com Sentry",
      "Cache Layer com Redis",
    ],
  },
];

const Roadmap = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-32">
      <div className="text-center mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Roadmap do Projeto
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg"
        >
          Acompanhe o progresso do desenvolvimento e as próximas features
          planejadas.
        </motion.p>
      </div>
      <div className="relative">
        <div
          className="absolute left-1/2 -translate-x-px h-full w-0.5 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(16,185,129,0.5), rgba(6,182,212,0.5), rgba(139,92,246,0.5))",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
        <div className="hidden md:block absolute left-1/2 -translate-x-px h-full w-0.5 bg-gradient-to-b from-emerald-400/50 via-cyan-400/50 to-purple-400/50" />
        <div className="space-y-12 md:space-y-24">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 text-center md:text-right">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-gray-400">{phase.description}</p>
                </div>
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center ${
                      phase.status === "completed"
                        ? "bg-emerald-400/20"
                        : phase.status === "current"
                        ? "bg-cyan-400/20"
                        : "bg-white/10"
                    }`}
                  >
                    <phase.icon
                      className={`w-6 h-6 md:w-8 md:h-8 ${
                        phase.status === "completed"
                          ? "text-emerald-400"
                          : phase.status === "current"
                          ? "text-cyan-400"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/10 transition-colors">
                    <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          {phase.status === "completed" ? (
                            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                          ) : phase.status === "current" && itemIndex === 0 ? (
                            <GitPullRequest className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                          ) : (
                            <Circle className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                          )}
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
