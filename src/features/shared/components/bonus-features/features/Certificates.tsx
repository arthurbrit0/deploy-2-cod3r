import React from 'react';
import { Trophy } from 'lucide-react';

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full p-1 rotate-12 hover:rotate-0 transition-transform duration-500">
            <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
              <Trophy className="w-16 h-16 text-purple-400" />
            </div>
          </div>

          <div className="text-center pt-20 mb-16">
            <div className="inline-block">
              <span className="bg-purple-500/20 text-purple-300 text-sm font-semibold px-4 py-1 rounded-full mb-4 block">
                CERTIFICAÇÃO
              </span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Certificado Profissional
              </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Obtenha um certificado reconhecido que comprova suas habilidades e impulsiona sua carreira no desenvolvimento web
            </p>
          </div>

          <div className="relative group mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gray-800 rounded-3xl aspect-[16/9] w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;