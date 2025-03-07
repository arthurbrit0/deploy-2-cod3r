"use client"

import React, { useState } from 'react';
import { BookOpen, Building, Cloud, Code2, Laptop, Shield, Smartphone, ChevronRight, ChevronDown, Folder, FolderOpen } from 'lucide-react';
import Image from 'next/image';
import Title from '../../shared/components/Title';

function CheckoutPage() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const courseAreas = [
    {
      title: "Fundamentos",
      icon: <Laptop className="w-5 h-5" />,
      description: "Desenvolvimento de interfaces modernas e responsivas",
      mainTech: "React • Next.js • TypeScript",
      topics: ["Components", "Hooks", "State", "Props", "Context", "TypeScript"],
      techLogos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
      ]
    },
    {
      title: "Especialista",
      icon: <Code2 className="w-5 h-5" />,
      description: "Arquitetura escalável e APIs robustas",
      mainTech: "Node.js • NestJS • PostgreSQL",
      topics: ["REST", "GraphQL", "WebSockets", "Microservices", "Clean Code"],
      techLogos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      ]
    },
    {
      title: "Arquiteto",
      icon: <Smartphone className="w-5 h-5" />,
      description: "Apps nativos para iOS e Android",
      mainTech: "React Native • Flutter • Firebase",
      topics: ["Native APIs", "Performance", "Navigation", "State Management"],
      techLogos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
      ]
    },
    {
      title: "IA",
      icon: <Cloud className="w-5 h-5" />,
      description: "Infraestrutura e deploy automatizado",
      mainTech: "Docker • Kubernetes • AWS",
      topics: ["Machine Learning", "Neural Networks", "Computer Vision", "NLP"],
      techLogos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
      ]
    },
    {
      title: "Humano",
      icon: <Building className="w-5 h-5" />,
      description: "Padrões e boas práticas de desenvolvimento",
      mainTech: "SOLID • Design Patterns • DDD",
      topics: ["Leadership", "Communication", "Team Work", "Problem Solving"],
      techLogos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
      ]
    },
    {
      title: "Mentoria",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Base sólida em programação",
      mainTech: "JavaScript • Python • Java",
      topics: ["Career Path", "Code Review", "Best Practices", "Architecture"],
      techLogos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      ]
    }
  ];

  const toggleExpand = (title: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };
  
  return (
    <div className="min-h-screen bg-none text-white mb-12 p-6 pb-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <Title 
          main={[
            {
              value: 'Venha aprender com a'
            },
            {
              value: 'Cod3r',
              gradient: true
            }
          ]}
        />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#202024] rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500/70 to-pink-500/70 p-6">
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold flex items-center gap-2">
                  <Image 
                    src="/logo_cod3r.png"
                    alt="Cod3r"
                    width={32}
                    height={32}
                    className="bg-white/30 shadow-xl p-1 rounded-lg"
                  />
                  Formação DEV - Cod3r
                </div>
                <span className="bg-[#323238] text-sm px-3 py-1 rounded">Acesso anual</span>
              </div>
            </div>

            <div className="p-6">
              <p className="text-[#C4C4CC] mt-2 mb-6 text-center ml-8">
                Do zero ao avançado, todas as formações, cursos, eventos e experiências em uma única assinatura.
              </p>
              <div className="space-y-1">
                {courseAreas.map((area, index) => (
                  <div key={index} className="select-none">
                    <div 
                      onClick={() => toggleExpand(area.title)}
                      className="flex items-center justify-between px-2 py-1.5 hover:bg-white/5 rounded cursor-pointer group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[#996DFF] w-4">
                          {expandedItems[area.title] ? 
                            <ChevronDown className="w-4 h-4 transition-transform duration-200" /> : 
                            <ChevronRight className="w-4 h-4 transition-transform duration-200" />
                          }
                        </span>
                        <span className="text-[#996DFF]">
                          {expandedItems[area.title] ? 
                            <FolderOpen className="w-4 h-4 transition-opacity duration-200" /> : 
                            <Folder className="w-4 h-4 transition-opacity duration-200" />
                          }
                        </span>
                        <span className="text-[#E1E1E6] group-hover:text-white transition-colors duration-200">
                          {area.title}
                        </span>
                      </div>
                      <div className="flex -space-x-2">
                        {area.techLogos.map((logo, logoIndex) => (
                          <div
                            key={logoIndex}
                            className="relative w-6 h-6 rounded-full bg-[#323238] p-1 ring-1 ring-black/10 transition-transform hover:scale-110 hover:z-10"
                          >
                            <Image
                              src={logo}
                              alt={`Tech ${logoIndex + 1}`}
                              width={24}
                              height={24}
                              className="object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedItems[area.title] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="ml-6 pl-4 border-l border-[#323238] py-3">
                        <div className="space-y-3">
                          <div className="text-sm text-[#C4C4CC]">
                            {area.description}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {area.topics.map((topic, index) => (
                              <span 
                                key={index}
                                className="text-xs bg-emerald-400/10 text-emerald-400 px-2 py-1 rounded-full"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                          <div className="text-sm text-[#996DFF] font-medium">
                            {area.mainTech}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-[#282824] rounded-lg">
                <div className="text-[#E1E1E6] line-through text-sm">De R$ 14.264</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg">12x de R$</span>
                  <span className="text-4xl font-bold">166,40</span>
                </div>
                <div className="text-[#8D8D99] text-sm">Ou R$1.997 à vista</div>
                <div className="mt-4 bg-[#015F43] text-[#07F996] text-sm p-2 rounded inline-flex items-center gap-2">
                  <span>💰</span> ECONOMIZE R$9.773
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

        <div className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Como funciona a assinatura</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-[#202024] rounded-lg p-6">
              <div className="text-[#996DFF] mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Acesso único</h3>
              <p className="text-[#C4C4CC] text-sm">
                Todo conteúdo liberado na plataforma por um ano.
              </p>
            </div>
            <div className="bg-[#202024] rounded-lg p-6">
              <div className="text-[#996DFF] mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3L19 12L5 21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Início imediato</h3>
              <p className="text-[#C4C4CC] text-sm">
                Assista hoje as aulas gravadas já disponíveis ou quando quiser.
              </p>
            </div>
            <div className="bg-[#202024] rounded-lg p-6">
              <div className="text-[#996DFF] mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Conteúdo atualizado</h3>
              <p className="text-[#C4C4CC] text-sm">
                Aulas gravadas atuais e novos conteúdos todos os meses.
              </p>
            </div>
            <div className="bg-[#202024] rounded-lg p-6">
              <div className="text-[#996DFF] mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Novos lançamentos inclusos</h3>
              <p className="text-[#C4C4CC] text-sm">
                Pague uma vez e receba todas as futuras formações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;