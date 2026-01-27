import { Agent, Message } from "../../../../packages/shared/src/schemas/chat";
export default function ChatThread({
  messages,
  agent,
}: {
  messages: Message[];
  agent?: Agent;
}) {
  if (messages.length === 0 && agent) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-6 text-center text-muted-foreground">
        <h2 className="mb-2 text-lg font-medium">{agent.name}</h2>
        <p>{agent.id}</p>
        <p className="mt-4">Ask me anything...</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col gap-4 overflow-y-auto p-4 pb-20">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex max-w-[80%] flex-col gap-1 ${
            msg.role === "user"
              ? "self-end items-end"
              : "self-start items-start"
          }`}
        >
          <div
            className={`rounded-2xl px-4 py-2.5 ${
              msg.role === "user"
                ? "bg-primary text-primary-foreground"
                : "bg-muted"
            }`}
          >
            {msg.content}
          </div>
        </div>
      ))}
    </div>
  );
}
