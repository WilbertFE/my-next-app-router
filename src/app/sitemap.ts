import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://github.com/wilbertFE",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://github.com/wilbertFE/about",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://github.com/wilbertFE/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
  ];
}
