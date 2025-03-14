import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Blocks, Brain, Rocket, Users, Clock, BookOpen } from "lucide-react";
import { TracingBeam } from "@/components/ui/tracings-beams";

function CourseAccordionItem({ number, title, duration, descricao, aulas }: { 
  number: number; 
  title: string; 
  duration: number; 
  descricao: string;
  aulas: number;
}) {
  return (
    <AccordionItem value={`course-${number}`}>
      <AccordionTrigger className="rounded-lg bg-zinc-900 px-3 py-2 hover:bg-secondary/80">
        <div className="flex items-center gap-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
            {number}
          </span>
          <span className="text-sm font-medium">{title}</span>
          <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span>{aulas} aulas</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{duration}h</span>
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-3 pt-2">
        <p className="text-xs md:text-sm text-muted-foreground">{descricao}</p>
      </AccordionContent>
    </AccordionItem>
  );
}

function Section({ title, icon: Icon, descricao, tracks }: { 
  title: string; 
  icon: React.ElementType; 
  descricao: string; 
  tracks: {
    title: string;
    descricao: string;
    duration: number;
    items: { number: number; title: string; duration: number; descricao: string; aulas: number }[];
  }[];
}) {
  return (
    <div className="rounded-lg border p-6">
      <div className="mb-6 flex items-center gap-4">
        <div className="rounded-lg bg-primary/10 p-2">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-sm text-muted-foreground">{descricao}</p>
        </div>
      </div>
      
      <Accordion type="single" collapsible className="space-y-2">
        {tracks.map((track) => {
          const totalAulas = track.items.reduce((acc, curso) => acc + curso.aulas, 0);
          return (
            <AccordionItem key={track.title} value={track.title} className="border-b-0">
              <AccordionTrigger className="rounded-lg bg-accent/50 px-4 py-3 hover:bg-accent [&[data-state=open]]:bg-accent">
                <div className="flex flex-col items-start gap-1">
                  <h3 className="font-medium text-lg">{`Trilha ${track.title}`}</h3>
                  <p className="text-sm text-muted-foreground">{track.descricao}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-5 w-5" />
                      <span>{totalAulas} aulas</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-5 w-5" />
                      <span>{track.duration}h</span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pt-5">
                <Accordion type="single" collapsible className="space-y-3">
                  {track.items.map((item) => (
                    <CourseAccordionItem key={item.number} {...item} />
                  ))}
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export default function Structure() {
  const sections = [
    {
      title: "Fundamentos",
      icon: Blocks,
      descricao: "Base essencial para sua jornada como desenvolvedor",
      tracks: [
        {
          title: "Fundamentos DEV",
          descricao: "Programação do ABSOLUTO zero",
          duration: 15,
          items: [
            { number: 1, title: "Iniciando com HTML e CSS", duration: 2, descricao: "Introdução a HTML e CSS", aulas: 8 },
            { number: 2, title: "Iniciando com Programação", duration: 3, descricao: "Fundamentos da programação", aulas: 10 },
            { number: 3, title: "Ambiente de Desenvolvimento", duration: 2, descricao: "Configuração do ambiente", aulas: 5 },
            { number: 4, title: "Controlando o Código", duration: 2, descricao: "Uso de Git e controle de versão", aulas: 6 },
            { number: 5, title: "Evoluindo na Programação", duration: 3, descricao: "Melhorias e práticas avançadas", aulas: 7 },
            { number: 6, title: "Funções em JavaScript", duration: 2, descricao: "Entendendo funções e escopos", aulas: 8 },
            { number: 7, title: "Exercícios JavaScript", duration: 2, descricao: "Prática com exercícios de JS", aulas: 5 },
            { number: 8, title: "Exercícios HTML & CSS", duration: 2, descricao: "Prática com exercícios de HTML & CSS", aulas: 5 }
          ]
        },
        {
          title: "Ferramentas Essenciais",
          descricao: "Ferramentas do dia a dia do desenvolvedor",
          duration: 8,
          items: [
            { number: 1, title: "Terminal Windows", duration: 2, descricao: "Uso do terminal no Windows", aulas: 4 },
            { number: 2, title: "Terminal Linux", duration: 2, descricao: "Uso do terminal no Linux", aulas: 4 },
            { number: 3, title: "Terminal MacOS", duration: 2, descricao: "Uso do terminal no MacOS", aulas: 4 },
            { number: 4, title: "Git e Github Básico", duration: 1, descricao: "Introdução ao Git e GitHub", aulas: 3 },
            { number: 5, title: "Git e Github Branches", duration: 1, descricao: "Trabalhando com branches", aulas: 3 }
          ]
        }
      ]
    },
    {
      title: "Especialista",
      icon: Rocket,
      descricao: "Aprofunde-se em áreas específicas do desenvolvimento",
      tracks: [
        {
          title: "Frontend",
          descricao: "Desenvolvimento de interfaces modernas",
          duration: 10,
          items: [
            { number: 1, title: "Frontend Moderno", duration: 4, descricao: "Aprenda tecnologias modernas para frontend", aulas: 7 },
            { number: 2, title: "React e Next", duration: 6, descricao: "Construindo interfaces com React e Next.js", aulas: 9 },
            { number: 3, title: "Projeto Kino", duration: 2, descricao: "Projeto prático de frontend", aulas: 5 }
          ]
        },
        {
          title: "Backend",
          descricao: "Desenvolvimento do lado do servidor",
          duration: 12,
          items: [
            { number: 1, title: "Api com Express.js", duration: 4, descricao: "Construindo APIs com Express", aulas: 8 },
            { number: 2, title: "Persistência com Knex.js", duration: 4, descricao: "Uso do Knex.js para banco de dados", aulas: 7 },
            { number: 3, title: "GraphQL", duration: 2, descricao: "Introdução ao GraphQL", aulas: 5 },
            { number: 4, title: "Dominando NestJS", duration: 2, descricao: "Desenvolvimento avançado com NestJS", aulas: 5 }
          ]
        }
      ]
    },
    {
      title: "Arquiteto",
      icon: Brain,
      descricao: "Princípios e padrões de arquitetura de software",
      tracks: [
        {
          title: "Design de Software",
          descricao: "Arquitetura e design de software",
          duration: 10,
          items: [
            { number: 1, title: "Ferramentas Estratégicas", duration: 2, descricao: "Uso de ferramentas estratégicas", aulas: 4 },
            { number: 2, title: "Ferramentas Táticas", duration: 2, descricao: "Uso de ferramentas táticas", aulas: 4 },
            { number: 3, title: "Arq. Limpa e Hexagonal", duration: 3, descricao: "Conceitos de arquitetura limpa", aulas: 5 },
            { number: 4, title: "Modelagem de Domínio", duration: 2, descricao: "Princípios de modelagem", aulas: 4 },
            { number: 5, title: "Casos de Uso", duration: 1, descricao: "Estudo de casos práticos", aulas: 3 }
          ]
        }
      ]
    },
    {
      title: "Humano",
      icon: Users,
      descricao: "Evolua como profissional e pessoa",
      tracks: [
        {
          title: "Clube do Livro",
          descricao: "Leitura e discussão de livros essenciais",
          duration: 5,
          items: [
            { number: 1, title: "Arquitetura Limpa", duration: 2, descricao: "Análise do livro Arquitetura Limpa", aulas: 5 },
            { number: 2, title: "Implementando DDD", duration: 1, descricao: "Introdução ao DDD", aulas: 4 },
            { number: 3, title: "O poder do hábito", duration: 1, descricao: "Estudo do livro O poder do Hábito", aulas: 3 },
            { number: 4, title: "Clean Agile", duration: 1, descricao: "Princípios do Clean Agile", aulas: 3 }
          ]
        }
      ]
    },
    {
      title: "Inteligência Artificial",
      icon: Users,
      descricao: "Aprenda a criar automações e sistemas inteligentes",
      tracks: [
        {
          title: "Modelos de IA",
          descricao: "Aprendizado de máquina e redes neurais",
          duration: 8,
          items: [
            { number: 1, title: "LangChain", duration: 3, descricao: "Uso do LangChain para integração de IA", aulas: 6 },
            { number: 2, title: "n8n", duration: 2, descricao: "Automatizações com n8n", aulas: 4 },
            { number: 3, title: "Workflows com IA", duration: 2, descricao: "Criação de workflows utilizando IA", aulas: 5 },
            { number: 4, title: "Regressão Linear", duration: 1, descricao: "Conceitos de regressão linear", aulas: 3 }
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-none px-8 py-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Estrutura da Formação DEV</h1>
        <p className="mt-2 text-muted-foreground">
          A Formação DEV é organizada em áreas, trilhas e cursos
        </p>
      </div>
      
      <TracingBeam className="px-6">
        <div className="max-w-2xl ml-auto space-y-6">
          {sections.map((section) => (
            <Section key={section.title} {...section} />
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}
