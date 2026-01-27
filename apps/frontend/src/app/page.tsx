'use client';

import { Agent } from '@/types/agent.types';
import AgentCard from '@/components/features/agents/AgentCard';
import { mockAgents } from '@/lib/data/mockAgents';

export default function Home() {
  const handleAgentClick = (agent: Agent) => {
    console.log('Selected agent:', agent);
    // TODO: Navigate to chat page with selected agent
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      {/* Header */}
      <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            AI Agents
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            Choose an agent to start chatting
          </p>
        </div>
      </header>

      {/* Agent Grid */}
      <main className="max-w-md mx-auto px-4 py-6">
        <div className="grid grid-cols-2 gap-3">
          {mockAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              onClick={handleAgentClick}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
