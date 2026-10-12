import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const TO_HOME = new Set([
  "/download-video-from-url",
  "/download-video-from-url/",
  "/video-downloader",
  "/video-downloader/",
]);

export function middleware(request: NextRequest) {
  if (!TO_HOME.has(request.nextUrl.pathname)) return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/download-video-from-url", "/download-video-from-url/", "/video-downloader", "/video-downloader/"],
};
