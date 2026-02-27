import { PrismaClient } from "@prisma/client";

// Define um tipo para garantir que o compilador TS reconheça o prisma no global
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Instancia o cliente ou usa a instância existente
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

// No Prisma 7, manter o singleton em desenvolvimento ainda é essencial
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;