import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Shield } from "lucide-react";

interface PricingPlan {
  title: string;
  tag?: string;
  price: string;
  duration: string;
  originalPrice?: string;
  currentPrice?: string;
  savings?: string;
  buttonText: string;
  economy: string;
}

interface PricingCardsProps {
  onPlanSelect: (plan: { price: string; duration: string; total: string; economy: string; }) => void;
  selectedPlan: { price: string; duration: string; total: string; economy: string; };
}

const pricingPlans: PricingPlan[] = [
  {
    title: "1 ANO DE ACESSO",
    price: "119,74",
    duration: "1 ANO DE ACESSO",
    originalPrice: "R$ 2.297",
    currentPrice: "R$ 1.197",
    savings: "ECONOMIA DE R$ 1.100",
    buttonText: "PLANO SELECIONADO",
    economy: "Desconto de 47,89%"
  },
  {
    title: "2 ANOS DE ACESSO",
    price: "189,76",
    duration: "2 ANOS DE ACESSO",
    originalPrice: "R$ 4.594",
    currentPrice: "R$ 1.897",
    savings: "ECONOMIA DE R$ 2.697",
    buttonText: "GARANTIR MINHA VAGA",
    economy: "Desconto de 58,71%"
  },
  {
    title: "3 ANOS DE ACESSO",
    price: "249,98",
    duration: "3 ANOS DE ACESSO",
    originalPrice: "R$ 6.891",
    currentPrice: "R$ 2.499",
    savings: "ECONOMIA DE R$ 4.392",
    buttonText: "GARANTIR MINHA VAGA",
    economy: "Desconto de 63,74%"
  }
];

export const PricingCards: React.FC<PricingCardsProps> = ({ onPlanSelect, selectedPlan }) => {
  const handlePlanSelect = (plan: PricingPlan) => {
    onPlanSelect({
      price: plan.price,
      duration: plan.duration,
      total: plan.currentPrice || "",
      economy: plan.economy
    });
    
    const checkoutElement = document.getElementById('checkout');
    if (checkoutElement) {
      setTimeout(() => {
        checkoutElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  return (
    <div id="plans">
      <BackgroundBeams className="h-auto md:h-[82vh]" />
      <div className="relative h-full mb-16 w-full overflow-hidden bg-none">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col space-y-2 pb-8">
            <h2 className="text-center text-4xl font-bold tracking-tight text-white">
              Clique na opção de sua escolha abaixo e garanta sua vaga
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => {
              const isSelected = selectedPlan.price === plan.price;
              return (
                <Card 
                  key={index} 
                  className={`overflow-hidden ${
                    isSelected ? 'bg-black/90' : 'bg-black/75'
                  } border border-purple-500/20 backdrop-blur-sm flex flex-col`}
                >
                  <div className="bg-black/80 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white">{plan.title}</h3>
                      {plan.tag && (
                        <span className="px-2.5 py-0.5 text-xs font-semibold bg-black/30 text-purple-200 rounded-full">
                          {plan.tag}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex-1">
                      <div className="flex flex-col items-baseline">
                        <span className="text-2xl font-medium text-white">12x de R$</span>
                        <span className="text-6xl font-bold text-white">{plan.price}</span>
                      </div>
                      {plan.originalPrice && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-400">
                            De {plan.originalPrice} por apenas {plan.currentPrice}
                          </p>
                          {plan.savings && (
                            <p className="text-sm text-emerald-400 font-bold mt-1">
                              {plan.savings}
                            </p>
                          )}
                          {plan.economy && (
                            <div className="mt-1">
                              <span className="text-sm text-emerald-400 font-bold bg-emerald-400/40 px-3 py-1 rounded-xl">
                                {plan.economy}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <Button 
                      className={`w-full ${
                        isSelected 
                          ? 'bg-gray-700 hover:bg-gray-600'
                          : 'bg-purple-600 hover:bg-purple-700' 
                      } text-white mt-6`}
                      onClick={() => handlePlanSelect(plan)}
                    >
                      {isSelected ? "PLANO SELECIONADO" : "GARANTIR MINHA VAGA"}
                    </Button>
                    <div className="flex flex-row items-center justify-center mt-4 gap-2">
                      <Shield className="text-emerald-400" />
                      <p className="text-emerald-400 text-center font-bold text-sm">
                        Garantia de 15 dias
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};