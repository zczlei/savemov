/** English platform pages that share one downloader layout.
 * Twitter, Reddit, Facebook, TikTok, Instagram, Pinterest, Snapchat, Dailymotion and VK have their own pages and are not listed here. */

export type SimplePlatform = {
  slug: string;
  name: string;
  scope: string;
};

export const SIMPLE_PLATFORMS: SimplePlatform[] = [
  {
    slug: "bluesky-video-downloader",
    name: "Bluesky",
    scope: "Public Bluesky posts. Private accounts stay out of reach.",
  },
  {
    slug: "loom-video-downloader",
    name: "Loom",
    scope: "Recordings shared with a public link.",
  },
  {
    slug: "okru-video-downloader",
    name: "OK.ru",
    scope: "Public OK.ru videos.",
  },
  {
    slug: "rutube-video-downloader",
    name: "Rutube",
    scope: "Public Rutube videos.",
  },
  {
    slug: "streamable-video-downloader",
    name: "Streamable",
    scope: "Public Streamable videos.",
  },
  {
    slug: "tumblr-video-downloader",
    name: "Tumblr",
    scope: "Public Tumblr video posts.",
  },
];

export const PLATFORM_ICONS: Record<string, string> = {
  "instagram-reels-downloader": "/platforms/instagram.png",
  "twitter-video-downloader": "/platforms/twitter.png",
  "facebook-video-downloader": "/platforms/facebook.png",
  "tiktok-downloader": "/platforms/tiktok.png",
  "reddit-video-downloader": "/platforms/reddit.png",
  "bluesky-video-downloader": "/platforms/bluesky.png",
  "dailymotion-video-downloader": "/platforms/dailymotion.png",
  "loom-video-downloader": "/platforms/loom.png",
  "okru-video-downloader": "/platforms/okru.png",
  "pinterest-video-downloader": "/platforms/pinterest.png",
  "rutube-video-downloader": "/platforms/rutube.png",
  "snapchat-video-downloader": "/platforms/snapchat.png",
  "streamable-video-downloader": "/platforms/streamable.png",
  "tumblr-video-downloader": "/platforms/tumblr.png",
  "vk-video-downloader": "/platforms/vk.png",
};

export function platformBySlug(slug: string) {
  return SIMPLE_PLATFORMS.find((platform) => platform.slug === slug);
}
