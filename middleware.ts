import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = async (req: NextRequest) => {
  const token = req.cookies.get("token")?.value;
  const signInUrl = new URL("/signin", req.url);
  if (!token) {
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/transactions/:path*"],
};
