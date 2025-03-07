import { notFound } from "next/navigation";
import { getExpressDevTrackById } from "@/services/formacaoExpressServices";
import TracksPage from "@/features/courses/pages/CoursesPage";
import { fromSeconds } from "@/utils/duration";

export default async function SingleTrackPage({ params }) {
  const { slug } = params;
  const track = await getExpressDevTrackById(slug);
  if (!track) notFound();

  const title = track.nome;
  const description = track.descricao ?? "";
  const image = track.imagemURL ?? "";
  const duration = fromSeconds(track.duracao);
  const level = "Iniciante"; 
  const lessonsCount = track.qtdeDeAulas;

  const curriculum = track.cursos.map((c) => ({
    title: c.nome,
    description: c.descricao?.replace(/<[^>]*>/g, "") ?? "",
    duration: Math.floor(c.duracao / 3600).toString(),
    lessonsCount: c.qtdeDeAulas,
    sections: [
      {
        title: "Detalhes",
        lessons: [
          {
            title: c.nome,
            description: c.descricao?.replace(/<[^>]*>/g, "") ?? "",
            duration: Math.floor(c.duracao / 3600).toString(),
          },
        ],
      },
    ],
  }));

  const courseData = {
    title,
    description,
    image,
    duration,
    level,
    lessonsCount,
    curriculum,
  };

  const trackStats = {
    trackName: track.nome,
    qtdeDeCursos: track.cursos.length,
    qtdeDeAulas: track.qtdeDeAulas,
    duracao: fromSeconds(track.duracao),
  };

  return <TracksPage courseData={courseData} trackStats={trackStats} />;
}
