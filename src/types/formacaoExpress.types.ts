export interface ExpressDevTrack {
    id: string;
    nome: string;
    qtdeDeCursos: number;
    qtdeDeAulas: number;
    duracao: number;
    descricao?: string;
    imagemURL?: string;
    tecnologias?: { nome: string; url: string }[];
    cursos: ExpressDevCourse[];
  }
  
export interface ExpressDevCourse {
    id: string;
    nome: string;
    imagemURL?: string;
    duracao: number;
    qtdeDeAulas: number;
    descricao?: string;
    nivel?: number;
  }
  