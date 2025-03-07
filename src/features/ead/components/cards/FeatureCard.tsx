import React from 'react';
import { Code2, Shield, Wallet, Users, Database, Workflow, CreditCard } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  icon: keyof typeof icons;
}

const icons = {
  Code2,
  Shield,
  Wallet,
  Users,
  Database,
  Workflow,
  CreditCard,
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon: IconKey }) => {
  const Icon = icons[IconKey];
  
  return (
    <div className="bg-[#1a1b3b] rounded-xl p-6 flex flex-col items-center text-center hover:bg-[#2a2b4b] transition-colors">
      <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
      <h3 className="text-white text-sm font-medium">{title}</h3>
    </div>
  );
};

export default FeatureCard;