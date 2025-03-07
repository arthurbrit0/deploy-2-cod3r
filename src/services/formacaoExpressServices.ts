import { ExpressDevTrack } from "@/types/formacaoExpress.types";
import { fetchJSON } from "./shared/fetchJSON";

  const EXPRESS_TRACK_IDS = [
    "fundamentos-express",
    "ferramentas-express",
    "frontend-express",
    "backend-express",
    "aplicacao-express",
  ];
  
  export async function getExpressDevTrackById(trackId: string) {
    const url = `https://us-central1-formacao-dev.cloudfunctions.net/trilhas/${trackId}`;
    return fetchJSON<ExpressDevTrack>(url, {
      next: { revalidate: 3600 },
    });
  }
  
  export async function getAllExpressDevTracks() {
    const promises = EXPRESS_TRACK_IDS.map((id) =>
      getExpressDevTrackById(id)
    );
    return Promise.all(promises);
  }
  
  export async function getAllExpressDevCourses() {
    const tracks = await getAllExpressDevTracks();
    return tracks.flatMap((track) => {
      return track.cursos.map((course) => ({
        ...course,
        trackId: track.id,
        trackName: track.nome,
      }));
    });
  }

  export async function getExpressDevCourseById(trackId: string, courseId: string) {
    const track = await getExpressDevTrackById(trackId);
    return track.cursos.find((c) => c.id === courseId) ?? null;
  }
  