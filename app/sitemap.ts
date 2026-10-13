import type { MetadataRoute } from "next";
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
      url: abs("/twitter-video-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
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
    },
    {
      url: abs("/pt/reddit-video-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: abs("/es/reddit-video-downloader/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
