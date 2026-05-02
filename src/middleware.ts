import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("token")?.value;
  const role = request.cookies.get("role")?.value;

  const authPages = [
    "/login",
    "/register",
    "/forgot-password",
    "/otp-verification",
  ];

  const protectedPages = [
    "/dashboard",
    
  ];

  // const agentProtectedPages = [
  //   "/agent/dashboard",
  //   "/agent/onboarding",
  //   "/agent/referrals",
  //   "/agent/settings",
  //   "/agent/wallet",
  // ];
  if (authPages.includes(request.nextUrl.pathname) && accessToken) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (protectedPages.includes(request.nextUrl.pathname) && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // if (role !== "owner" && protectedPages.includes(request.nextUrl.pathname)) {
  //   return NextResponse.redirect(new URL("/agent/dashboard", request.url));
  // }

  // if (
  //   role === "owner" &&
  //   agentProtectedPages.includes(request.nextUrl.pathname)
  // ) {
  //   return NextResponse.redirect(new URL("/dashboard", request.url));
  // }

  if (request.nextUrl.pathname === "/logout") {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("token");
    response.cookies.delete("role");
    return response;
  }

  return NextResponse.next();
}



