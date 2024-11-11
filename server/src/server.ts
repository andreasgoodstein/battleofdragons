import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import cors from "@fastify/cors";
import { PORT } from "./config.js";

import { PrismaClient } from "./database.js";
import { trySeedDragons } from "./logic/seedLogic.js";
import { setupRoutes } from "./routes.js";

/**
 * Initialize database and logic controllers
 * TODO: Could be encapsulated further with some form of IoC / DI
 */
const prisma = new PrismaClient();
trySeedDragons(prisma);

/**
 * Setup server, middleware, and routes
 *
 * Allow CORS requests to enable localhost development in all browsers
 * TODO: Should be disabled or adjusted to specific domains for production
 */
const fastify = Fastify({
  logger: true,
});
await fastify.register(cors, {});

setupRoutes(fastify, prisma);

// Listen for incoming connections
fastify.listen({ port: PORT }, (err: Error | null, address: string) => {
  if (err) {
    // TODO: Add proper monitoring with a tool like sentry.io
    console.error(err);
  }
});
