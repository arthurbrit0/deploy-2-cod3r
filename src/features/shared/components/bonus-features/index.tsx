"use client";

import React, { useState, useEffect, useRef } from "react";
import { Video, BookOpen } from "lucide-react";
import { IconBrandWhatsapp, IconCertificate } from "@tabler/icons-react";
import BaseSection from "../../layouts/BaseSection";
import { SkeletonOne } from "@/features/landing/components/whatsapp/Groups";
import MentoriaContent from "./features/Mentorship";
import ClubeDoLivroContent from "./features/BookClub";
import CertificadosContent from "./features/Certificates";

const sections = [
  {
    id: "mentoria",
    title: "Mentorias ao Vivo",
    icon: <Video className="w-6 h-6" />,
    component: <MentoriaContent />,
  },
  {
    id: "clubedolivro",
    title: "Clube do Livro",
    icon: <BookOpen className="w-6 h-6" />,
    component: <ClubeDoLivroContent />,
  },
  {
    id: "whatsapp",
    title: "Comunidade do WhatsApp",
    icon: <IconBrandWhatsapp className="w-6 h-6" />,
    component: <SkeletonOne />,
  },
  {
    id: "certificado",
    title: "Certificados",
    icon: <IconCertificate className="w-6 h-6" />,
    component: <CertificadosContent />,
  },
];

function BonusFeatures() {
  const [activeSection, setActiveSection] = useState("mentoria");
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersections: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersections, {
      rootMargin: "-10% 0px -50% 0px", 
      threshold: 0, 
    });

    sections.forEach(({ id }) => {
      const ref = sectionRefs.current[id];
      if (ref) {
        observerRef.current?.observe(ref);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    sectionRefs.current[sectionId]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="min-h-screen bg-none py-32">
      <BaseSection
        main={[
          { value: "O que mais você vai" },
          { value: "receber", gradient: true },
        ]}
        secondary="Além das aulas, você terá acesso a recursos exclusivos para acelerar seu aprendizado"
      >
        <div className="flex flex-col md:flex-row gap-8">
          <div className="hidden md:block w-full md:w-72 flex-shrink-0">
            <div className="md:sticky md:top-32">
              <nav className="flex flex-col space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center px-6 py-4 text-sm md:text-md font-medium rounded-xl transition-all duration-200 ${
                      activeSection === section.id
                        ? "bg-gray-800 text-purple-400 shadow-lg shadow-gray-900/50 scale-105"
                        : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                    }`}
                  >
                    {section.icon}
                    <span className="ml-3">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex-1 space-y-16">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                ref={(el) => {
                  sectionRefs.current[section.id] = el;
                }}
                className="bg-gray-900 rounded-2xl shadow-xl pt-12 shadow-gray-900/50 overflow-hidden md:min-h-[50vh] flex flex-col transform transition-all duration-500"
              >
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(100,80,140,0.2),transparent)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_0%_400px,rgba(70,70,90,0.3),transparent)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_300px,rgba(80,70,100,0.3),transparent)]" />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      maskImage:
                        "radial-gradient(ellipse at center, white 60%, transparent 100%)",
                      WebkitMaskImage:
                        "radial-gradient(ellipse at center, white 60%, transparent 100%)",
                    }}
                  >
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.02)_0,rgba(255,255,255,0.02)_1px,transparent_1px,transparent_50px)]" />
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.02)_0,rgba(255,255,255,0.02)_1px,transparent_1px,transparent_50px)]" />
                  </div>
                </div>

                <div className="px-12 pb-8 flex-1 flex flex-col justify-center z-40">
                  <h3 className="text-xl font-bold text-purple-500 bg-purple-400/10 p-2 rounded-xl flex items-center justify-center gap-3 mb-6">
                    {section.icon}
                    {section.title}
                  </h3>
                  <div className="text-md leading-relaxed text-gray-300">
                    {section.component}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BaseSection>
    </div>
  );
}

export default BonusFeatures;
