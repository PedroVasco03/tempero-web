import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/server/db/prisma";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // 1. Validação básica das credenciais enviadas
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // 2. Busca o usuário no banco
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        // 3. A CORREÇÃO: Verificamos se o usuário existe E se ele tem uma senha cadastrada.
        // Isso elimina o erro "Type 'null' is not assignable to parameter of type 'string'".
        if (!user || !user.password) {
          return null;
        }

        // 4. Com a verificação acima, o TS agora sabe que user.password é uma string válida
        const isValid = await bcrypt.compare(credentials.password, user.password);
        
        if (!isValid) {
          return null;
        }

        // 5. Retorna o objeto do usuário (o NextAuth cuidará da sessão)
        return user;
      },
    }),
  ],
  session: {
    // Se estiver usando PrismaAdapter, o padrão é "database". 
    // Se quiser mais performance, pode mudar para "jwt".
    strategy: "database", 
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };