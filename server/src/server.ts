import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import cors from "@fastify/cors";
import { PORT } from "./config.js";

import { getDragonList } from "./data/dragonData.js";
import { PrismaClient } from "./database.js";
import { trySeedDragons } from "./logic/seedLogic.js";

// Prisma initialized 'once' to ensure single db connection
const prisma = new PrismaClient();

// Try seed database
trySeedDragons(prisma);

// Initialize server
const fastify = Fastify({
  logger: true,
});

/**
 * Allow CORS requests to enable localhost development in all browsers
 * TODO: Should be disabled or adjusted to specific domains for production
 */
await fastify.register(cors, {});

// Declare routes
fastify.get(
  "/allDragons",
  async (request: FastifyRequest, reply: FastifyReply) => {
    const allDragons = await getDragonList(prisma);
    reply.send(allDragons);
  }
);

// Listen for incoming connections
fastify.listen({ port: PORT }, (err: Error | null, address: string) => {
  if (err) {
    // TODO: Add proper monitoring with a tool like sentry.io
    console.error(err);
  }
});
