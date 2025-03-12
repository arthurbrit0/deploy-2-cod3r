import React from 'react';
import { GitBranch, Star, GitPullRequest, Users } from 'lucide-react';

const repositories = [
];

export default function OpenSourceContent() {
  return (
    <div className="space-y-6">
      {repositories.map((repo, index) => (
        <div 
          key={index}
          className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <GitBranch className="w-5 h-5 text-purple-400" />
            <h4 className="text-lg font-semibold text-purple-300">{repo.name}</h4>
          </div>
          <p className="text-gray-400 mb-4">{repo.description}</p>
          <div className="flex items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>{repo.stars}</span>
            </div>
            <div className="flex items-center gap-2">
              <GitPullRequest className="w-4 h-4" />
              <span>{repo.forks}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{repo.contributors}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}