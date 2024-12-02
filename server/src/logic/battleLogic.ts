import { createBattle, findBattle } from "../data/battleData.js";
import { Battle, Dragon, PrismaClient } from "../database.js";

export const BattleLogic = (prisma: PrismaClient) => ({
  startBattle: (
    leftDragonId: Dragon["id"],
    rightDragonId: Dragon["id"]
  ): Promise<Battle> => createBattle(prisma, leftDragonId, rightDragonId),

  doBattleRound: async (battleId: Battle["id"]): Promise<Battle | null> => {
    const battle = await findBattle(prisma, battleId);
    // const leftDragon = await findDragon(battle?.leftDragonId);
    // const rightDragon = await findDragon(battle?.rightDragonId);
    // run db queries in parallel with Promise.all()

    // const leftDragonHealth = battle?.leftDragonHealth - calculateDamage(rightDragon?.Strength);
    // const rightDragonHealth = battle?.rightDragonHealth - calculateDamage(leftDragon?.Strength);

    // if (leftDragonHealth <= 0 && rightDragonHealth <= 0) {
    // // draw
    // }
    // else if (leftDragonHealth <= 0) {
    // // right win
    // } else if (rightDragonHealth <= 0 ) {
    // // left win
    // }

    // update battle with new health

    // save battle to db

    return battle;
  },
});

const calculateDamage = (strength: Dragon["strength"]) =>
  Math.ceil(Math.random() * 20) + strength;
