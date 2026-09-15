import type { MetadataRoute } from "next";
import { publicConfig } from "@/content/config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: publicConfig.allowIndexing
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: publicConfig.hasPublicUrl ? `${publicConfig.siteUrl}/sitemap.xml` : undefined,
  };
}
