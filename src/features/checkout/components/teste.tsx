"use client";

import React, { useMemo } from 'react';
import {
  Shield,
  Video,
  BookOpen,
  Layers,
  Clock,
  Users,
  GitBranch,
  LifeBuoy,
} from 'lucide-react';
import Image from 'next/image';
import Title from '../../shared/components/Title';
import { BackgroundBeams } from "@/components/ui/background-beams";

export interface Summary {
  totalTracks: number;
  totalCourses: number;
  totalHours: number;
  totalClasses: number;
}

interface CheckoutPageProps {
  summary: Summary;
  selectedPlan: {
    price: string;
    duration: string;
    total: string;
  };
}

function CheckoutPage({ summary, selectedPlan }: CheckoutPageProps) {
  const formattedHours = Math.ceil(summary.totalHours / 3600);

  const dynamicFeatures = useMemo(() => [
    {
      text: `Mais de ${summary.totalClasses} aulas em vídeo`,
      Icon: Video,
    },
    {
      text: `${summary.totalCourses} cursos práticos`,
      Icon: BookOpen,
    },
    {
      text: `${summary.totalTracks} trilhas organizadas`,
      Icon: Layers,
    },
    {
      text: `Mais de ${formattedHours} horas de conteúdo`,
      Icon: Clock,
    },
  ], [summary, formattedHours]);

  const staticFeatures = useMemo(() => [
    { text: 'Mentorias ao vivo', Icon: Users },
    { text: 'Projetos em equipe', Icon: Users },
    { text: 'Projeto open-source', Icon: GitBranch },
    { text: 'Suporte especializado', Icon: LifeBuoy },
  ], []);

  const features = useMemo(() => [...dynamicFeatures, ...staticFeatures], [dynamicFeatures, staticFeatures]);

  return (
    <div className="min-h-screen bg-none text-white p-6 pb-12" id="checkout">
      <div className="max-w-6xl mx-auto space-y-12">
        <Title 
          main={[
            { value: 'Venha aprender com a' },
            { value: 'Cod3r', gradient: true }
          ]}
        />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#202024] rounded-lg flex flex-col relative">
            <div className="relative h-64">
              <BackgroundBeams className="absolute inset-0" />
              <div className="relative z-10 p-8 flex flex-col items-center text-center pt-12">
                <div className="flex items-center gap-3 mb-4">
                  <Image 
                    src="/logo_cod3r.png"
                    alt="Cod3r"
                    width={48}
                    height={48}
                    className="bg-white/30 shadow-xl p-2 rounded-xl"
                  />
                  <div>
                    <h2 className="text-2xl font-bold">Formação DEV</h2>
                    <span className="text-sm text-gray-300">{selectedPlan.duration}</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg text-gray-300">12x de R$</span>
                  <span className="text-5xl font-bold">{selectedPlan.price}</span>
                </div>
                <div className="text-gray-300 font-semibold text-sm">
                  Ou {selectedPlan.total} à vista
                </div>
              </div>
            </div>
            <div className="relative -mt-12 mx-6 z-20">
              <div className="bg-zinc-900/80 rounded-xl p-6 shadow-xl border border-purple-500/20 backdrop-blur-sm">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3">Confira o que você irá receber</h3>
                  <p className="text-sm text-gray-400">Acesso completo a todo conteúdo da plataforma</p>
                </div>
              </div>
            </div>
            <div className="p-8 pt-4 mt-auto">
              <div className="grid grid-cols-2 gap-3">
                {features.map(({ text, Icon }, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-[#323238]/50 p-4 rounded-lg"
                  >
                    <Icon className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-[#202024] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Complete seus dados</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full bg-[#282824] rounded p-4 text-white placeholder-[#7C7C8A] focus:outline-none focus:ring-2 focus:ring-[#996DFF]"
                />
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <span className="flex items-center gap-1">
                      <Image
                        src="https://flagcdn.com/w20/br.png"
                        alt="BR"
                        width={20}
                        height={20}
                      />
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Seu número de WhatsApp"
                    className="w-full bg-[#282824] rounded p-4 pl-12 text-white placeholder-[#7C7C8A] focus:outline-none focus:ring-2 focus:ring-[#996DFF]"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  className="w-full bg-[#282824] rounded p-4 text-white placeholder-[#7C7C8A] focus:outline-none focus:ring-2 focus:ring-[#996DFF]"
                />
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="rounded bg-[#282824] border-[#323238]"
                  />
                  <label htmlFor="terms" className="text-sm text-[#7C7C8A]">
                    Concordo com os{' '}
                    <a href="/termos" className="underline">Termos</a> e{' '}
                    <a href="politicas" className="underline">Política de privacidade</a>
                  </label>
                </div>
                <button className="w-full bg-[#996DFF] hover:bg-[#8257E5] text-white font-bold py-4 px-6 rounded transition-colors">
                  IR PARA O PAGAMENTO
                </button>
              </div>
            </div>
            <div className="bg-[#00291D] rounded p-4 flex items-start gap-3">
              <Shield className="text-[#04D361] flex-shrink-0" />
              <div>
                <h4 className="font-bold text-[#04D361] mb-1">Garantia de 15 dias</h4>
                <p className="text-[#E1E1E6] text-sm">
                  Se não gostar ou ver que não é para você, devolvemos o seu dinheiro!
                </p>
              </div>
            </div>
            <div className="bg-[#202024] rounded-lg p-6">
              <h3 className="text-lg mb-2">Ficou com alguma dúvida?</h3>
              <p className="text-[#C4C4CC] text-sm mb-4">
                Envie uma mensagem e converse com uma pessoa real.
              </p>
              <button className="w-full bg-[#00875F] text-white font-bold hover:bg-emerald-500 px-6 py-3 rounded transition-colors">
                FALE CONOSCO NO WHATSAPP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;