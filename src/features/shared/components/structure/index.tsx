import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Blocks, Brain, Rocket, Users } from "lucide-react"
import { TracingBeam } from "@/components/ui/tracings-beams";

function CourseItem({ number, title }: { number: number; title: string }) {
  return (
    <div className="flex items-center gap-3 p-2">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
        {number}
      </span>
      <span className="text-sm">{title}</span>
    </div>
  );
}

function Section({ title, icon: Icon, description, tracks }: {
  title: string;
  icon: React.ElementType;
  description: string;
  tracks: {
    title: string;
    description: string;
    items: { number: number; title: string }[];
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
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      
      <Accordion type="single" collapsible className="space-y-2">
        {tracks.map((track) => (
          <AccordionItem key={track.title} value={track.title} className="border-b-0">
            <AccordionTrigger className="rounded-lg bg-accent/50 px-4 py-3 hover:bg-accent [&[data-state=open]]:bg-accent">
              <div className="flex flex-col items-start gap-1">
                <h3 className="font-medium">{track.title}</h3>
                <p className="text-xs text-muted-foreground">{track.description}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pt-2">
              <div className="space-y-1">
                {track.items.map((item) => (
                  <CourseItem key={item.number} {...item} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default function Structure() {
  const sections = [
    {
      title: "Fundamentos",
      icon: Blocks,
      description: "Base essencial para sua jornada como desenvolvedor",
      tracks: [
        {
          title: "Fundamentos DEV",
          description: "Programação do ABSOLUTO zero",
          items: [
            { number: 1, title: "Iniciando com HTML e CSS" },
            { number: 2, title: "Iniciando com Programação" },
            { number: 3, title: "Ambiente de Desenvolvimento" },
            { number: 4, title: "Controlando o Código" },
            { number: 5, title: "Evoluindo na Programação" },
            { number: 6, title: "Funções em JavaScript" },
            { number: 7, title: "Exercícios JavaScript" },
            { number: 8, title: "Exercícios HTML & CSS" }
          ]
        },
        {
          title: "Ferramentas Essenciais",
          description: "Ferramentas do dia a dia do desenvolvedor",
          items: [
            { number: 1, title: "Terminal Windows" },
            { number: 2, title: "Terminal Linux" },
            { number: 3, title: "Terminal MacOS" },
            { number: 4, title: "Git e Github Básico" },
            { number: 5, title: "Git e Github Branches" }
          ]
        }
      ]
    },
    {
      title: "Especialização",
      icon: Rocket,
      description: "Aprofunde-se em áreas específicas do desenvolvimento",
      tracks: [
        {
          title: "Frontend",
          description: "Desenvolvimento de interfaces modernas",
          items: [
            { number: 1, title: "Frontend Moderno" },
            { number: 2, title: "React e Next" },
            { number: 3, title: "Projeto Kino" }
          ]
        },
        {
          title: "Backend",
          description: "Desenvolvimento do lado do servidor",
          items: [
            { number: 1, title: "Api com Express.js" },
            { number: 2, title: "Persistência com Knex.js" },
            { number: 3, title: "GraphQL" },
            { number: 4, title: "Dominando NestJS" }
          ]
        }
      ]
    },
    {
      title: "Arquitetura",
      icon: Brain,
      description: "Princípios e padrões de arquitetura de software",
      tracks: [
        {
          title: "Design de Software",
          description: "Arquitetura e design de software",
          items: [
            { number: 1, title: "Ferramentas Estratégicas" },
            { number: 2, title: "Ferramentas Táticas" },
            { number: 3, title: "Arq. Limpa e Hexagonal" },
            { number: 4, title: "Modelagem de Domínio" },
            { number: 5, title: "Casos de Uso" }
          ]
        }
      ]
    },
    {
      title: "Desenvolvimento Pessoal",
      icon: Users,
      description: "Evolua como profissional e pessoa",
      tracks: [
        {
          title: "Clube do Livro",
          description: "Leitura e discussão de livros essenciais",
          items: [
            { number: 1, title: "Arquitetura Limpa" },
            { number: 2, title: "Implementando DDD" },
            { number: 3, title: "O poder do hábito" },
            { number: 4, title: "Clean Agile" }
          ]
        }
      ]
    },
    {
        title: "Inteligência Artificial",
        icon: Users,
        description: "Aprenda a criar automações e sistemas inteligentes",
        tracks: [
          {
            title: "Modelos de IA",
            description: "Aprendizado de máquina e redes neurais",
            items: [
              { number: 1, title: "LangChain" },
              { number: 2, title: "n8n" },
              { number: 3, title: "Workflows com IA" },
              { number: 4, title: "Regressão Linear" }
            ]
          }
        ]
      }
  ];

  return (
    <div className="min-h-screen bg-none px-8 pb-16">
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