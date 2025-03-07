import React from 'react';
import HeroSection from '../components/ead-page/HeroSection';
import TechStack from '../components/ead-page/TechStack';
import Roadmap from '../components/ead-page/Roadmap';
import Community from '../components/ead-page/Community';
import GithubActivity from '../components/ead-page/GithubActivity';
import JoinProject from '../components/ead-page/JoinProject';
import Header from '@/features/shared/components/header/Header';
import Section from '../../shared/layouts/SectionWrapper';
import Mentorship from '@/features/ead/components/ead-page/Mentorship';
import TestimonialsSection from '@/features/ead/components/ead-page/Testimonials';
import Footer from '@/features/shared/components/footer';
import Container from '@/features/shared/layouts/Container';

const ProjetoEad = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-[#0a0b1e] via-[#1a1b3b] to-[#0a0b1e] text-white">
      <div className="relative">
        <Header />
        <Section backgroundUrl='/bg-depoimentos.svg' style={{backgroundPosition: 'bottom'}}>
          <HeroSection />
        </Section>
        <TechStack />
        <Section backgroundUrl='/bg-roxo-verde.svg'>
          <Mentorship />
        </Section>
        <Roadmap />
        <Section
            style={{
              backgroundImage: `linear-gradient(to bottom, #0a0b1e, transparent), url('/bg-depoimentos.svg')`,
              backgroundPosition: `top, bottom`,
              backgroundSize: `100% 50%, cover`,
              backgroundRepeat: 'no-repeat'
            }}
            >
            <Community />
            <GithubActivity />
        </Section>
        <TestimonialsSection />
        <JoinProject />
      </div>
    </div>
    <div className='bg-black'>
      <Container className="py-16 bg-black">
        <Footer />
      </Container>
    </div>
    </>
  );
};

export default ProjetoEad;