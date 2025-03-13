import { GitBranchIcon, Hammer, Headset, MessageSquareText,ScrollText,  Users, Video} from "lucide-react";
import { FeatureCard } from "../../../../components/ui/feature-sections";
import Title from "@/features/shared/components/Title";
import { IconCertificate } from "@tabler/icons-react";

interface Feature {
    title: string;
    description: string;
    icon: React.ElementType;
  }

export default function StatsSection() {

    const defaultFeatures: Feature[] = [
        {
          title: "Mentorias ao vivo",
          description: "Aulas ao vivo com muitas interações em grupo pelo Google Meet",
          icon: Video,
        },
        {
          title: "Projeto Open-Source",
          description: "Participe de fato de um projeto real diferente de tudo que já fez",
          icon: GitBranchIcon,
        },
        {
          title: "Suporte Dedicado",
          description: "Conte com um time de especialistas para tirar todas as suas dúvidas.",
          icon: Headset,
        },
        {
          title: "Comunidade Exclusiva",
          description: "Troque experiências e faça networking com pessoas do mundo todo.",
          icon: MessageSquareText,
        },
        {
          title: 'Projetos em equipe',
          description: 'Tenha a possibilidade de desenvolver projetos em grupo aprendendo e ensinando',
          icon: Users,
        },
        {
          title: 'Certificados',
          description: 'Certificados individuais por curso, trilha e geral em português e inglês.',
          icon: IconCertificate,
        },
        {
          title: 'Projetos reais',
          description: 'Várias aplicações reais serão construídas do zero durante toda a jornada',
          icon: Hammer,
        },
        {
          title: 'Fórum de discussão',
          description: 'Interaja com a equipe de professores e outros alunos sobre os assuntos estudados',
          icon: ScrollText,
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