import React from 'react';
import Title from '../../Title';
import Image from 'next/image';

export default function MentoriaContent() {
  return (
    <div className="space-y-6 rounded-xl overflow-hidden">
      <div className="p-8 bg-gray-800/50 rounded-xl">
        <Title
            main={[
                {
                    value: 'Mentorias',
                    gradient: true,
                },
                {
                    value: 'Exclusivas'
                },
            ]}
            secondary="Aprimore suas habilidades com mentoria individual e personalizada"
        />
      </div>
      
      <div className="aspect-[21/9] w-full rounded-xl overflow-hidden">
        <Image
          src="/aula-mentoria.svg"
          alt="Mentoria"
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
          fill
        />
      </div>
    </div>
  );
}