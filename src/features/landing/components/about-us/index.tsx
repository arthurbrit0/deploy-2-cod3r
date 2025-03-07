import Image from 'next/image';
import React from 'react';

export function AboutUs() {
  return (
    <div className="bg-gradient-to-b bg-gray-950 rounded-xl border border-slate-800 text-white items-center mt-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-pink-500 to-purple-500 rounded-full opacity-20 blur-3xl" />
              <div className="relative z-10">
                <Image
                  src="/logo_cod3r.png"
                  alt="Cod3r Logo"
                  className="w-full h-full object-contain p-12"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">Sobre a Cod3r</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Nós somos uma das escolas de programação mais bem conceituadas do Brasil.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Milhares de vidas transformadas em mais de 150 países. Histórias de pessoas que saíram do absoluto zero e hoje estão trabalhando em grandes empresas de tecnologia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}