import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Vercel does not forward Cloudflare headers (CF-Connecting-IP, Cf-Ray) to your app,
 * so we cannot enforce "only Cloudflare at origin" here. To restrict traffic to
 * Cloudflare only, use Vercel Firewall in the dashboard: add a custom rule that
 * denies requests whose incoming IP is not in Cloudflare's range.
 * Cloudflare IPs: https://www.cloudflare.com/ips-v4 and https://www.cloudflare.com/ips-v6
 */
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/|files/).*)"],
};
