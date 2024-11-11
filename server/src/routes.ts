import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { getDragonList } from "./data/dragonData.js";
import { PrismaClient } from "./database.js";
import { BattleLogic } from "./logic/battleLogic.js";

type StartBattleParams = {
  leftDragonId: number;
  rightDragonId: number;
};

export const setupRoutes = (
  fastify: ReturnType<typeof Fastify>,
  prisma: PrismaClient
) => {
  const battleLogic = BattleLogic(prisma);

  fastify.get(
    "/allDragons",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const allDragons = await getDragonList(prisma);
      reply.send(allDragons);
    }
  );

  fastify.post(
    "/startBattle",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { leftDragonId, rightDragonId } = JSON.parse(
        request.body as string
      ) as StartBattleParams;

      const newBattle = await battleLogic.startBattle(
        leftDragonId,
        rightDragonId
      );

      reply.send(newBattle);
    }
  );
};
