import Head from "next/head";
import {
  absoluteAssetUrl,
  absoluteUrl,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  SITE_DESCRIPTION_DEFAULT,
  SITE_NAME,
  SITE_TITLE_DEFAULT,
  SITE_URL,
  THEME_COLOR_DARK,
  THEME_COLOR_LIGHT,
} from "../lib/seo";

type PagesMetaHeadProps = {
  title?: string;
  description?: string;
  /** When null, omits the canonical link (e.g. error pages). */
  canonicalPath?: string | null;
  ogType?: "website" | "profile";
  ogImage?: string;
  ogImageAlt?: string;
  /** Search engine indexing directive. Use "noindex, follow" for 404 and similar. */
  robots?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};

const PagesMetaHead = ({
  title = SITE_TITLE_DEFAULT,
  description = SITE_DESCRIPTION_DEFAULT,
  canonicalPath = "/",
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = DEFAULT_OG_IMAGE_ALT,
  robots = "index, follow",
  structuredData,
}: PagesMetaHeadProps) => {
  const canonicalUrl =
    canonicalPath === null ? null : absoluteUrl(canonicalPath);
  const socialImageUrl = absoluteAssetUrl(ogImage);
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;
  const twitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE?.replace(
    /^@/,
    ""
  );

  const jsonLd = structuredData ?? {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: canonicalUrl ?? SITE_URL,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta charSet="utf-8" />

      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
      <link rel="icon" href="/images/logo.ico" />
      <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      <meta
        name="theme-color"
        content={THEME_COLOR_LIGHT}
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content={THEME_COLOR_DARK}
        media="(prefers-color-scheme: dark)"
      />
      <meta name="color-scheme" content="light dark" />

      {googleVerification ? (
        <meta name="google-site-verification" content={googleVerification} />
      ) : null}
      {bingVerification ? (
        <meta name="msvalidate.01" content={bingVerification} />
      ) : null}

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl ?? SITE_URL} />
      <meta property="og:image" content={socialImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImageUrl} />
      <meta name="twitter:image:alt" content={ogImageAlt} />
      {twitterHandle ? (
        <>
          <meta name="twitter:site" content={`@${twitterHandle}`} />
          <meta name="twitter:creator" content={`@${twitterHandle}`} />
        </>
      ) : null}

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
export { SITE_URL } from "../lib/seo";
