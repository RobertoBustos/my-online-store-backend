import type { PrismaClient } from "@prisma/client";
import { prisma } from "./prisma.js";

export type GraphQLContext = {
  prisma: PrismaClient;
};

export async function createContext(): Promise<GraphQLContext> {
  return { prisma };
}
