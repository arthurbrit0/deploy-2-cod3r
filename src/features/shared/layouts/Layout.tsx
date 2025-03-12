import React, { ReactNode } from 'react'
import Header from '../components/header/Header'
import Footer from '@/features/shared/components/footer'
import Container from '@/features/shared/layouts/Container'
import WhatsAppLink from '@/features/shared/components/WhatsAppLink'

interface LandingLayoutProps {
  children: ReactNode
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    
    <div className="flex flex-col min-h-screen bg-black">
      <Header />

      <main className="flex-1 flex flex-col pb-14">
        {children}
      </main>
      <Container className="py-24">
        <Footer />
      </Container>

      <WhatsAppLink className="fixed bottom-3 right-3 md:bottom-7 md:right-7 z-20" />
    </div>
  )
}