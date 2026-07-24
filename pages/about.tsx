import dynamic from "next/dynamic";
import AboutMeBio from "../components/about/AboutMeBio";
import PagesMetaHead from "../components/PagesMetaHead";
import PageContinueSection from "../components/shared/PageContinueSection";
import {
  SITE_URL,
  breadcrumbStructuredData,
  personStructuredData,
} from "../lib/seo";

const TechnologiesSection = dynamic(
  () => import("../components/about/TechnologiesSection"),
  {
    loading: () => (
      <section className="min-h-[400px] bg-gradient-to-b from-slate-50 to-white py-20 dark:from-slate-900 dark:to-slate-900 lg:py-32" />
    ),
    ssr: true,
  }
);

const About = () => (
  <>
    <PagesMetaHead
      title="About Joel Tavarez | Product Engineer"
      description="Learn about Joel Tavarez's product engineering experience, leadership, technology stack, and work building scalable full-stack systems."
      canonicalPath="/about"
      ogType="profile"
      ogImage="/images/og-about.png"
      ogImageAlt="About Joel Tavarez — Product Engineer"
      structuredData={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ProfilePage",
            "@id": `${SITE_URL}/about#webpage`,
            name: "About Joel Tavarez",
            description:
              "Joel Tavarez's product engineering experience, leadership, and technology stack.",
            url: `${SITE_URL}/about`,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            mainEntity: { "@id": `${SITE_URL}/#person` },
            breadcrumb: breadcrumbStructuredData([
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ]),
          },
          personStructuredData(),
        ],
      }}
    />
    <AboutMeBio />
    <TechnologiesSection />
    <PageContinueSection current="about" />
  </>
);

export default About;
