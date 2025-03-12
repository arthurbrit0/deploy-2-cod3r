"use client";
import React, { useState, useEffect } from 'react';
import CheckoutSection from '@/features/checkout/pages/CheckoutPage';
import type { Summary } from '@/features/checkout/components/teste';

const initialSummary: Summary = {
  totalTracks: 0,
  totalCourses: 0,
  totalHours: 0,
  totalClasses: 0
};

export default function AssinaturaPage() {
  const [selectedPlan, setSelectedPlan] = useState({
    price: "116,41",
    duration: "1 ANO DE ACESSO",
    total: "R$ 1.397"
  });

  const [summary, setSummary] = useState<Summary>(initialSummary);

  useEffect(() => {
    async function loadSummary() {
      try {
        const response = await fetch("/api/formacaoDev/summary");

        if (!response.ok) {
          throw new Error(`Erro ao buscar summary: ${response.status}`);
        }

        const data = await response.json();
        setSummary(data);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        setSummary(initialSummary);
      }
    }

    loadSummary();
  }, []);

  return (
    <CheckoutSection
      summary={summary}
      selectedPlan={selectedPlan}
      onPlanSelect={setSelectedPlan}
    />
  );
}
