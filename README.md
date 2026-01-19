## Tech Stack (What Each Part Does)

This project is a **role-based, memory-enabled multi-agent system** where **Gemini 3** is used as the *agent reasoning runtime* (not just a chat completion).

### Frontend — Next.js (TypeScript)
**Purpose:** Mobile-first UI for interacting with multiple isolated agents.
- Agent “rooms” selector
- Chat interface (message input + history)
- Agent status: Idle / Thinking / Waiting
- Demo controls: “Simulate Next Day”

### Backend — Node.js (TypeScript) API (Fastify or Express)
**Purpose:** Hosts the **agent runtime + orchestrator** and exposes endpoints:
- `GET /agents` — list agent rooms + metadata + status
- `POST /chat` — run one agent interaction
- `POST /simulate-day` — trigger Planner autonomy loop for demo

### Gemini 3 Integration — `@google/genai`
**Purpose:** The backend uses Gemini for:
- Role enforcement (agent stays in-character + refuses out-of-scope)
- Response generation
- Memory compression (store summarized memory only, max 5 bullets)
- Reflection loop (self-correction / behavior shaping)
- Autonomy decisions (Planner only)

### Orchestrator (Backend Module)
**Purpose:** The “agent runtime engine” that makes this project more than a chatbot.
Per `/chat` request it:
1. Loads the selected agent definition (role/personality/rules)
2. Loads that agent’s isolated memory summary
3. Calls Gemini to generate the response
4. Calls Gemini again to compress memory (≤ 5 bullets)
5. Persists updated memory back to storage

Per `/simulate-day` it:
- Runs the Planner autonomy loop (agent acts without user prompt)
- Produces proactive nudges / next actions

### Persistence — SQLite (recommended) or JSON (fastest)
**Purpose:** Store **per-agent isolated summarized memory**
- No raw chat logs
- No shared memory between agents
- Memory stored as ≤ 5 bullet summary per agent

### Shared API Contract — Zod Schemas in `/packages/shared`
**Purpose:** Keep frontend and backend in sync (demo-safe).
- Define request/response schemas once (runtime validation)
- Infer TypeScript types for frontend + backend
- Prevent API mismatch bugs during parallel work

### Optional: Docker Compose
**Purpose:** One-command local run for judges and teammates.
- Spins up frontend + backend together
- Reduces “it works on my machine” issues
