import { FormacaoDevProduct } from "@/types/formacaoDev.types";
import { Blocks, Brain, Rocket, Users } from "lucide-react";

const iconMapping: Record<string, React.ElementType> = {
  "fundamentos-dev": Blocks,
  "especialista-dev": Rocket,
  "arquiteto-dev": Brain,
  "ia-dev": Users,
  "humano-dev": Users,
  "mentoria-dev": Users,
};

export interface SectionData {
  title: string;
  icon: React.ElementType;
  descricao: string;
  tracks: {
    title: string;
    descricao?: string;
    duration: number;
    items: {
      number: number;
      title: string;
      duration: number;
      descricao?: string;
    }[];
  }[];
}

export function mapProductToSection(product: FormacaoDevProduct): SectionData {
  return {
    title: "Trilha " + product.nome,
    icon: iconMapping[product.icone] || Users,
    descricao: product.descricao,
    tracks: product.trilhas.map((trilha) => {
      return {
        title: "Trilha " + trilha.nome,
        descricao: trilha.descricao,
        duration: trilha.duracao,
        items: trilha.cursos.map((curso, index) => ({
          number: index + 1,
          title: curso.nome,
          duration: curso.duracao,
          descricao: curso.descricao,
        })),
      };
    }),
  };
}
