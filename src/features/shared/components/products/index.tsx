"use client";

import React, { useState } from 'react';
import { Brain, Code, Users, Bot, Hexagon, PlaySquare, ArrowBigRight, CircleCheck, Terminal } from 'lucide-react';
import Section from '../../layouts/SectionWrapper';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { CardWithCursor } from '@/components/ui/card-with-cursor';
import Title from '../Title';
import ProductsStats from './ProductsStats';

export const products = [
  {
    title: 'Fundamentos',
    description:
      'São mais de 20 cursos em 4 trilhas para que você saia do absoluto zero para fundamentos sólidos de programação.',
    icon: Code,
    link: '/areas/fundamentos-dev',
    technologies: [
      {
        name: 'HTML',
        description: 'Linguagem de marcação para web',
        image: '/tech/html.png',
      },
      {
        name: 'CSS',
        description: 'Estilização de páginas web',
        image: '/tech/css.png',
      },
      {
        name: 'JavaScript',
        description: 'O "cérebro" da web.',
        image: '/tech/javascript.png',
      },
    ],
    features: ['Fundamentos da Web', 'Lógica de Programação', 'Estruturas de Dados'],
  },
  {
    title: 'IA',
    description:
      'A inteligência artificial veio para ficar, e enquanto tem gente fugindo dela, nós vamos te mostrar como tirar proveito dessa ferramenta.',
    icon: Bot,
    link: '/areas/ia-dev',
    technologies: [
      {
        name: 'TensorFlow',
        description: 'ML framework.',
        image: '/tech/tensorflow.png',
      },
      {
        name: 'PyTorch',
        description: 'Deep learning library.',
        image: '/tech/pytorch.png',
      },
      {
        name: 'Scikit-Learn',
        description: 'Data mining library.',
        image: '/tech/scikitlearn.png',
      },
    ],
    features: ['Machine Learning', 'Deep Learning', 'Natural Language Processing'],
  },
  {
    title: 'Especialista',
    description:
      'Hora de aprofundar nas principais tecnologias do mercado e ajustar o foco para o desenvolvimento de aplicações completas.',
    icon: Brain,
    link: '/areas/especialista-dev',
    technologies: [
      {
        name: 'React',
        description: 'Perfeito para criação de interfaces',
        image: '/tech/react.png',
      },
      {
        name: 'Node.js',
        description: 'Seu backend em JavaScript',
        image: '/tech/nodejs.png',
      },
      {
        name: 'Next.Js',
        description: 'API query language.',
        image: '/tech/graphql.png',
      },
    ],
    features: ['Frontend Avançado', 'Backend Development', 'Full Stack Integration'],
  },
  {
    title: 'Arquiteto',
    description:
      'Está preparado para um papo cabeça? Vamos alargar os temas e abordar os assuntos de forma profissional e didática.',
    icon: Hexagon,
    link: '/areas/arquiteto-dev',
    technologies: [
      {
        name: 'Docker',
        description: 'Containerization platform.',
        image: '/tech/docker.png',
      },
      {
        name: 'Kubernetes',
        description: 'Container orchestration system.',
        image: '/tech/kubernetes.png',
      },
      {
        name: 'AWS',
        description: 'Cloud services platform.',
        image: '/tech/aws.png',
      },
    ],
    features: ['System Design', 'Cloud Architecture', 'DevOps Practices'],
  },
  {
    title: 'Humano',
    description:
      'Nem só de bytes vive um programador, então vamos falar de rotina de estudos, livros sugeridos, soft skills e etc.',
    icon: Users,
    link: '/areas/humano-dev',
    technologies: [
      {
        name: 'Design Thinking',
        description: 'Creative problem-solving approach.',
        image: '/tech/design-thinking.png',
      },
      {
        name: 'Agile',
        description: 'Efficient project management.',
        image: '/tech/agile.png',
      },
      {
        name: 'Communication',
        description: 'Effective interpersonal skills.',
        image: '/tech/communication.png',
      },
    ],
    features: ['Soft Skills', 'Career Development', 'Team Collaboration'],
  },
  {
    title: 'Mentoria',
    description:
      'Aulas ao vivo com muitas interações em grupo pelo Google Meet.',
    icon: PlaySquare,
    link: '/areas/mentoria-dev',
    technologies: [
      {
        name: 'Google Meet',
        description: 'Video conferencing tool.',
        image: '/tech/google-meet.png',
      },
      {
        name: 'Zoom',
        description: 'Popular videoconferencing.',
        image: '/tech/zoom.png',
      },
      {
        name: 'Slack',
        description: 'Team collaboration platform.',
        image: '/tech/slack.png',
      },
    ],
    features: ['Live Sessions', 'Group Interactions', 'Personal Guidance'],
  },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeProduct = products[activeTab];
  const ActiveIcon = activeProduct.icon;

  const handleTabChange = (index: number) => {
    if (index !== activeTab) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(index);
        setIsTransitioning(false);
      }, 200);
    }
  };

  return (
    <Section>
      <Title
        main={[
          { value: 'Áreas e trilhas', gradient: true },
          { value: 'modulares' }
        ]}
        secondary="Escolha a área que mais se encaixa com o seu perfil e siga a trilha recomendada para melhor aproveitamento do conteúdo."
      />
      <CardWithCursor>
        <div className="mt-12 min-h-[70vh] flex gap-0 bg-gradient-to-r dark:from-gray-900/30 from-gray-100/30 to-gray-300/30 dark:to-gray-900/30 opacity-100 rounded-3xl shadow-xl overflow-hidden">
          <nav className="w-64 bg-gradient-to-r dark:from-gray-900/30 from-gray-100/30 to-gray-300/30 dark:to-gray-900/30 opacity-100 border-r border-gray-700 p-4">
            <div className="space-y-2">
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <button
                    key={product.title}
                    onClick={() => handleTabChange(index)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      index === activeTab
                        ? 'bg-gray-700 text-white'
                        : 'text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{product.title}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          <div
            className={`flex-1 flex flex-col transition-opacity duration-200 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="bg-gray-900/70 border-b border-gray-700 flex items-center justify-between h-10 px-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-sm text-gray-300 font-medium flex items-center gap-2">
                <ActiveIcon className="w-4 h-4 text-pink-400" />
                {activeProduct.title}.tsx
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <ArrowBigRight className="w-5 h-5" />
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <div className="flex-1 flex min-h-0">
                <div className="w-12 bg-gray-900/90 text-gray-600 text-right pr-2 py-4 font-mono text-sm select-none">
                  {Array.from({ length: 12 }, (_, i) => (
                    <div key={i} className="leading-6 mb-4">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  ))}
                </div>

                <div className="flex-1 bg-gray-900/70 p-4 font-mono overflow-y-auto">
                  <div className="text-blue-400 mb-6 text-xl">
                    <span className="text-pink-400">modulo</span> {activeProduct.title} {'{'}
                  </div>

                  <div className="pl-4 mb-6">
                    <div className="flex items-center gap-2 text-purple-400 mb-2">
                      <span className="font-medium">descricao = </span>
                    </div>
                    <div className="pl-4 text-gray-300 text-lg">
                      {activeProduct.description}
                    </div>
                  </div>

                  <div className="pl-4 mb-6">
                    <div className="flex items-center gap-2 text-purple-400 mb-2">
                      <span className="font-medium">conteudos</span> = [
                    </div>
                    <div className="pl-8 space-y-2">
                      {activeProduct.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-emerald-300">
                          <CircleCheck className="w-4 h-4" />
                          <span>{`"`}{feature}{`"`}{index < activeProduct.features.length - 1 ? "," : ""}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pl-4">]</div>
                  </div>

                  <div className="pl-4 mb-6">
                    <div className="flex items-center gap-2 text-purple-400 mb-2">
                      <span className="font-medium">tecnologias</span> = {'{'}
                    </div>
                    <div className="pl-8 flex gap-4">
                      <AnimatedTooltip
                        items={activeProduct.technologies.map((tech, index) => ({
                          id: index,
                          name: tech.name,
                          designation: tech.description,
                          image: tech.image,
                        }))}
                      />
                    </div>
                    <div className="pl-4">{'}'}</div>
                  </div>

                  <div className="text-blue-400 text-xl">{'}'}</div>
                </div>

                <div className="w-2 bg-gray-900/90"></div>
              </div>

              <div className="h-64 border-t border-gray-700">
                <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-800">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">Terminal</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                  </div>
                </div>
                <div className="bg-gray-950 p-4 font-mono h-[calc(100%-2.5rem)] overflow-y-auto text-center mt-8">
                  <div className="text-emerald-400 text-lg">
                    {`>`} Iniciando a área de {activeProduct.title}...
                  </div>
                  <div className="mt-4 text-2xl font-bold">
                    <a
                      href={activeProduct.link}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded hover:bg-emerald-500/20 transition-colors"
                    >
                      <Terminal className="w-4 h-4" />
                      Clique aqui para acessar {activeProduct.title}!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardWithCursor>
      <ProductsStats />
    </Section>
  );
}