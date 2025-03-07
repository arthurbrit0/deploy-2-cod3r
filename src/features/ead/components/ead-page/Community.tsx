import React from 'react';
import { Users, MessageSquare, Video, Github } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Membros', icon: Users },
  { value: '1.2k+', label: 'Mensagens', icon: MessageSquare },
  { value: '24+', label: 'Mentorias', icon: Video },
  { value: '100+', label: 'PRs Mergeados', icon: Github }
];

const Community = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-32">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-blue-400/20 rounded-3xl transform -rotate-1" />
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl" />
        <div className="relative p-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comunidade Ativa</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Faça parte de uma comunidade engajada de desenvolvedores,
              compartilhe conhecimento e cresça junto.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;