import { getCookie, hasCookie } from "cookies-next";
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const HasToken = request.cookies.get("token");
  if (HasToken) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
}

export const config = {
    matcher: '/auth'
}
