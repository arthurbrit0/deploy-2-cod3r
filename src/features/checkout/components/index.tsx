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
  MessageCircle,
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
    economy: string;
  };
}

function CheckoutPage({ summary, selectedPlan }: CheckoutPageProps) {
  const formattedHours = Math.ceil(summary.totalHours / 3600);

  const features = useMemo(() => [
    {
      text: `+${summary.totalClasses} aulas em vídeo`,
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
      text: `+${formattedHours} horas de conteúdo`,
      Icon: Clock,
    },
    { 
      text: 'Mentorias ao vivo',
      Icon: Users 
    },
    { 
      text: 'Projetos em equipe',
      Icon: Users 
    },
    { 
      text: 'Projeto open-source',
      Icon: GitBranch 
    },
    { 
      text: 'Suporte especializado',
      Icon: LifeBuoy 
    },
  ], [summary, formattedHours]);

  return (
    <div className="min-h-screen bg-none text-white p-6 pb-12" id="checkout">
      <div className="max-w-6xl mx-auto space-y-10">
        <Title 
          main={[
            { value: 'Venha aprender com a' },
            { value: 'Cod3r', gradient: true }
          ]}
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#202024] rounded-lg h-[400px] relative overflow-hidden">
            <BackgroundBeams className="absolute inset-0" />
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full mt-4">
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/logo_cod3r.png"
                  alt="Cod3r"
                  width={64}
                  height={64}
                  className="bg-white/30 shadow-xl p-3 rounded-xl"
                />
                <div>
                  <h2 className="text-3xl font-bold">Formação DEV</h2>
                  {selectedPlan.price !== "Selecione seu plano" &&
                    <span className="text-lg text-gray-300">{selectedPlan.duration}</span>
                  }
                </div>
              </div>
              <div className="flex items-baseline gap-3 mb-6">
                {selectedPlan.price !== "Selecione seu plano" &&
                  <span className="text-2xl text-gray-300">12x de R$</span>
                }
                <span className="text-5xl font-bold tracking-tight">{selectedPlan.price}</span>
              </div>
              {selectedPlan.price !== "Selecione seu plano" && (
                <div className="text-gray-300 text-xl font-semibold mb-12 flex flex-col">
                  Ou {selectedPlan.total} à vista 
                  <span className="mt-1 ml-2 text-md text-emerald-300 font-bold bg-emerald-400/50 px-3 py-1 rounded-xl">
                    {selectedPlan.economy}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="bg-[#202024] rounded-lg p-6 h-[400px]">
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
        </div>

        <div className="bg-[#00291D] rounded-xl p-6 flex items-center justify-center">
          <div className="flex items-center max-w-3xl">
            <div className="bg-[#04D361]/10 p-4 rounded-full flex-shrink-0">
              <Shield className="text-[#04D361] w-10 h-10" />
            </div>
            <div className="ml-6">
              <h4 className="text-2xl font-bold text-[#04D361]">Garantia de 15 dias</h4>
              <p className="text-[#E1E1E6] text-lg">
                Se não gostar ou ver que não é para você, devolvemos o seu dinheiro!
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="h-[2px] flex-1 bg-gray-200 opacity-50" />
          <h2 className="mx-4 text-2xl font-bold text-center">
            Assinando a Formação DEV, você receberá:
          </h2>
          <div className="h-[2px] flex-1 bg-gray-200 opacity-50" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map(({ text, Icon }, index) => (
            <div
              key={index}
              className="bg-[#202024] p-6 rounded-lg flex flex-col items-center text-center hover:bg-zinc-800 transition-colors"
            >
              <div className="bg-purple-500/10 p-3 rounded-lg mb-4">
                <Icon className="w-6 h-6 text-purple-500" />
              </div>
              <span className="text-lg font-bold">{text}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#202024] rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-xl">
              <h3 className="text-2xl font-bold mb-3">Ficou com alguma dúvida?</h3>
              <p className="text-[#C4C4CC] text-lg">
                Envie uma mensagem e converse com uma pessoa real. Nosso time está pronto para te ajudar!
              </p>
            </div>
            <button className="flex items-center gap-3 bg-[#00875F] text-white font-bold hover:bg-emerald-500 px-8 py-4 rounded-lg transition-colors text-lg group whitespace-nowrap">
              <div className="bg-white/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              FALE CONOSCO NO WHATSAPP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;