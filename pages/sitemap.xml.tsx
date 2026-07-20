import type { GetServerSideProps } from "next";
import { buildSitemapXml } from "../lib/seo";

/** XML sitemap is written in getServerSideProps; this component never renders. */
const SiteMap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = buildSitemapXml();

  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=604800"
  );
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default SiteMap;
