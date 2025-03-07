import { Brain, Code, Users, Bot, Hexagon, PlaySquare } from 'lucide-react';

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
        description: 'Linguagem de marcação para estruturar a web.',
        image: '/tech/html.png',
      },
      {
        name: 'CSS',
        description: 'Estilização e layout de páginas web.',
        image: '/tech/css.png',
      },
      {
        name: 'JavaScript',
        description: 'Linguagem de programação para a web.',
        image: '/tech/javascript.png',
      },
    ],
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
        description: 'Biblioteca de código aberto para aprendizado de máquina.',
        image: '/tech/tensorflow.png',
      },
      {
        name: 'PyTorch',
        description: 'Framework de aprendizado profundo com foco em pesquisa.',
        image: '/tech/pytorch.png',
      },
      {
        name: 'Scikit-Learn',
        description: 'Biblioteca para análise e mineração de dados.',
        image: '/tech/scikitlearn.png',
      },
    ],
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
        description: 'Biblioteca JavaScript para construir interfaces de usuário.',
        image: '/tech/react.png',
      },
      {
        name: 'Node.js',
        description: 'Ambiente de execução para JavaScript no servidor.',
        image: '/tech/nodejs.png',
      },
      {
        name: 'GraphQL',
        description: 'Linguagem de consulta para APIs.',
        image: '/tech/graphql.png',
      },
    ],
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
        description:
          'Plataforma de containerização para desenvolver, enviar e executar aplicações.',
        image: '/tech/docker.png',
      },
      {
        name: 'Kubernetes',
        description: 'Sistema de orquestração de containers.',
        image: '/tech/kubernetes.png',
      },
      {
        name: 'AWS',
        description: 'Plataforma de serviços em nuvem da Amazon.',
        image: '/tech/aws.png',
      },
    ],
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
        description: 'Abordagem criativa para resolução de problemas.',
        image: '/tech/design-thinking.png',
      },
      {
        name: 'Metodologias Ágeis',
        description: 'Práticas para gestão de projetos e equipes.',
        image: '/tech/agile.png',
      },
      {
        name: 'Comunicação Eficaz',
        description: 'Técnicas para melhorar a comunicação interpessoal.',
        image: '/tech/communication.png',
      },
    ],
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
        description:
          'Plataforma de videoconferência para aulas e reuniões.',
        image: '/tech/google-meet.png',
      },
      {
        name: 'Zoom',
        description: 'Ferramenta popular para videoconferências.',
        image: '/tech/zoom.png',
      },
      {
        name: 'Slack',
        description: 'Plataforma para comunicação e colaboração em equipe.',
        image: '/tech/slack.png',
      },
    ],
  },
] as const;