"use client";

import React, { JSX, useState } from 'react';
import { Brain, Code, Users, Bot, Hexagon, PlaySquare, ArrowBigRight, CheckCircle as CircleCheck, Terminal, FastForward, Laptop } from 'lucide-react';
import Section from '../../layouts/SectionWrapper';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { CardWithCursor } from '@/components/ui/card-with-cursor';
import Title from '../Title';
import ProductsStats from './ProductsStats';

export const rootCategories = [
  {
    title: 'Formação DEV',
    icon: Laptop,
    items: [
      {
        title: 'Mentoria',
        description: `
Você não precisa estudar só. Participe das nossas mentorias ao vivo em grupo! 
Uma oportunidade para todos os alunos discutirem temas relevantes e acelerarem 
suas carreiras, e, para sua conveniência, todas as sessões são gravadas, 
permitindo que você assista quando e onde quiser, mesmo que não possa participar 
ao vivo. Essa é uma área fundamental para o seu crescimento!
        `,
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
        features: ['Discussões ao vivo', 'Projetos reais', 'Suporte personalizado'],
      },
      {
        title: 'Arquiteto',
        description: `
A área do Arquiteto da Formação DEV eleva a discussão para um nível estratégico e profissional, 
abordando temas complexos de forma didática e aprofundada. Essa etapa alarga a visão sobre a 
arquitetura de software, explorando questões cruciais para o desenvolvimento de sistemas robustos 
e de fácil manutenção.
        `,
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
        features: ['Arquitetura de Software', 'Boas práticas', 'Projetos Reais'],
      },
      {
        title: 'Especialista',
        description: `
Você vai aprofundar os seus conhecimentos nas principais tecnologias do mercado e direcionar 
o foco para o desenvolvimento de aplicações completas. Nesta etapa, você vai mergulhar em temas 
avançados, dominando as ferramentas e frameworks mais utilizados pelas empresas, preparando-se 
para enfrentar desafios reais e construir soluções inovadoras.
        `,
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
        features: ['Desenvolvimento Full-Stack', 'Bancos de Dados', 'Infraestrutura', 'Projetos Reais'],
      },
      {
        title: 'Fundamentos',
        description: `
Aqui é o alicerce essencial para quem busca uma carreira em desenvolvimento. 
Nesta área, você vai construir uma base sólida em programação, mesmo sem nunca 
ter escrito uma linha de código antes. É o ponto de entrada e é um passo indispensável 
para que quem está iniciando na área possa avançar com confiança para as demais áreas da Formação Dev.
        `,
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
        features: ['Fundamentos da Web', 'Lógica de Programação', 'Terminal', 'Git e GitHub'],
      },
      {
        title: 'Humano',
        description: `
Aqui oferecemos conteúdos e ferramentas para aprimorar competências que vão além do código, 
como por exemplo melhorar a forma como você estuda. Nesta área, temos cursos que abrangem diferentes 
técnicas de estudo e ferramentas que podem ser usadas nesse processo, além do clube do livro, onde você 
vai ter contato com os livros mais relevantes da área de tecnologia e obras fundamentais para o seu 
desenvolvimento pessoal e profissional.
        `,
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
        features: ['Clube do Livro', 'Guia de Estudos'],
      }
    ],
  },
  {
    title: 'Formação AI',
    description: `
A Formação AI coloca a inteligência artificial ao alcance do desenvolvedor. 
O objetivo dessa área é capacitar o profissional a integrar a IA em seus projetos, 
automatizar tarefas e otimizar processos de uma forma simples e rápida. 
É uma área que está em pleno crescimento e que vamos explorar muito para dar aos 
desenvolvedores todas as ferramentas para melhor aproveitar as oportunidades de mercado.
    `,
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
    features: ['Fundamentos de IA', 'IA e Automações', 'Ferramentas para uso com IA'],
  },
  {
    title: 'Formação Express',
    description: `
A Formação Express é um caminho otimizado para o desenvolvimentos de aplicações Full Stack. 
Nós fizemos uma curadoria só com o essencial para que o aluno consiga sair do zero até desenvolver 
aplicações completas, sem distrações, apenas com o que é mais importante, e direto ao ponto.
    `,
    icon: FastForward,
    link: '/express',
    technologies: [
      {
        name: 'Tech 1',
        description: 'Descrição da tecnologia',
        image: '/tech/google-meet.png',
      },
      {
        name: 'Tech 2',
        description: 'Descrição da tecnologia',
        image: '/tech/zoom.png',
      },
      {
        name: 'Tech 3',
        description: 'Descrição da tecnologia',
        image: '/tech/slack.png',
      },
    ],
    features: ['Formação completa para desenvolvedores', 'Do Zero ao Mercado em um curso rápido e prático', 'Mentorias e suporte especializado'],
  }
];

