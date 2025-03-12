import React from 'react';
import { Code2, Users } from 'lucide-react';

const projects = [
];

export default function ProjetosEquipeContent() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-purple-300">
                {project.title}
              </h4>
              <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300">
                {project.status}
              </span>
            </div>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span className="text-sm">{project.tech}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span className="text-sm">{project.members} membros</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}