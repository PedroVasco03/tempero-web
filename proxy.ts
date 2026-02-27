import { NextRequest, NextResponse } from "next/server";

// No Next 16, a função pode ser exportada como default ou 'proxy' 
// dependendo da sua configuração, mas vamos manter a compatibilidade:
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Lógica de autenticação
  // Verificamos o token (NextAuth ou JWT customizado)
  const token = req.cookies.get("next-auth.session-token")?.value || 
                req.cookies.get("__Secure-next-auth.session-token")?.value ||
                req.cookies.get("token")?.value;

  // Se NÃO tem token, mandamos para o login
  if (!token) {
    const loginUrl = new URL("/login", req.url);
    // Salva a página que o usuário tentou acessar para redirecionar de volta depois
    loginUrl.searchParams.set("callbackUrl", pathname); 
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// O Matcher é quem define o que é PRIVADO. 
// Tudo que NÃO estiver aqui será considerado público automaticamente pelo Next.js.
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/chat/:path*",
    "/receitas/post/:path*",
    "/favoritos/:path*",
    "/avaliacao/:path*",
    // Evita rodar o middleware em arquivos estáticos (performance)
    "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
  ],
};