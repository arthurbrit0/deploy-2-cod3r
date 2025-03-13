import FormacaoLandingPage from '@/features/landing/pages/FormacaoLanding'
import { getAllFormacaoDevCourses } from '@/services/formacaoDevServices'
import getParams from '@/utils/params'

export default async function Home() {
    const res = await getParams();
    const courses = await getAllFormacaoDevCourses();
  
    return (
      <FormacaoLandingPage 
        video={res['link-video-iniciante']}
        heroSlogan="É impossível resumir em uma frase, assista o vídeo e entenda porque a Formação é indispensável para VOCÊ!"
        qtyCourses={courses.length}
      />
    );
  }
