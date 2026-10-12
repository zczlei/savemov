import { DOWNLOAD_API } from "@/lib/site";
import { decodeDownloadUrl, sanitizeVideoUrl } from "@/lib/download";

export const runtime = "edge";

type Upstream = {
  status?: string;
  url?: string;
  title?: string;
  error?: { code?: string } | string;
};

function errorCode(data: Upstream | null, status: number) {
  if (status === 429) return "ratelimit";
  const code = typeof data?.error === "object" ? data.error.code : undefined;
  if (code === "error.api.link.unsupported" || code === "error.api.fetch.empty") return "unsupported";
  return "unsupported";
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { url?: unknown } | null;
  const url = sanitizeVideoUrl(body?.url);
  if (!url) {
    return Response.json({ error: "badUrl" }, { status: 400, headers: { "Cache-Control": "no-store" } });
  }

  try {
    const upstream = await fetch(DOWNLOAD_API, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
      cache: "no-store",
    });

    const data = (await upstream.json().catch(() => null)) as Upstream | null;
    const downloadUrl = data && data.status !== "error" ? decodeDownloadUrl(data.url) : null;

    if (!upstream.ok || !downloadUrl) {
      const code = errorCode(data, upstream.status);
      const status = upstream.status === 429 ? 429 : upstream.ok ? 422 : upstream.status || 502;
      return Response.json({ error: code }, { status, headers: { "Cache-Control": "no-store" } });
    }

    const title = typeof data?.title === "string" && data.title.length <= 180 ? data.title : undefined;
    return Response.json(
      { downloadUrl, ...(title ? { title } : {}) },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return Response.json({ error: "network" }, { status: 502, headers: { "Cache-Control": "no-store" } });
  }
}
