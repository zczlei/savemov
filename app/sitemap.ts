import type { MetadataRoute } from "next";
import { SIMPLE_PLATFORMS } from "@/lib/platform-pages";
import { SITE } from "@/lib/site";

const abs = (path: string) => `${SITE}${path}`;

const languages = {
  en: abs("/"),
  pt: abs("/pt/"),
  es: abs("/es/"),
  "x-default": abs("/"),
} as const;

const facebookLanguages = {
  en: abs("/facebook-video-downloader/"),
  pt: abs("/pt/facebook-video-downloader/"),
  es: abs("/es/facebook-video-downloader/"),
  "x-default": abs("/facebook-video-downloader/"),
} as const;

const tiktokLanguages = {
  en: abs("/tiktok-downloader/"),
  pt: abs("/pt/tiktok-downloader/"),
  es: abs("/es/tiktok-downloader/"),
  "x-default": abs("/tiktok-downloader/"),
} as const;

const instagramLanguages = {
  en: abs("/instagram-reels-downloader/"),
  pt: abs("/pt/instagram-reels-downloader/"),
  es: abs("/es/instagram-reels-downloader/"),
  "x-default": abs("/instagram-reels-downloader/"),
} as const;

const pinterestLanguages = {
  en: abs("/pinterest-video-downloader/"),
  pt: abs("/pt/pinterest-video-downloader/"),
  es: abs("/es/pinterest-video-downloader/"),
  "x-default": abs("/pinterest-video-downloader/"),
} as const;

const twitterLanguages = {
  en: abs("/twitter-video-downloader/"),
  pt: abs("/pt/twitter-video-downloader/"),
  es: abs("/es/twitter-video-downloader/"),
  "x-default": abs("/twitter-video-downloader/"),
} as const;

const redditLanguages = {
  en: abs("/reddit-video-downloader/"),
  pt: abs("/pt/reddit-video-downloader/"),
  es: abs("/es/reddit-video-downloader/"),
  "x-default": abs("/reddit-video-downloader/"),
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: abs("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { ...languages } },
    },
    {
      url: abs("/pt/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { ...languages } },
    },
    {
      url: abs("/es/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { ...languages } },
    },
    {
      url: abs("/tiktok-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: { ...tiktokLanguages } },
    },
    {
      url: abs("/pt/tiktok-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: { languages: { ...tiktokLanguages } },
    },
    {
      url: abs("/es/tiktok-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: { languages: { ...tiktokLanguages } },
    },
    {
      url: abs("/instagram-reels-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: { ...instagramLanguages } },
    },
    {
      url: abs("/pt/instagram-reels-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: { languages: { ...instagramLanguages } },
    },
    {
      url: abs("/es/instagram-reels-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: { languages: { ...instagramLanguages } },
    },
    {
      url: abs("/pinterest-video-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: { ...pinterestLanguages } },
    },
    {
      url: abs("/pt/pinterest-video-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: { languages: { ...pinterestLanguages } },
    },
    {
      url: abs("/es/pinterest-video-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: { languages: { ...pinterestLanguages } },
    },
    {
      url: abs("/twitter-video-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: { ...twitterLanguages } },
    },
    {
      url: abs("/pt/twitter-video-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: { languages: { ...twitterLanguages } },
    },
    {
      url: abs("/es/twitter-video-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: { languages: { ...twitterLanguages } },
    },
    {
      url: abs("/facebook-video-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: { ...facebookLanguages } },
    },
    {
      url: abs("/pt/facebook-video-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: { languages: { ...facebookLanguages } },
    },
    {
      url: abs("/es/facebook-video-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: { languages: { ...facebookLanguages } },
    },
    {
      url: abs("/reddit-video-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: { ...redditLanguages } },
    },
    {
      url: abs("/pt/reddit-video-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: { languages: { ...redditLanguages } },
    },
    {
      url: abs("/es/reddit-video-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: { languages: { ...redditLanguages } },
    },
    ...SIMPLE_PLATFORMS.map((platform) => ({
      url: abs(`/${platform.slug}/`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
