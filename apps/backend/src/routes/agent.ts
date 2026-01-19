import type { FastifyInstance } from "fastify";

export async function agentsRoute(app: FastifyInstance) {
  app.get("/", async () => {
    return {
      agents: [
        { id: "planner", name: "Planner", status: "idle" },
        { id: "skeptic", name: "Strategist / Skeptic", status: "idle" },
        { id: "coach", name: "Coach", status: "idle" }
      ]
    };
  });
}
