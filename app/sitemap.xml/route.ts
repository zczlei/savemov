import { SIMPLE_PLATFORMS } from "@/lib/platform-pages";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

/** Change a page's date only when that page's content changes. The build clock must not refresh every URL. */
const PUBLISHED = "2026-10-13";

function entry(path: string, priority: number, changefreq = "weekly", lastmod = PUBLISHED) {
  return `  <url>
    <loc>${SITE}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
}

function sitemapXml() {
  const urls = [
    entry("/", 1, "daily"),
    entry("/pt/", 0.9),
    entry("/es/", 0.9),
    entry("/tiktok-downloader/", 0.8),
    entry("/pt/tiktok-downloader/", 0.7),
    entry("/es/tiktok-downloader/", 0.7),
    entry("/instagram-reels-downloader/", 0.8),
    entry("/pt/instagram-reels-downloader/", 0.7),
    entry("/es/instagram-reels-downloader/", 0.7),
    entry("/pinterest-video-downloader/", 0.8),
    entry("/pt/pinterest-video-downloader/", 0.7),
    entry("/es/pinterest-video-downloader/", 0.7),
    entry("/twitter-video-downloader/", 0.8),
    entry("/pt/twitter-video-downloader/", 0.7),
    entry("/es/twitter-video-downloader/", 0.7),
    entry("/facebook-video-downloader/", 0.8),
    entry("/pt/facebook-video-downloader/", 0.7),
    entry("/es/facebook-video-downloader/", 0.7),
    entry("/reddit-video-downloader/", 0.8),
    entry("/pt/reddit-video-downloader/", 0.7),
    entry("/es/reddit-video-downloader/", 0.7),
    entry("/snapchat-video-downloader/", 0.8),
    entry("/dailymotion-video-downloader/", 0.8),
    entry("/vk-video-downloader/", 0.8),
    ...SIMPLE_PLATFORMS.map((platform) => entry(`/${platform.slug}/`, 0.6)),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;
}

export function GET() {
  return new Response(sitemapXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
