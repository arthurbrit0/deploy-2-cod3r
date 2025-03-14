import { LandingLayout } from '../../shared/layouts/Layout'
import Container from '@/features/shared/layouts/Container'
import Section from '../../shared/layouts/SectionWrapper'
import Hero from '@/features/shared/components/hero'
import Video from '@/features/shared/components/video'
// import Banner from '@/features/landing/components/banner'
import { FeaturesSection } from '@/features/landing/components/features/FeaturesSection'
import { TestimonialsSection } from '@/features/shared/components/testimonies/infinite-scroll/TestimonialsSection'
import { CommunitySection } from '@/features/landing/components/community/CommunitySection'
import VideoTestimonies from '@/features/shared/components/testimonies/video'
import Resource from '@/features/landing/components/resource'
// import Warranty from '@/components/warranty'
import Faq from '@/features/shared/components/faq'
import Subject from '@/features/landing/components/subject'
import Courses from '@/features/courses/components'

interface ExpressLandingProps {
  courses: any
  video: string
  heroSlogan: string
}

export default function ExpressLandingPage({ courses, video, heroSlogan }: ExpressLandingProps) {
  return (
    <LandingLayout>
      <Section backgroundUrl="/background.svg" className="md:bg-none bg-auto bg-center">
        <Hero slogan={heroSlogan} />
        <Video
          url={video}
          className="md:bg-[url('/background.svg')] bg-fill bg-center"
        />
        {/* <Banner qtyCourses={courses.length} /> */}
      </Section>
      <Container>
        <Subject />
      </Container>
      <Container>
        <Courses values={courses} />
      </Container>
      <Section
        style={{
          backgroundImage: `
            linear-gradient(to top, transparent 0%, transparent 0%, black 100%),
            linear-gradient(to right, #60a5fa, #db2777)
          `,
        }}
      >
        <Container>
          <FeaturesSection />
        </Container>
      </Section>
      <Container>
        <VideoTestimonies />
      </Container>
      <TestimonialsSection />
      <Container>
        <CommunitySection />
      </Container>
      <Container>
        <Resource />
      </Container>
      {/* <Container>
        <Warranty />
      </Container> */}
      <Container>
        <Faq />
      </Container>
    </LandingLayout>
  )
}
