import  {Agent, Message, AgentType, ChatResponse, ChatRequest, ChatRequestSchema, ChatResponseSchema} from "../../../../packages/shared/src/schemas/chat";

const API_BASE = "http://localhost:8080";

class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public details?: unknown
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  let json;
  try {
    json = await res.json();
  } catch {
    json = null;
  }

  if (!res.ok) {
    throw new ApiError(
      res.status,
      json?.error ?? `HTTP ${res.status}`,
      json?.details
    );
  }

  return json as T;
}

// ──────────────────────────────────────────────────────────────
// Public API surface — clean, typed, documented
// ──────────────────────────────────────────────────────────────

export const api = {
  /**
   * GET /agents
   * Returns list of available agents with their current status
   */
  async getAgents(): Promise<Agent[]> {
    // === Real backend call (uncomment when backend is ready) ===
    // return request("/agents");

    // === Stub / mock for Slice 0 ===
    return Promise.resolve([
      {
        id: "planner",
        name: "Planner",
        description: "Owns tasks and plans autonomously",
        status: "idle",
      },
      {
        id: "skeptic",
        name: "Skeptic",
        description: "Critical reasoning and strict refusals",
        status: "idle",
      },
      {
        id: "coach",
        name: "Coach",
        description: "Empathetic, memory-driven guidance",
        status: "thinking",
      },
    ]);
  },

  /**
   * POST /chat
   * Sends message to specific agent and gets reply + optional memory summary
   */
  async sendMessage(
    agentId: AgentType,
    content: string,
    sessionId?: string
  ): Promise<ChatResponse> {
    // === Real backend call (uncomment when ready) ===
    // return request("/chat", {
    //   method: "POST",
    //   body: JSON.stringify({ agentId, message: content, sessionId }),
    // });
    const payload: ChatRequest = {
        agentId,
        message: content,
        sessionId,
    };
    
    ChatRequestSchema.parse(payload); // runtime validation
    // === Stub / mock for development & Slice 0 ===
    await new Promise((r) => setTimeout(r, 600 + Math.random() * 800)); // fake thinking time

    const fakeMessage: Message = {
      id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      agentId,
      role: "assistant",
      content: `Echo from ${agentId}: "${content}"`,
      createdAt: Date.now(),
      status: "complete",
    };

    const response: ChatResponse = {
        agentId,
        message: fakeMessage,
        memorySummary: [
            "User asked about daily plan",
            "Planner suggested morning routine",
        ],
    }

    const validated = ChatResponseSchema.safeParse(response);
    if (!validated.success) {
        console.error("Invalid response format from sendMessage mock", validated.error);
        throw new Error("Invalid response format from sendMessage mock");
    } 

    return validated.data;
  },
};

// makes UI code cleaner (no try/catch everywhere)
export async function tryApi<T>(
  fn: () => Promise<T>
): Promise<{ ok: true; data: T } | { ok: false; error: ApiError | Error }> {
  try {
    return { ok: true, data: await fn() };
  } catch (err) {
    if (err instanceof ApiError) {
      return { ok: false, error: err };
    }
    return { ok: false, error: err as Error };
  }
}