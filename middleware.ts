import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const jwtToken = request.cookies.has("jwtToken");

  if (!jwtToken && request.nextUrl.pathname !== "/login") {
    console.log("Redirecting to login");
    return NextResponse.redirect(new URL("/login", request.url).toString());
  }

  if (jwtToken && request.nextUrl.pathname === "/login") {
    console.log("Redirecting away from login");
    return NextResponse.redirect(new URL("/", request.url).toString());
  }

  return NextResponse.next();
}

export const config = {
  api: {
    bodyParser: false, // Disable bodyParser for API routes
  },
};