import React from 'react';
import { GitCommit, GitPullRequest, GitMerge, Star, GitFork } from 'lucide-react';

const activities = [
  {
    type: 'commit',
    title: 'Implementação do sistema de autenticação',
    author: 'maria.dev',
    time: '2h atrás',
    icon: GitCommit,
    branch: 'feature/auth',
    commitHash: 'a1b2c3d'
  },
  {
    type: 'pr',
    title: 'Feature: Dashboard do Professor',
    author: 'joao.code',
    time: '5h atrás',
    icon: GitPullRequest,
    prNumber: '#42',
    status: 'open'
  },
  {
    type: 'merge',
    title: 'Merge: Sistema de Notificações',
    author: 'pedro.dev',
    time: '1d atrás',
    icon: GitMerge,
    prNumber: '#39',
    commits: 5
  }
];

const repoStats = [
  { value: '2.1k', label: 'Stars', icon: Star },
  { value: '342', label: 'Forks', icon: GitFork },
  { value: '89', label: 'PRs', icon: GitPullRequest },
  { value: '1.2k', label: 'Commits', icon: GitCommit }
];

const GithubActivity = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Atividade no GitHub</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Acompanhe as últimas contribuições da comunidade no GitHub.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-[#0d1117] rounded-xl overflow-hidden border border-[#30363d]">
            <div className="border-b border-[#30363d] p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">Atividade Recente</h3>
                <a href="#" className="text-[#58a6ff] text-sm hover:underline">Ver todas</a>
              </div>
            </div>
            <div className="divide-y divide-[#30363d]">
              {activities.map((activity) => (
                <div key={activity.title} className="p-4 hover:bg-[#161b22] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#238636]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <activity.icon className="w-5 h-5 text-[#238636]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white mb-1">{activity.title}</h4>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-[#58a6ff]">@{activity.author}</span>
                        <span className="text-[#8b949e]">•</span>

                        {activity.type === 'commit' && (
                          <>
                            <span className="text-[#8b949e]">{activity.branch}</span>
                            <span className="text-[#8b949e]">•</span>
                            <span className="font-mono text-[#8b949e]">{activity.commitHash}</span>
                          </>
                        )}
                        {activity.type === 'pr' && (
                          <>
                            <span className="text-[#8b949e]">PR {activity.prNumber}</span>
                            <span className="text-[#8b949e]">•</span>
                            <span className="px-2 py-0.5 rounded-full text-xs bg-[#238636]/10 text-[#238636]">
                              {activity.status}
                            </span>
                          </>
                        )}

                        <span className="text-[#8b949e]">•</span>
                        <span className="text-[#8b949e]">{activity.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#0d1117] rounded-xl border border-[#30363d] p-6">
            <h3 className="text-white font-semibold mb-6">Estatísticas do Repositório</h3>
            <div className="grid grid-cols-2 gap-4">
              {repoStats.map((stat) => (
                <div key={stat.label} className="bg-[#161b22] rounded-lg p-4">
                  <stat.icon className="w-5 h-5 text-[#58a6ff] mb-2" />
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-[#8b949e] text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubActivity;
