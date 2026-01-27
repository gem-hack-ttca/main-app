import { z } from "zod";

export const AgentTypeSchema = z.enum(["planner", "skeptic", "coach"]);

export const AgentStatusSchema = z.enum(["idle", "thinking", "waiting", "outage"]);

export const MessageRoleSchema = z.enum(["user", "assistant", "system"]);

export const MessageStatusSchema = z.enum(["pending", "streaming", "complete", "error", "cancelled"]);

export const AgentSchema = z.object({
  id: AgentTypeSchema,
  name: z.string(),
  description: z.string(),
  status: AgentStatusSchema
});

export const MessageSchema = z.object({
  id: z.string(),
  agentId: AgentTypeSchema.optional(),
  role: MessageRoleSchema,
  content: z.string(),
  createdAt: z.number().int().positive(),
  updatedAt: z.number().int().positive().optional(),
  status: MessageStatusSchema.default("complete"),
  errorMessage: z.string().optional(),
  metadata: z.record(z.unknown()).optional()
});

export const GetAgentsResponseSchema = z.object({
  agents: z.array(AgentSchema),
  meta: z.object({
    total: z.number().int().nonnegative(),
    timestamp: z.number().optional(),
  }).optional(),
});

export const ChatRequestSchema = z.object({
  agentId: AgentTypeSchema,  
  message: z.string().min(1).max(2000),              
  sessionId: z.string().optional(),                  
  // optional context if you send previous messages
  context: z.array(MessageSchema).optional(),
});

export const ChatResponseSchema = z.object({
  agentId: z.string(),
  message: MessageSchema,           // the assistant's reply as full Message
  memorySummary: z.array(z.string()).optional(),  // ≤5 bullets as per your rules
  // optional extras for future
  status: z.enum(["success", "partial", "error"]).default("success").optional(),
  errorMessage: z.string().optional(),
});

export type AgentStatus = z.infer<typeof AgentStatusSchema>;
export type AgentType = z.infer<typeof AgentTypeSchema>;
export type Agent = z.infer<typeof AgentSchema>;
export type MessageRole = z.infer<typeof MessageRoleSchema>;
export type MessageStatus = z.infer<typeof MessageStatusSchema>;
export type Message = z.infer<typeof MessageSchema>;
export type GetAgentsResponse = z.infer<typeof GetAgentsResponseSchema>;
export type ChatRequest = z.infer<typeof ChatRequestSchema>;
export type ChatResponse = z.infer<typeof ChatResponseSchema>;
