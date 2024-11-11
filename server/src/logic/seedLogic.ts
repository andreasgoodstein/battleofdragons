import { addDragonList } from "../data/dragonData.js";
import { PrismaClient } from "../database.js";

/**
 * Function to seed list of dragons to database on initialization
 */
export const trySeedDragons = async (prisma: PrismaClient) => {
  if ((await prisma.dragon.count()) > 0) {
    return;
  }

  const seedDragons = (await import("../data/seedDragons.json")).default;

  await addDragonList(prisma, seedDragons);

  console.log("Database Seeded");
};
