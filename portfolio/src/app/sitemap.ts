import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: new URL("/", siteUrl).href, changeFrequency: "monthly", priority: 1 },
    { url: new URL("/resume", siteUrl).href, changeFrequency: "monthly", priority: 0.8 },
  ];
}