const allProducts = [
  ...rootCategories[0].items,
  rootCategories[1],
  rootCategories[2]
];

const getDescriptionPoints = (description: string) => {
  const fullText = description.replace(/\n/g, ' ').trim();
  const sentences = fullText.split(/(?<=[.!?])\s+/);
  return sentences.filter(sentence => sentence.length > 0);
};

function escapeRegExp(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const keywords = [
  { keyword: "mentorias ao vivo", tag: "strong" },
  { keyword: "temas relevantes", tag: "em" },
  { keyword: "fundamental", tag: "strong" },
  { keyword: "estratégico", tag: "em" },
  { keyword: "didática", tag: "em" },
  { keyword: "sistemas robustos", tag: "strong" },
  { keyword: "aplicações completas", tag: "strong" },
  { keyword: "desafios reais", tag: "em" },
  { keyword: "inovadoras", tag: "strong" },
  { keyword: "base sólida", tag: "strong" },
  { keyword: "ponto de entrada", tag: "em" },
  { keyword: "confiança", tag: "em" },
  { keyword: "competências", tag: "strong" },
  { keyword: "clube do livro", tag: "strong" },
  { keyword: "inteligência artificial", tag: "strong" },
  { keyword: "automatizar tarefas", tag: "em" },
  { keyword: "otimizar processos", tag: "em" },
  { keyword: "pleno crescimento", tag: "strong" },
  { keyword: "aplicações Full Stack", tag: "strong" },
  { keyword: "essencial", tag: "em" },
  { keyword: "direto ao ponto", tag: "em" },
];

function highlightKeywords(sentence: string): JSX.Element {
  const regex = new RegExp(keywords.map(k => escapeRegExp(k.keyword)).join("|"), "gi");
  const result: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(sentence)) !== null) {
    if (match.index > lastIndex) {
      result.push(sentence.slice(lastIndex, match.index));
    }
    const matchedText = match[0];
    const keywordObj = keywords.find(k => k.keyword.toLowerCase() === matchedText.toLowerCase());
    if (keywordObj) {
      if (keywordObj.tag === "strong") {
        result.push(<strong key={lastIndex}>{matchedText}</strong>);
      } else {
        result.push(<em key={lastIndex}>{matchedText}</em>);
      }
    } else {
      result.push(matchedText);
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < sentence.length) {
    result.push(sentence.slice(lastIndex));
  }
  return <>{result}</>;
}

export default function Products() {
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeProduct = allProducts[activeTab];
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
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400 px-4 py-2">
                  <Laptop className="w-4 h-4" />
                  <span className="font-medium text-md">Formação DEV</span>
                </div>
                <div className="space-y-1">
                  {rootCategories[0].items.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeTab === index;
                    return (
                      <button
                        key={item.title}
                        onClick={() => handleTabChange(index)}
                        className={`w-full flex items-center gap-3 px-6 py-2 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-gray-700 text-white'
                            : 'text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {[rootCategories[1], rootCategories[2]].map((item, index) => {
                const Icon = item.icon;
                const globalIndex = rootCategories[0].items.length + index;
                const isActive = activeTab === globalIndex;
                return (
                  <button
                    key={item.title}
                    onClick={() => handleTabChange(globalIndex)}
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-gray-700 text-white'
                        : 'text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.title}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          <div className={`flex-1 flex flex-col transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
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
                      <ul className="list-disc ml-6 space-y-4">
                        {getDescriptionPoints(activeProduct.description).map((sentence, i) => (
                          <li key={i} className="mb-1">{highlightKeywords(sentence)}</li>
                        ))}
                      </ul>
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
