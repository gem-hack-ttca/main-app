import { Agent, AgentType } from "../../../../packages/shared/src/schemas/chat";
export default function AgentSwitcher({
  agents,
  activeId,
  onSelect,
}: {
  agents: Agent[];
  activeId: string | null;
  onSelect: (id: AgentType) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto border-b px-4 py-3 scrollbar-hide">
      {agents.map((agent) => (
        <button
          key={agent.id}
          onClick={() => onSelect(agent.id)}
          className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors ${
            activeId === agent.id
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80"
          }`}
        >
          <div className="size-2 rounded-full bg-green-500" />{" "}
          {/* status dot – fake for now */}
          {agent.name}
        </button>
      ))}
    </div>
  );
}
