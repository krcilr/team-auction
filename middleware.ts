import { NextRequest, NextResponse } from "next/server";
import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient({ req, res });
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session || !session.user) {
    const signinUrl = new URL("/signin", req.url);
    return NextResponse.redirect(signinUrl);
  }

  return NextResponse.next();
}

// Supports both a single string value or an array of matchers
export const config = {
  matcher: ["/api/auth/:path*"],
};
