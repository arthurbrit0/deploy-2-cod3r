import { FormacaoDevCourse, FormacaoDevProduct, FormacaoDevTrack } from "@/types/formacaoDev.types";
import { fetchJSON } from "./shared/fetchJSON";

export const productIds = [
    "humano-dev",
    "especialista-dev",
    "fundamentos-dev",
    "ia-dev",
    "mentoria-dev",
    "arquiteto-dev",
];

export interface FormacaoDevCourseWithProduct {
    id: string;
    nome: string;
    descricao?: string;
    duracao: number;
    qtdeDeAulas: number;
    imagemURL?: string;
    nivel?: number;
    autores?: string[];
    productName: string;
    trackId: string;
    trackName: string;
}

export interface ProductSummary {
    nome: string;
    descricao: string;
    icone: string;
}

export async function getFormacaoDevProductById(productId: string) {
    const url = `https://us-central1-teste-formacao-dev.cloudfunctions.net/produtos/${productId}`;
    return fetchJSON<FormacaoDevProduct>(url, {
        next: { revalidate: 3600 },
    });
}

export async function getAllFormacaoDevProductSummaries(): Promise<ProductSummary[]> {
    const results = await Promise.all(
      productIds.map(async (id) => {
        try {
          const product = await getFormacaoDevProductById(id);
          return { nome: product.nome, descricao: product.descricao, icone: product.icone };
        } catch (error) {
          console.error(`Error fetching product ${id}:`, error);
          return null;
        }
      })
    );
  
    return results.filter(Boolean) as ProductSummary[];
  }

export async function getFormacaoDevTrack(
    productId: string,
    trackId: string
    ): Promise<FormacaoDevTrack | null> {
    const product = await getFormacaoDevProductById(productId);
    return product.trilhas.find((t) => t.id === trackId) ?? null;
}

export async function getFormacaoDevTracks(
    productId: string
    ): Promise<FormacaoDevTrack[]> {
    const product = await getFormacaoDevProductById(productId);
    return product.trilhas;
}

export async function getFormacaoDevCourse(
    productId: string,
    trackId: string,
    courseId: string
    ): Promise<FormacaoDevCourse | null> {
    const track = await getFormacaoDevTrack(productId, trackId);
    if (!track) return null;
    return track.cursos.find((c) => c.id === courseId) ?? null;
}

export async function getFormacaoDevCourses(
    productId: string,
    trackId: string
): Promise<FormacaoDevCourse[]> {
    const track = await getFormacaoDevTrack(productId, trackId);
    if (!track) return [];
    return track.cursos;
}

export async function getFormacaoDevSummary() {
    const allTracks = await getAllFormacaoDevTracks();
    const allCourses = await getAllFormacaoDevCourses();
  
    const totalTracks = allTracks.length;
    const totalCourses = allCourses.length;
    const totalHours = allCourses.reduce((sum, course) => sum + course.duracao, 0);
    const totalClasses = allCourses.reduce(
      (sum, course) => sum + course.qtdeDeAulas,
      0
    );
  
    return {
      totalTracks,
      totalCourses,
      totalHours,
      totalClasses,
    };
  }


export interface FormacaoDevTrackWithProduct extends FormacaoDevTrack {
    productName: string;
    productId: string;
}
    
export async function getAllFormacaoDevTracks(): Promise<FormacaoDevTrackWithProduct[]> {
    const results = await Promise.all(
        productIds.map(async (id) => {
        try {
            const product = await getFormacaoDevProductById(id);
            if (!product) return [];
            return product.trilhas.map((track) => ({
                ...track,
                productName: product.nome,
                productId: id,
            }));
        } catch (error) {
            console.error(`Error fetching product ${id}:`, error);
            return [];
        }
        })
    );
    return results.flat();
}

export async function getAllFormacaoDevCourses(): Promise<FormacaoDevCourseWithProduct[]> {
    const products = await Promise.all(
    productIds.map((id) => getFormacaoDevProductById(id))
    );

    const courses: FormacaoDevCourseWithProduct[] = [];

    for (const product of products) {
    if (!product) continue;
    for (const track of product.trilhas) {
        for (const course of track.cursos) {
        courses.push({
            ...course,
            productName: product.nome,
            trackId: track.id,
            trackName: track.nome,
        });
        }
    }
    }

    return courses;
}