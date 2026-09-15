const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const publicConfig = {
  siteUrl: rawSiteUrl || "http://localhost:3000",
  hasPublicUrl: Boolean(rawSiteUrl),
  allowIndexing:
    Boolean(rawSiteUrl) && process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
  portfolioUrl: process.env.NEXT_PUBLIC_PORTFOLIO_URL?.trim() || null,
  sourceUrl: process.env.NEXT_PUBLIC_SOURCE_URL?.trim() || null,
};
