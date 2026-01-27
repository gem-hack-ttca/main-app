import { useState } from 'react';
import { Agent } from '@/types/agent.types';
import Card from '@/components/ui/Card';
import { PlannerFace, CoachFace, SkepticFace } from '@/components/avatars/FaceOnly';
import { PlannerAvatar } from '@/components/avatars/PlannerAvatar';
import { CoachAvatar } from '@/components/avatars/CoachAvatar';
import { SkepticAvatar } from '@/components/avatars/SkepticAvatar';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
} from '@/components/ui/dialog';

interface AgentCardProps {
  agent: Agent;
  onClick: (agent: Agent) => void;
}

const AvatarFaceMap: Record<string, React.ReactNode> = {
  planner: <PlannerFace />,
  coach: <CoachFace />,
  skeptic: <SkepticFace />,
};

const AvatarFullMap: Record<string, React.ReactNode> = {
  planner: <PlannerAvatar />,
  coach: <CoachAvatar />,
  skeptic: <SkepticAvatar />,
};

export default function AgentCard({ agent, onClick }: AgentCardProps) {
  const [showModal, setShowModal] = useState(false);

  const getStatusColor = () => {
    switch (agent.status) {
      case 'idle':
        return 'bg-green-500';
      case 'thinking':
        return 'bg-yellow-500 animate-pulse';
      case 'waiting':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusText = () => {
    switch (agent.status) {
      case 'idle':
        return 'Available';
      case 'thinking':
        return 'Thinking...';
      case 'waiting':
        return 'Waiting';
      default:
        return 'Unknown';
    }
  };

  const handleCardClick = () => {
    setShowModal(true);
    onClick(agent);
  };

  return (
    <>
      <Card onClick={handleCardClick} className="p-4 h-full flex flex-col">
        <div className="flex flex-col items-center">
          {/* Avatar Face Circle */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden mb-3 border-2"
            style={{ borderColor: agent.color }}
          >
            {AvatarFaceMap[agent.avatar as string] || <div>?</div>}
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-1.5 mb-3">
            <div className={`w-2 h-2 rounded-full ${getStatusColor()}`}></div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              {getStatusText()}
            </span>
          </div>
        </div>

        {/* Agent Name */}
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-2 text-center">
          {agent.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 flex-grow text-center">
          {agent.description}
        </p>

        {/* Personality Badge */}
        <div className="flex justify-center">
          <span className="inline-block px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs text-zinc-700 dark:text-zinc-300">
            {agent.personality}
          </span>
        </div>
      </Card>

      {/* Full Avatar Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="w-96">
          <DialogHeader>
            <DialogTitle>{agent.name}</DialogTitle>
          </DialogHeader>
          <DialogBody className="flex flex-col items-center gap-4">
            <div className="w-48 h-60 flex items-center justify-center">
              {AvatarFullMap[agent.avatar as string] || <div>?</div>}
            </div>
            <div className="text-center">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                {agent.description}
              </p>
              <span className="inline-block px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs text-zinc-700 dark:text-zinc-300">
                {agent.personality}
              </span>
            </div>
          </DialogBody>
        </DialogContent>
      </Dialog>
    </>
  );
}
