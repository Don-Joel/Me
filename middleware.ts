import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Only allow traffic that came through Cloudflare when in production.
 * Cloudflare adds CF-Connecting-IP and Cf-Ray on requests from its edge to your origin.
 * Direct hits to Vercel (bypassing Cloudflare) won't have these headers.
 */
export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  const cfConnectingIp = request.headers.get("cf-connecting-ip");
  const cfRay = request.headers.get("cf-ray");
  const fromCloudflare = cfConnectingIp != null || cfRay != null;

  // Debug: visit ?debug=cf to see if Cloudflare headers reach the app (remove after debugging)
  if (request.nextUrl.searchParams.get("debug") === "cf") {
    const body = [
      "cf-connecting-ip: " + (cfConnectingIp != null ? "present" : "absent"),
      "cf-ray: " + (cfRay != null ? "present" : "absent"),
    ].join("\n");
    return new NextResponse(body, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  }

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
