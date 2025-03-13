import Image from 'next/image';
import React from 'react';

export function AboutUs() {
  return (
    <div className="bg-gradient-to-b bg-gray-950 rounded-xl border border-slate-800 text-white mt-16 py-16">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 lg:pr-8">
            <div className="ml-8">
              <h2 className="text-5xl font-bold mb-8">Sobre a Cod3r</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Nós somos uma das escolas de programação mais bem conceituadas do Brasil.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Milhares de vidas transformadas em mais de 150 países. Histórias de pessoas que saíram do absoluto zero e hoje estão trabalhando em grandes empresas de tecnologia.
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[400px] aspect-square relative -left-20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-pink-500 to-purple-500 rounded-full opacity-20 blur-3xl" />
              <div className="relative z-10 flex items-center justify-center w-full h-full">
                <Image
                  src="/logo_cod3r.png"
                  alt="Cod3r Logo"
                  className="object-contain p-8"
                  width={400}
                  height={400}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}