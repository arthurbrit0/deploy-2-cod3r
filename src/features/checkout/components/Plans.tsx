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
}

interface PricingCardsProps {
  onPlanSelect: (plan: { price: string; duration: string; total: string }) => void;
  selectedPlan: { price: string; duration: string; total: string };
}

const pricingPlans: PricingPlan[] = [
  {
    title: "1 ANO DE ACESSO",
    price: "116,41",
    duration: "1 ANO DE ACESSO",
    originalPrice: "R$ 1.997",
    currentPrice: "R$ 1.397",
    savings: "ECONOMIA DE R$ 600",
    buttonText: "PLANO SELECIONADO"
  },
  {
    title: "2 ANOS DE ACESSO",
    price: "166,41",
    duration: "2 ANOS DE ACESSO",
    currentPrice: "R$ 1.997",
    buttonText: "GARANTIR MINHA VAGA"
  },
  {
    title: "3 ANOS DE ACESSO",
    price: "216,41",
    duration: "3 ANOS DE ACESSO",
    originalPrice: "R$ 3.994",
    currentPrice: "R$ 2.597",
    savings: "ECONOMIA DE R$ 1.397",
    buttonText: "GARANTIR MINHA VAGA"
  }
];

export const PricingCards: React.FC<PricingCardsProps> = ({ onPlanSelect, selectedPlan }) => {
  const handlePlanSelect = (plan: PricingPlan) => {
    onPlanSelect({
      price: plan.price,
      duration: plan.duration,
      total: plan.currentPrice || ""
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
    <div>
      <BackgroundBeams className="h-auto md:h-[75vh]" />
      <div className="relative h-full mb-16 w-full overflow-hidden bg-none">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col space-y-2 pb-8">
            <h2 className="text-center text-4xl font-bold tracking-tight text-white">
              Escolha seu plano e garanta sua vaga na Formação DEV
            </h2>
            <p className="text-md text-center font-semibold text-gray-200">
              Confira os planos da Formação DEV
            </p>
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
                      <div className="flex items-baseline">
                        <span className="text-2xl font-semibold text-white">R$</span>
                        <span className="text-5xl font-bold text-white">{plan.price}</span>
                        <span className="ml-2 text-gray-400">s/ juros</span>
                      </div>
                      <p className="mt-1 text-sm text-purple-200">{plan.duration}</p>
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
                        </div>
                      )}
                    </div>
                    <Button 
                      className={`w-full ${
                        isSelected 
                          ? 'bg-purple-600 hover:bg-purple-700' 
                          : 'bg-gray-700 hover:bg-gray-600'
                      } text-white mt-6`}
                      onClick={() => handlePlanSelect(plan)}
                    >
                      {isSelected ? "PLANO SELECIONADO" : "GARANTIR MINHA VAGA"}
                    </Button>
                    <div className="flex flex-row items-center justify-center mt-4 gap-2">
                      <Shield className="text-emerald-400" />
                      <p className="text-emerald-400 text-center font-bold text-sm">
                        Garantia de 7 dias
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