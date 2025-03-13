import React from 'react';
import ImageDisplay from './ImageDisplay';
import Button from '../../shared/components/Button';

const EadSection = () => {
  return (
    <div className="h-[75vh] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 pt-20 space-y-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-block bg-gradient-to-r from-cyan-400/20 to-cyan-400/10 rounded-full px-4 py-1">
              <span className="text-purple-400 text-sm font-semibold">
                PLATAFORMA EAD
              </span>
            </div>
            <h1 className="text-5xl font-bold leading-tight">
              Faça parte de fato do desenvolvimento de um <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                projeto real
              </span>
            </h1>
            <p className="text-gray-400 text-xl max-w-md">
            Nenhuma outra empresa de ensino está colocando seus alunos para desenvolverem juntos um projeto real 
            e com mentoria, projeto esse que é o próprio negócio da nossa empresa.
            </p>
            <Button
              href="/projeto-ead"
              className="bg-emerald-500 hover:bg-emerald-600 transition-colors"
            >
              Participe agora
            </Button>
          </div>
          <div>
            <ImageDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EadSection;
