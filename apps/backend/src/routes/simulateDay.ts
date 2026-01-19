import type { FastifyInstance } from "fastify";
import { runSimulateDay } from "../orchestrator/runSimulateDay.js";

export async function simulateDayRoute(app: FastifyInstance) {
  app.post("/", async (req) => {
    const body = req.body as any;
    return await runSimulateDay(body);
  });
}
