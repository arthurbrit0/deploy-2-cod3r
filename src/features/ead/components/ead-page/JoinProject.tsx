import React from 'react';
import { IconBook } from '@tabler/icons-react';

const JoinProject = () => {
  return (
    <div id="join" className="max-w-7xl mx-auto px-4 py-32">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-blue-400/20 rounded-3xl transform rotate-1" />
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl" />
        <div className="relative p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Contribuir?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Junte-se a nós no desenvolvimento de uma plataforma que vai impactar
            a forma como as pessoas aprendem online.
          </p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/seu-usuario/projeto-ead"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-6 py-3 rounded-xl"
            >
              <IconBook />
              <span>Participe da Formação</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinProject;