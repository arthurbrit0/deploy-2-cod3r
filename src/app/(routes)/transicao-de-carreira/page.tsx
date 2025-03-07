import getCourses from '@/utils/course'
import ExpressLandingPage from '@/features/landing/pages/ExpressLanding'

export default async function Home() {
    const courses = await getCourses()
    return (
        <ExpressLandingPage
            heroSlogan="O caminho mais rápido para a sua transição de carreira"
            courses={courses}
            video="https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=c436988a-0636-4c6d-88d2-24926306893a"
        />
    )
}
