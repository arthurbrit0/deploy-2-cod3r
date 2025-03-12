import { Badge } from '@/components/ui/badge';
import React from 'react';
import FeatureBlock from './FeatureBlock';


export function FeaturesSection() {
  return (
    <div className="w-full py-20 px-10 md:px-0 space-y-24 bg-none">
      <div className="text-center space-y-3">
        <Badge>
          RECURSOS
        </Badge>
        <h2 className="text-4xl font-bold">
          O que você vai receber
        </h2>
        <p className="text-lg">
          Confira os benefícios de fazer parte da nossa formação
        </p>
      </div>
      <FeatureBlock
        title="Suporte contínuo e especializado"
        subtitle="— SUPORTE"
        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
        invert={false}
      />
      <FeatureBlock
        title="Acesso ao nosso fórum"
        subtitle="— COMUNIDADE"
        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
        invert={true}
      />
      <FeatureBlock
        title="Aprenda programação com a mão na massa"
        subtitle="— PROJETOS E DESAFIOS"
        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
        invert={false}
      />
      <FeatureBlock
        title="Tenha acesso a conteúdos exclusivos por 1 ano"
        subtitle="— TEMPO DE ACESSO"
        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
        invert={true}
      />
    </div>
  );
}