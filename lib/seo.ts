export const SITE_URL = "https://joeltavarez.dev";
export const SITE_NAME = "Joel Tavarez";
export const SITE_TITLE_DEFAULT = "Joel Tavarez's Portfolio";
export const SITE_DESCRIPTION_DEFAULT =
  "Product engineer who uses AI orchestration to build ideal software. Full-stack experience at Newmark and Target.";
export const DEFAULT_OG_IMAGE = "/images/og-card.png";
export const DEFAULT_OG_IMAGE_ALT = "Joel Tavarez, Product Engineer";
export const THEME_COLOR_LIGHT = "#f8fafc";
export const THEME_COLOR_DARK = "#0f172a";

export const PERSON_SAME_AS = [
  "https://github.com/Don-Joel",
  "https://www.linkedin.com/in/joel-d-tavarez/",
] as const;

export type SitemapEntry = {
  path: string;
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
  /** ISO date string (YYYY-MM-DD). Update when the page content meaningfully changes. */
  lastmod: string;
};

/** Keep in sync with public routes. lastmod should reflect content changes. */
export const SITEMAP_ENTRIES: SitemapEntry[] = [
  { path: "/", changefreq: "monthly", priority: 1.0, lastmod: "2026-07-19" },
  {
    path: "/about",
    changefreq: "monthly",
    priority: 0.8,
    lastmod: "2026-07-19",
  },
  {
    path: "/projects",
    changefreq: "monthly",
    priority: 0.9,
    lastmod: "2026-07-19",
  },
  {
    path: "/contact",
    changefreq: "yearly",
    priority: 0.5,
    lastmod: "2026-07-19",
  },
];

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  const normalized = `/${path.replace(/^\/|\/$/g, "")}`;
  return `${SITE_URL}${normalized}`;
}

export function absoluteAssetUrl(assetPath: string): string {
  if (assetPath.startsWith("http://") || assetPath.startsWith("https://")) {
    return assetPath;
  }
  return `${SITE_URL}${
    assetPath.startsWith("/") ? assetPath : `/${assetPath}`
  }`;
}

export function personStructuredData() {
  return {
    "@type": "Person" as const,
    "@id": `${SITE_URL}/#person`,
    name: SITE_NAME,
    url: SITE_URL,
    image: absoluteAssetUrl("/images/logo.png"),
    jobTitle: "Product Engineer",
    sameAs: [...PERSON_SAME_AS],
  };
}

export function breadcrumbStructuredData(
  items: { name: string; path: string }[]
) {
  return {
    "@type": "BreadcrumbList" as const,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildSitemapXml(
  entries: SitemapEntry[] = SITEMAP_ENTRIES
): string {
  const urls = entries
    .map((entry) => {
      const loc = absoluteUrl(entry.path);
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
