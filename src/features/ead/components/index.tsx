import React from 'react';
import ImageDisplay from './ImageDisplay';
import Button from '../../shared/components/Button';
import { FeatureCard } from '../../../components/ui/feature-sections';
import { Code2, Shield, Wallet, Users } from 'lucide-react';

const features = [
  {
    title: 'Projeto open-source',
    description: 'Contribua com a comunidade e desenvolva um projeto open-source.',
    icon: Code2,
  },
  {
    title: 'Aprendizado em equipe',
    description: 'Trabalhe em equipe para praticar o que aprendeu',
    icon: Shield,
  },
  {
    title: 'Mentorias ao vivo',
    description: 'Participe de sessões exclusivas de mentoria sobre o projeto',
    icon: Wallet,
  },
  {
    title: 'Suporte dedicado',
    description: 'Tenha acesso a suporte dedicado para tirar suas dúvidas',
    icon: Users,
  },
];

const EadSection = () => {
  return (
    <div className="min-h-screen text-white py-20">
      <div className="max-w-7xl mx-auto px-4 pt-20 space-y-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-block bg-gradient-to-r from-cyan-400/20 to-cyan-400/10 rounded-full px-4 py-1">
              <span className="text-purple-400 text-sm font-semibold">
                PLATAFORMA EAD
              </span>
            </div>
            <h1 className="text-5xl font-bold leading-tight">
              Desenvolva um projeto{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
                com a comunidade
              </span>
            </h1>
            <p className="text-gray-400 text-xl">
              Participe do desenvolvimento de uma plataforma EAD open-source
              e aprenda na prática com a comunidade.
            </p>
            <Button
              href="/projeto-ead"
              className="bg-emerald-500 hover:bg-emerald-600 transition-colors"
            >
              Participe agora
            </Button>
          </div>
          <div className="flex-1 space-y-8 flex flex-col items-center md:items-end">
            <ImageDisplay type="code" />
            <ImageDisplay type="card" />
          </div>
        </div>
        <FeatureCard features={features} />
      </div>
    </div>
  );
};

export default EadSection;
