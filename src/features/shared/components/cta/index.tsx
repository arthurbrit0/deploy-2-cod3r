"use client";
import React from "react";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";

function Cta() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/85999341881", "_blank");
  };

  return (
    <div
      className="
        relative flex flex-col items-center justify-center antialiased
        h-[40rem] w-full rounded-2xl bg-neutral-950
      "
    >
      <BackgroundBeams />
      <div className="max-w-4xl w-full text-center space-y-8 p-4 z-40">
        <div className="flex justify-center mb-12">
          <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center shadow-xl">
            <Image 
              src="/logo_cod3r.png"
              alt="Cod3r"
              height={64}
              width={64}
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white">
          Comece agora sua jornada em programação
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
          Acelere para o seu próximo nível de carreira e nunca pare de aprender
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="/assinatura"
            className="
              inline-flex items-center justify-center px-8 py-3
              text-base font-medium text-purple-600 bg-white rounded-lg
              hover:bg-gray-50 transition-all duration-200
            "
          >
            PLANOS E CONDIÇÕES
          </a>

          <button
            onClick={handleWhatsAppClick}
            className="
              inline-flex items-center justify-center px-6 py-3
              text-base font-medium text-white border border-white/30
              rounded-lg hover:bg-white/10 transition-all duration-200
            "
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            FALE COM O NOSSO TIME
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cta;
