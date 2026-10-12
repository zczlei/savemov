import type { MetadataRoute } from "next";
import { LANGUAGES, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { ...LANGUAGES } },
    },
    {
      url: `${SITE}/pt/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { ...LANGUAGES } },
    },
    {
      url: `${SITE}/es/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { ...LANGUAGES } },
    },
  ];
}
