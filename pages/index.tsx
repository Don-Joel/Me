import PagesMetaHead from "../components/PagesMetaHead";
import DynamicAppBanner from "../components/shared/DynamicAppBanner";
import HowIBuildSection from "../components/about/HowIBuildSection";
import { PERSON_SAME_AS, SITE_URL, personStructuredData } from "../lib/seo";

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Joel Tavarez",
        description: "The product engineering portfolio of Joel Tavarez.",
        publisher: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en-US",
      },
      {
        ...personStructuredData(),
        knowsAbout: [
          "Product engineering",
          "Full-stack development",
          "React",
          "JVM languages",
          "Artificial intelligence orchestration",
        ],
        sameAs: [...PERSON_SAME_AS],
      },
    ],
  };

  return (
    <>
      <PagesMetaHead
        title="Joel Tavarez - Product Engineer | AI Orchestration, Leadership, Systems"
        description="Product engineer who uses AI orchestration to build ideal software. Full-stack experience at Newmark and Target; leadership, system optimization, and React/JVM."
        canonicalPath="/"
        ogImage="/images/og-card.png"
        ogImageAlt="Joel Tavarez, Product Engineer — portfolio homepage"
        structuredData={structuredData}
      />
      <DynamicAppBanner />
      <HowIBuildSection />
    </>
  );
};

export default Home;
