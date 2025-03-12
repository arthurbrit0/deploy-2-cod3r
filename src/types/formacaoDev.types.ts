export interface FormacaoDevProduct {
    nome: string;
    descricao: string;
    imagemUrl: string;
    videoUrl?: string;
    icone: string;
    qtdeDeTrilhas: number;
    qtdeDeCursos: number;
    qtdeDeAulas: number;
    duracao: number;
    trilhas: FormacaoDevTrack[];
  }
  
  export interface FormacaoDevTrack {
    id: string;
    nome: string;
    descricao?: string;
    cursos: FormacaoDevCourse[];
    imagemURL: string;
    qtdeDeCursos: number;
    qtdeDeAulas: number;
    duracao: number;
    tecnologias?: { nome: string; url: string }[];
  }
  
  export interface FormacaoDevCourse {
    id: string;
    nome: string;
    descricao?: string;
    imagemURL: string;
    duracao: number;
    qtdeDeAulas: number;
    nivel?: number;
    temas: string[];
    autores: string[];
  }