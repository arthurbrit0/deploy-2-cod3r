import { BookOpenCheck, Code2, HeartHandshake, Rocket, Shield, Users, Users2, Wallet } from "lucide-react";
import { FeatureCard } from "../../../../components/ui/feature-sections";
import Title from "@/features/shared/components/Title";

interface Feature {
    title: string;
    description: string;
    icon: React.ElementType;
  }

export default function StatsSection() {

    const defaultFeatures: Feature[] = [
        {
          title: "Mentorias ao vivo",
          description: "Participe de sessões exclusivas de mentoria ao vivo conosco",
          icon: Rocket,
        },
        {
          title: "Projetos em Equipe",
          description: "Trabalhe em projetos em equipe para praticar o que aprendeu",
          icon: Users2,
        },
        {
          title: "Clube do Livro",
          description: "Participe de discussões sobre livros e artigos com a comunidade",
          icon: BookOpenCheck,
        },
        {
          title: "Suporte Dedicado",
          description: "Tenha acesso a suporte dedicado para tirar suas dúvidas",
          icon: HeartHandshake,
        },
        {
          title: 'Projeto open-source',
          description: 'Contribua com a comunidade e desenvolva um projeto open-source.',
          icon: Code2,
        },
        {
          title: 'Aprendizado em equipe',
          description: 'Trabalhe em equipe para praticar o que aprendeu',
          icon: Shield,
        },
        {
          title: 'Mentorias ao vivo',
          description: 'Participe de sessões exclusivas de mentoria sobre o projeto',
          icon: Wallet,
        },
        {
          title: 'Suporte dedicado',
          description: 'Tenha acesso a suporte dedicado para tirar suas dúvidas',
          icon: Users,
        },
      ];

    return (
      <>
        <div className="pt-32">
        <Title
            main={[
              {
                value: 'Você reberá recursos exclusivos', 
              },
              {
                value: 'da Formação DEV',
                gradient: true
              },
            ]}
            secondary="Tenha acesso a recursos exclusivos para acelerar seu aprendizado"
            />
        </div>
        <FeatureCard features={defaultFeatures}/>
      </>
    )
}