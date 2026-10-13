import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const abs = (path: string) => `${SITE}${path}`;

const languages = {
  en: abs("/"),
  pt: abs("/pt/"),
  es: abs("/es/"),
  "x-default": abs("/"),
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
  ];
}
