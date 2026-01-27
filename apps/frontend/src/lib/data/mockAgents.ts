import { Agent } from '@/types/agent.types';

export const mockAgents: Agent[] = [
  {
    id: '1',
    name: 'Strategic Planner',
    description: 'Helps you plan and organize your goals with strategic thinking',
    personality: 'Analytical and goal-oriented',
    status: 'idle',
    avatar: 'planner',
    color: '#3B82F6', // Blue
  },
  {
    id: '2',
    name: 'Caring Coach',
    description: 'A supportive friend who listens and provides emotional support',
    personality: 'Empathetic and warm',
    status: 'idle',
    avatar: 'coach',
    color: '#F43F5E', // Red/Pink
  },
  {
    id: '3',
    name: 'Critical Skeptic',
    description: 'Questions assumptions and provides thoughtful analysis',
    personality: 'Logical and thorough',
    status: 'idle',
    avatar: 'skeptic',
    color: '#64748B', // Grey
  },
];
