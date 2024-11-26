import { Battle, PrismaClient } from "../database.js";

export const createBattle = (
  prisma: PrismaClient,
  leftDragonId: number,
  rightDragonId: number
) =>
  prisma.battle.create({
    data: {
      leftDragonHealth: 100,
      leftDragonId,
      rightDragonHealth: 100,
      rightDragonId,
      timestamp: new Date(),
    },
  });

export const findBattle = (prisma: PrismaClient, id: Battle["id"]) =>
  prisma.battle.findFirst({ where: { id } });
