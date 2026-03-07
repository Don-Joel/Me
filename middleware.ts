import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Only allow traffic that came through Cloudflare when in production.
 * Cloudflare adds CF-Connecting-IP only on requests from its edge to your origin.
 * Direct hits to Vercel (bypassing Cloudflare) won't have this header.
 */
export function middleware(request: NextRequest) {
  // Skip in development so localhost works
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  const fromCloudflare = request.headers.get("cf-connecting-ip") != null;

  if (!fromCloudflare) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files and Next.js internals.
     */
    "/((?!_next/static|_next/image|favicon.ico|images/|files/).*)",
  ],
};
