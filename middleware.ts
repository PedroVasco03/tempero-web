import { NextRequest, NextResponse } from "next/server";

// Middleware principal
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Rotas públicas que todo mundo pode acessar
  const publicPaths = [
    "/",
    "/login",
    "/register",
    "/receitas",        // listagem
    "/receitas/",       // página específica (ex: /receitas/123)
    "/receitas/:path*"  // qualquer receita dinâmica
  ];

  // Permite passar se a rota for pública
  if (publicPaths.some(path => url.pathname.startsWith(path.replace(":path*", "")))) {
    return NextResponse.next();
  }

  // Checa se usuário está logado (ainda simulando)
  // Aqui você vai colocar a lógica real depois (cookie JWT, NextAuth, etc.)
  const isLoggedIn = req.cookies.get("token")?.value;

  if (!isLoggedIn) {
    // Redireciona para login se não estiver logado
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Usuário logado → deixa passar
  return NextResponse.next();
}

// Configura o middleware para interceptar todas as rotas privadas
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/chat/:path*",
    "/receitas/post/:path*",
    "/favoritos/:path*",
    "/avaliacao/:path*"
  ],
};