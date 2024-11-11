import { PrismaClient } from "../../../database/prisma/client/index.js";

export const getAllDragons = (prisma: PrismaClient) =>
  prisma.dragon.findMany({ select: { id: true, name: true, strength: true } });
