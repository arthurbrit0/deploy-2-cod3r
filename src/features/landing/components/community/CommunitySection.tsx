"use client";

import React from 'react';
import Company from '@/features/shared/components/company';
import Title from '@/features/shared/components/Title';

export function CommunitySection() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto py-32 px-4 space-y-12">
        <Title
            main={[
                {
                    value: 'Conheça mais',
                },
                {
                    value: 'Sobre nós',
                    gradient: true
                },
            ]}
            secondary="Conheça um pouco mais sobre a Cod3r, nossa equipe e história."
        />
        <Company />
      </div>
    </div>
  );
}