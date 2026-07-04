import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getAllBlogSlugs } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/hizmetlerimiz",
    "/fiyat-listesi",
    "/hakkimizda",
    "/blog",
    "/iletisim",
  ];

  const blogPages = getAllBlogSlugs().map((slug) => `/blog/${slug}`);

  return [...staticPages, ...blogPages].map((path) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/blog/") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/blog/") ? 0.7 : 0.8,
  }));
}
