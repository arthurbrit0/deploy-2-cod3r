import React from 'react'
// import CheckoutForm from '@/features/checkout/components'
// import Products from '@/features/shared/components/products'
import Container from '@/features/shared/layouts/Container'
import Header from '@/features/shared/components/header/Header'
import Footer from '@/features/shared/components/footer'
import EadSection from '@/features/ead/components'
import BonusFeatures from '@/features/shared/components/bonus-features'
import Faq from '@/features/shared/components/faq'
import Section from '../../shared/layouts/SectionWrapper'
import TestimonialCarousel from '@/features/checkout/components/TestimonialsCheckout'
import { PricingCards } from '../components/Plans'
import Checkout from '@/features/checkout/components/teste'

const CheckoutSection = () => {
  return (
    <div className="bg-black">
        <Header />
        <Section>
          <PricingCards />
        </Section>
        <Section backgroundUrl='/bg-depoimentos-2.svg'>
          <Checkout />
        </Section>
        {/* <Section backgroundUrl='/bg-quantificador.svg'>
          <Teste />
        </Section> */}
        {/* <Section backgroundUrl="/bg-depoimentos-2.svg">  
          <Container>
              <Products />
          </Container>
        </Section> */}
        <Section backgroundUrl="/bg.svg" style={{ backgroundPosition: 'top' }}>
          <Container>
            <EadSection />
          </Container>
        </Section>
        <Section backgroundUrl="/bg-quantificador.svg">
          <Container>
            <BonusFeatures />
          </Container>
        </Section>
        <Container>
          <TestimonialCarousel />
        </Container>
        <Container className="py-16">
          <Faq />
        </Container>
        <Container className="py-16">
            <Footer />
        </Container>
    </div>
  )
}

export default CheckoutSection