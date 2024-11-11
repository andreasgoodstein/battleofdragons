import { PrismaClient } from "../database.js";

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
