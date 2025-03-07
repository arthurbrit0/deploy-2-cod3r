import { BookOpenCheck, HeartHandshake, Rocket, Users2 } from "lucide-react";
import { FeatureCard } from "../../../../components/ui/feature-sections";

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
      ];

    return (
        <FeatureCard features={defaultFeatures}/>
    )
}