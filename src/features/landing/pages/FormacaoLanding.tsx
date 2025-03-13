import { LandingLayout } from '../../shared/layouts/Layout'
import Container from '@/features/shared/layouts/Container'
import Section from '../../shared/layouts/SectionWrapper'
import Hero from '@/features/shared/components/hero'
import Video from '@/features/shared/components/video'
import Stats from '@/features/landing/components/stats'
import ProductsSection from '@/features/shared/components/products'
import { TestimonialsSection } from '@/features/shared/components/testimonies/infinite-scroll/TestimonialsSection'
import { CommunitySection } from '@/features/landing/components/community/CommunitySection'
import VideoTestimonies from '@/features/shared/components/testimonies/video'
import Faq from '@/features/shared/components/faq'
import EadSection from '@/features/ead/components'
import BonusFeatures from '@/features/shared/components/bonus-features'
import Cta from '@/features/shared/components/cta'
import { TrackAudience } from '@/features/products/components/TrackAudience'
import Banner from '../components/banner'

interface FormacaoLandingProps {
  video: string
  heroSlogan: string
  qtyCourses: number
}

export default function FormacaoLandingPage({ video, heroSlogan, qtyCourses }: FormacaoLandingProps) {
  return (
    <LandingLayout>
      <Section className="py-8" backgroundUrl="/background.svg">
        <Hero slogan={heroSlogan} />
        <Video
          url={video}
          className="bg-none md:bg-[url('/background.svg')] bg-fill bg-center"
        />
      </Section>
      <Banner qtyCourses={qtyCourses} />
      <Container>
        <Stats />
      </Container>
      <Section backgroundUrl="/bg-depoimentos.svg">
        <Container>
          <ProductsSection />
        </Container>
      </Section>
      <Section>
        <TrackAudience />
      </Section>
      <Section backgroundUrl="/bg-roxo-verde.svg" style={{ backgroundPosition: 'top' }}>
        <Container>
          <EadSection />
        </Container>
      </Section>
      <Container>
        <BonusFeatures />
      </Container>
        <Cta />
      <Container>
        <VideoTestimonies />
      </Container>
      <TestimonialsSection />
      <Section backgroundUrl="/bg.svg" style={{ backgroundPosition: 'top' }}>
        <Container>
          <CommunitySection />
        </Container>
      </Section>
      <Container>
        <Faq />
      </Container>
    </LandingLayout>
  )
}
