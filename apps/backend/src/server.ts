import Fastify from "fastify";
import cors from "@fastify/cors";
import "dotenv/config";

import { agentsRoute } from "./routes/agent.js";
import { chatRoute } from "./routes/chat.js";
import { simulateDayRoute } from "./routes/simulateDay.js";

const app = Fastify({ logger: true });

async function start() {
  await app.register(cors, { origin: true });

  app.get("/health", async () => ({ ok: true }));

  app.register(agentsRoute, { prefix: "/agents" });
  app.register(chatRoute, { prefix: "/chat" });
  app.register(simulateDayRoute, { prefix: "/simulate-day" });

  const PORT = Number(process.env.PORT || 8080);
  await app.listen({ port: PORT, host: "0.0.0.0" });
}

start().catch((err) => {
  app.log.error(err);
  process.exit(1);
});

