import { NextRequest, NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res }); // Updated function call
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return NextResponse.next();
}

// Supports both a single string value or an array of matchers
export const config = {
  matcher: ["/api/auth/:path*"],
};