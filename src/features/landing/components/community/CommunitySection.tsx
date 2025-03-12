"use client";

import React from 'react';
import Company from '@/features/shared/components/company';
import { AboutUs } from '@/features/landing/components/about-us';

export function CommunitySection() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto py-32 px-4 space-y-12">
        <AboutUs />
        <Company />
      </div>
    </div>
  );
}