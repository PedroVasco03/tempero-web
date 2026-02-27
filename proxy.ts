import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  // lógica de bloqueio enquanto desenvolve a UI
  /*
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  */

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/chat/:path*",
    "/receitas/post/:path*",
    "/favoritos/:path*",
  ],
};