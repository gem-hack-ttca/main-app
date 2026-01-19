import type { FastifyInstance } from "fastify";
import { ChatRequestSchema } from "@packages/shared";
import { runChatTurn } from "../orchestrator/runChatTurn.js";

export async function chatRoute(app: FastifyInstance) {
  app.post("/", async (req) => {
    const parsed = ChatRequestSchema.safeParse(req.body);
    if (!parsed.success) {
      return { error: "Invalid request", details: parsed.error.flatten() };
    }
    return await runChatTurn(parsed.data);
  });
}
