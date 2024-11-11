import { Dragon, PrismaClient } from "../database.js";

export const getDragonList = (prisma: PrismaClient) =>
  prisma.dragon.findMany({ select: { id: true, name: true, strength: true } });

export const addDragonList = (
  prisma: PrismaClient,
  dragons: Pick<Dragon, "name" | "strength">[]
) => prisma.dragon.createMany({ data: dragons });
