import getCourses from '@/utils/course'
import ExpressLandingPage from '@/features/landing/pages/ExpressLanding'

export default async function Home() {
    const courses = await getCourses()
    return (
        <ExpressLandingPage 
            courses={courses} 
            video="teste"
            heroSlogan="Aprenda a programar com a melhor plataforma de ensino"
        />
    )
}
