import { notFound } from "next/navigation";
import { getFormacaoDevProductById } from "@/services/formacaoDevServices";
import { ProductPageClient } from "@/features/products/pages/ProductsPage";

export default async function ProductPage({ params }: { params: Promise<{ productId: string}>}) {
  const { productId } = await params;
  
  const product = await getFormacaoDevProductById(productId);
  if (!product) {
    notFound();
  }

  const mappedProduct = {
    title: product.nome,
    description: product.descricao || "",
    image: product.imagemUrl,
    videoUrl: product.videoUrl,
    qtdeDeTrilhas: product.qtdeDeTrilhas,
    qtdeDeCursos: product.qtdeDeCursos,
    qtdeDeAulas: product.qtdeDeAulas,
    duracao: product.duracao,
    tracks: product.trilhas.map((track) => ({
      id: track.id,
      title: track.nome,
      description: track.descricao ?? "",
      image: track.imagemURL,
      tecnologias: track.tecnologias,
      qtdeDeCursos: track.qtdeDeCursos, 
      qtdeDeAulas: track.qtdeDeAulas, 
      duracao: Math.floor(track.cursos.reduce((acc, c) => acc + c.duracao, 0) / 3600),
      courses: track.cursos.map((c) => ({
        id: c.id,
        title: c.nome,
        description: c.descricao?.replace(/<[^>]+>/g, "") ?? "",
        duration: `${Math.floor(c.duracao / 3600)} horas`,
        level: mapNivelToStr(c.nivel),
      })),
    })),
  };
  

  return <ProductPageClient product={mappedProduct} />;
}

function mapNivelToStr(nivel?: number) {
  if (nivel === 1) return "Iniciante";
  if (nivel === 2) return "Intermediário";
  return "Indefinido";
}