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
import Structure from '@/features/shared/components/structure'

interface FormacaoLandingProps {
  video: string
  heroSlogan: string
}

export default function FormacaoLandingPage({ video, heroSlogan }: FormacaoLandingProps) {
  return (
    <LandingLayout>
      <Section className="pt-16" backgroundUrl="/background.svg">
        <Hero slogan={heroSlogan} />
        <Video
          url={video}
          className="bg-none md:bg-[url('/background.svg')] bg-fill bg-center"
        />
      </Section>
      <Banner/>
      <Container>
        <Stats />
      </Container>
      <Section backgroundUrl="/bg-depoimentos.svg">
        <Container>
          <ProductsSection />
        </Container>
      </Section>
      <Section backgroundUrl='/bg.svg' style={{ backgroundPosition: 'top' }}>
        <TrackAudience />
      </Section>
      <Section backgroundUrl='/bg-quantificador.svg' style={{ backgroundPosition: 'top' }}>
        <Structure />
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
      <Section backgroundUrl='/bg-quantificador.svg'>
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
