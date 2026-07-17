import Head from "next/head";

type PagesMetaHeadProps = {
  title?: string;
  keywords?: string;
  description?: string;
  canonicalPath?: string;
  ogType?: "website" | "profile";
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};

export const SITE_URL = "https://joeltavarez.dev";

const PagesMetaHead = ({
  title = "Joel Tavarez's Portfolio",
  keywords = "Joel Tavarez, Software Engineer, web, ui, design, jvm languages, Joel Tavarez website",
  description = "Joel Tavarez portfolio website",
  canonicalPath = "/",
  ogType = "website",
  structuredData,
}: PagesMetaHeadProps) => {
  const normalizedPath =
    canonicalPath === "/" ? "" : `/${canonicalPath.replace(/^\/|\/$/g, "")}`;
  const canonicalUrl = `${SITE_URL}${normalizedPath}`;
  const socialImageUrl = `${SITE_URL}/images/og-card.png?v=4`;
  const jsonLd = structuredData ?? {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: canonicalUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "Joel Tavarez",
      url: SITE_URL,
    },
  };

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" href="/images/logo.ico" />

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Joel Tavarez" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={socialImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Joel Tavarez, Product Engineer" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImageUrl} />
      <meta name="twitter:image:alt" content="Joel Tavarez, Product Engineer" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <title>{title}</title>
    </Head>
  );
};

export default PagesMetaHead;
