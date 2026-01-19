export async function runChatTurn(input: any) {
  // TODO: validate with shared schema, load agent, load memory, call Gemini, compress memory
  return {
    agentId: input.agentId ?? "unknown",
    message: "Backend is wired. Next: shared schemas + Gemini + memory.",
    debug: { received: input }
  };
}
