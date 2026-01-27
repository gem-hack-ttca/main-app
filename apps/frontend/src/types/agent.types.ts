export type AgentStatus = 'idle' | 'thinking' | 'waiting';

export interface Agent {
  id: string;
  name: string;
  description: string;
  personality: string;
  status: AgentStatus;
  avatar?: string;
  color: string; // For visual distinction
}
