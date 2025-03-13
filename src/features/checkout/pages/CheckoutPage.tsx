"use client";

import React from 'react';
import Container from '@/features/shared/layouts/Container';
import Header from '@/features/shared/components/header/Header';
import Footer from '@/features/shared/components/footer';
import EadSection from '@/features/ead/components';
import BonusFeatures from '@/features/shared/components/bonus-features';
import Faq from '@/features/shared/components/faq';
import Section from '../../shared/layouts/SectionWrapper';
import TestimonialCarousel from '@/features/checkout/components/TestimonialsCheckout';
import { PricingCards } from '../components/Plans';
import Checkout, { Summary } from '@/features/checkout/components';

interface SelectedPlan {
  price: string;
  duration: string;
  total: string;
}

interface CheckoutSectionProps {
  summary: Summary;
  selectedPlan: SelectedPlan;
  onPlanSelect: (plan: SelectedPlan) => void;
}

const CheckoutSection: React.FC<CheckoutSectionProps> = ({ 
  summary, 
  selectedPlan, 
  onPlanSelect 
}) => {
  return (
    <div className="bg-black">
      <Header />
      <Section>
        <PricingCards onPlanSelect={onPlanSelect} selectedPlan={selectedPlan} />
      </Section>
      <Section backgroundUrl='/bg-depoimentos-2.svg'>
        <Checkout summary={summary} selectedPlan={selectedPlan} />
      </Section>
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
      <TestimonialCarousel />
      <Container className="py-16">
        <Faq />
      </Container>
      <Container className="py-16">
        <Footer />
      </Container>
    </div>
  );
};

export default CheckoutSection;