import { prisma } from "./prisma.js";

try {
  await prisma.$connect();
  console.log("Prisma connected to the database successfully.");
  await prisma.$disconnect();
} catch (error) {
  console.error("Prisma failed to connect to the database.", error);
  await prisma.$disconnect();
  process.exit(1);
}
