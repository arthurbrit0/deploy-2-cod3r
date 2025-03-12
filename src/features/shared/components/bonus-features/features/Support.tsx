import React from 'react';

const features = [
];

export default function SuporteContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-xl border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300"
        >
          <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
            {feature.icon}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-2">
              {feature.title}
            </h4>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}