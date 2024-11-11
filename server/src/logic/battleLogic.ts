import { createBattle } from "../data/battleData.js";
import { Battle, PrismaClient } from "../database.js";

export const BattleLogic = (prisma: PrismaClient) => ({
  startBattle: (leftDragonId: number, rightDragonId: number): Promise<Battle> =>
    createBattle(prisma, leftDragonId, rightDragonId),
});
