import { notFound } from "next/navigation";
import { getFormacaoDevTrack } from "@/services/formacaoDevServices";
import TracksPage from "@/features/courses/pages/CoursesPage";
import { fromSeconds } from "@/utils/duration";

export default async function SingleTrackPage({ params }) {
  const { productId, trackId } = params;

  const track = await getFormacaoDevTrack(productId, trackId);
  if (!track) notFound();

  const trackStats = {
    trackName: track.nome,
    qtdeDeCursos: track.qtdeDeCursos,
    qtdeDeAulas: track.qtdeDeAulas,
    duracao: track.duracao,
  };

  const courseData = {
    title: track.nome,
    description: track.descricao ?? "",
    image: track.imagemURL ?? "",
    duration: fromSeconds(track.duracao),
    level: "Iniciante",
    lessonsCount: track.qtdeDeAulas,
    curriculum: track.cursos.map((c) => ({
      title: c.nome,
      description: c.descricao?.replace(/<[^>]*>/g, "") ?? "",
      duration: fromSeconds(c.duracao),
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
    })),
  };

  return (
    <TracksPage
      courseData={courseData}
      trackStats={trackStats}
    />
  );
}
