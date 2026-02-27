import "dotenv/config";
import { defineConfig } from "prisma/config";

// Diagnóstico: Se isso imprimir 'undefined', o Prisma vai dar erro P1013
console.log("Variável carregada:", process.env.DATABASE_URL);

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Adicione um fallback ou garanta que a string comece com mysql://
    url: process.env.DATABASE_URL || "mysql://root:senha@localhost:3306/banco",
  },
});