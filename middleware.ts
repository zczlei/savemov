import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GONE = new Set([
  "/download-video-from-url",
  "/download-video-from-url/",
  "/video-downloader",
  "/video-downloader/",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (GONE.has(pathname)) {
    return new NextResponse("This page does not exist.", {
      status: 410,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "x-robots-tag": "noindex",
        "cache-control": "no-store",
      },
    });
  }

  if (pathname.length > 1 && !pathname.endsWith("/") && !pathname.startsWith("/api/") && !pathname.includes(".")) {
    const url = request.nextUrl.clone();
    url.href = new URL(`${pathname}/${request.nextUrl.search}`, request.url).href;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|icon.svg).*)"],
};
