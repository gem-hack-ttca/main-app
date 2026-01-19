import { z } from "zod";

export const ChatRequestSchema = z.object({
  agentId: z.enum(["planner", "skeptic", "coach"]),
  message: z.string().min(1),
  sessionId: z.string().optional()
});

export const ChatResponseSchema = z.object({
  agentId: z.string(),
  message: z.string(),
  memorySummary: z.array(z.string()).optional()
});

export type ChatRequest = z.infer<typeof ChatRequestSchema>;
export type ChatResponse = z.infer<typeof ChatResponseSchema>;
