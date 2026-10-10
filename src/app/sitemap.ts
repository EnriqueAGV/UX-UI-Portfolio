import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { system } from "@/content/system";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, priority: 1 },
    { url: `${site.url}/projects`, priority: 0.8 },
    ...projects.map((p) => ({ url: `${site.url}/projects/${p.slug}`, priority: 0.9 })),
    { url: `${site.url}/projects/${system.slug}`, priority: 0.7 },
  ];
}
