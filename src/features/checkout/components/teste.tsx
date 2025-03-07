"use client"

import React, { useState } from 'react';
import { BookOpen, Building, Cloud, Code2, Laptop, Shield, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Title from '../../shared/components/Title';
import { BackgroundBeams } from "@/components/ui/background-beams";

function CheckoutPage() {
  const [currentAreaIndex, setCurrentAreaIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const courseAreas = [
    {
      title: "Fundamentos",
      icon: <Laptop className="w-8 h-8" />,
      description: "Desenvolvimento de interfaces modernas e responsivas",
      mainTech: "React • Next.js • TypeScript",
      features: ["Components", "Hooks", "State", "Props", "Context", "TypeScript"],
      techLogos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
      ]
    },
    {
      title: "Especialista",
      icon: <Code2 className="w-8 h-8" />,
      description: "Arquitetura escalável e APIs robustas",
      mainTech: "Node.js • NestJS • PostgreSQL",
      features: [
        "REST APIs",
        "GraphQL",
        "WebSockets",
        "Microservices",
        "Clean Code",
        "Design Patterns"
      ],
      techLogos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      ]
    },
    {
      title: "Arquiteto",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Apps nativos para iOS e Android",
      mainTech: "React Native • Flutter • Firebase",
      features: [
        "Native APIs",
        "Performance",
        "Navigation",
        "State Management",
        "Native Modules",
        "App Store Deploy"
      ],
      techLogos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
      ]
    },
    {
      title: "IA",
      icon: <Cloud className="w-8 h-8" />,
      description: "Infraestrutura e deploy automatizado",
      mainTech: "Docker • Kubernetes • AWS",
      features: [
        "Machine Learning",
        "Neural Networks",
        "Computer Vision",
        "NLP",
        "Deep Learning",
        "Data Science"
      ],
      techLogos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
      ]
    },
    {
      title: "Humano",
      icon: <Building className="w-8 h-8" />,
      description: "Padrões e boas práticas de desenvolvimento",
      mainTech: "SOLID • Design Patterns • DDD",
      features: [
        "Leadership",
        "Communication",
        "Team Work",
        "Problem Solving",
        "Soft Skills",
        "Career Growth"
      ],
      techLogos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
      ]
    },
    {
      title: "Mentoria",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Base sólida em programação",
      mainTech: "JavaScript • Python • Java",
      features: [
        "Career Path",
        "Code Review",
        "Best Practices",
        "Architecture",
        "Technical Support",
        "Project Guidance"
      ],
      techLogos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      ]
    }
  ];

  const nextArea = () => {
    setSlideDirection('right');
    setCurrentAreaIndex((prev) => (prev + 1) % courseAreas.length);
  };

  const prevArea = () => {
    setSlideDirection('left');
    setCurrentAreaIndex((prev) => (prev - 1 + courseAreas.length) % courseAreas.length);
  };

  const currentArea = courseAreas[currentAreaIndex];
  
  return (
    <div className="min-h-screen bg-none text-white p-6 pb-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <Title 
          main={[
            { value: 'Venha aprender com a' },
            { value: 'Cod3r', gradient: true }
          ]}
        />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#202024] rounded-lg overflow-hidden">
            <div className="relative h-[32vh]">
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
                    <span className="text-sm text-gray-300">Acesso anual</span>
                  </div>
                </div>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-lg text-gray-300">12x de R$</span>
                  <span className="text-5xl font-bold">100,00</span>
                </div>
                <div className="text-gray-300 font-semibold text-sm">Ou R$1.300 à vista</div>
              </div>
            </div>
            <div className="relative -mt-20 mx-6">
              <div className="bg-zinc-900/80 rounded-xl p-6 shadow-xl border border-purple-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={prevArea}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <div 
                    key={currentAreaIndex}
                    className={`text-center flex-1 transform transition-transform duration-500 ease-out ${
                      slideDirection === 'right' ? 'animate-slideFromRight' : 'animate-slideFromLeft'
                    }`}
                  >
                    <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400 w-fit mx-auto mb-3">
                      {currentArea.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{currentArea.title}</h3>
                    <p className="text-sm text-gray-400">{currentArea.description}</p>
                  </div>
                  
                  <button 
                    onClick={nextArea}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-8 pt-12">
              <div className="space-y-8">
                <div 
                  key={`logos-${currentAreaIndex}`}
                  className={`flex justify-center gap-4 transform transition-transform duration-500 ease-out ${
                    slideDirection === 'right' ? 'animate-slideFromRight' : 'animate-slideFromLeft'
                  }`}
                >
                  {currentArea.techLogos.map((logo, index) => (
                    <div
                      key={index}
                      className="relative w-12 h-12 bg-[#323238] rounded-lg p-2 hover:scale-105 transition-transform"
                    >
                      <Image
                        src={logo}
                        alt={`Tech ${index + 1}`}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
                <div 
                  key={`features-${currentAreaIndex}`}
                  className={`transform transition-transform duration-500 ease-out ${
                    slideDirection === 'right' ? 'animate-slideFromRight' : 'animate-slideFromLeft'
                  }`}
                >
                  <h4 className="text-sm font-medium text-gray-400 mb-3">O que você vai aprender:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {currentArea.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-2 bg-[#323238]/50 p-3 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
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
                      <Image src="https://flagcdn.com/w20/br.png" alt="BR" width={20} height={20} />
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
                  <input type="checkbox" id="terms" className="rounded bg-[#282824] border-[#323238]" />
                  <label htmlFor="terms" className="text-sm text-[#7C7C8A]">
                    Concordo com os <a href="/termos" className="underline">Termos</a> e <a href="politicas" className="underline">Política de privacidade</a>
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