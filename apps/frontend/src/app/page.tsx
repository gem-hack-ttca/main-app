// apps/frontend/src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";

// We'll create these components next
import Header from "@/components/Header";
import AgentSwitcher from "@/components/AgentSwitcher";
import ChatThread from "@/components/ChatThread";
import Composer from "@/components/Composer";
import {
  Agent,
  AgentType,
  Message,
} from "../../../../packages/shared/src/schemas/chat";

export default function Home() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [activeAgentId, setActiveAgentId] = useState<AgentType | null>(null);
  const [messagesByAgent, setMessagesByAgent] = useState<
    Record<string, Message[]>
  >({});
  const [status, setStatus] = useState<"connected" | "offline">("offline");

  // Load agents once
  useEffect(() => {
    api
      .getAgents()
      .then((data) => {
        setAgents(data);
        if (data.length > 0) {
          setActiveAgentId(data[0].id); // default to first
        }
        setStatus("connected");
      })
      .catch(() => setStatus("offline"));
  }, []);

  const handleSend = async (text: string) => {
    if (!activeAgentId || !text.trim()) return;

    // Optimistic UI
    setMessagesByAgent((prev) => ({
      ...prev,
      [activeAgentId]: [
        ...(prev[activeAgentId] || []),
        {
          id: crypto.randomUUID(),
          role: "user",
          content: text,
          createdAt: Date.now(),
          status: "complete",
        },
      ],
    }));

    try {
      const response = await api.sendMessage(activeAgentId, text);
      setMessagesByAgent((prev) => ({
        ...prev,
        [activeAgentId]: [
          ...(prev[activeAgentId] || []),
          {
            id: crypto.randomUUID(),
            role: "user",
            content: response.message.content,
            createdAt: Date.now(),
            status: "complete",
          },
        ],
      }));
    } catch (err) {
      console.error(err);
      // optional: add error message to chat
    }
  };

  const currentMessages = activeAgentId
    ? messagesByAgent[activeAgentId] || []
    : [];

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header status={status} />

      <AgentSwitcher
        agents={agents}
        activeId={activeAgentId}
        onSelect={setActiveAgentId}
      />

      <main className="flex-1 overflow-hidden">
        <ChatThread
          messages={currentMessages}
          agent={agents.find((a) => a.id === activeAgentId)}
        />
      </main>

      <Composer onSend={handleSend} disabled={!activeAgentId} />
    </div>
  );
}
