import type { MetadataRoute } from "next";
import { publicConfig } from "@/content/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!publicConfig.hasPublicUrl) return [];

  return [
    {
      url: publicConfig.siteUrl,
      lastModified: new Date("2026-09-15T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
