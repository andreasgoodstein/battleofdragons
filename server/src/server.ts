import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import cors from "@fastify/cors";
import { PORT } from "./config.js";

import { PrismaClient } from "../../database/prisma/client/index.js";
import { getAllDragons } from "./data/dragons.js";

// Prisma initialized 'once' to ensure single db connection
const prisma = new PrismaClient();

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
    const allDragons = await getAllDragons(prisma);
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
