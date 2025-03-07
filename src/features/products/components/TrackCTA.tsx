"use client";

import Container from "@/features/shared/layouts/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface TrackCtaProps {
  title: string;
}

export function TrackCta({ title }: TrackCtaProps) {
  return (
    <section className="py-16 bg-black0">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Comece sua jornada hoje mesmo
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Junte-se a milhares de alunos e transforme sua carreira com a trilha de {title}
          </p>
          <Button 
            size="lg" 
            className="bg-emerald-500 hover:bg-emerald-600"
          >
            Começar agora
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
}