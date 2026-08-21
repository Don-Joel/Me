import PagesMetaHead from "../components/PagesMetaHead";
import DynamicAppBanner from "../components/shared/DynamicAppBanner";
import PageContinueSection from "../components/shared/PageContinueSection";
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
        description:
          "The full stack software engineering portfolio of Joel Tavarez.",
        publisher: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en-US",
      },
      {
        ...personStructuredData(),
        knowsAbout: [
          "Full Stack Software Engineering",
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
        title="Joel Tavarez - Full Stack Software Engineer | AI Orchestration, Leadership, Systems"
        description="Full Stack Software Engineer who uses AI orchestration to build ideal software. Full-stack experience at Newmark and Target; leadership, system optimization, and React/JVM."
        canonicalPath="/"
        ogImage="/images/og-card.png"
        ogImageAlt="Joel Tavarez, Full Stack Software Engineer— portfolio homepage"
        structuredData={structuredData}
      />
      <DynamicAppBanner />
      <HowIBuildSection />
      <PageContinueSection current="home" />
    </>
  );
};

export default Home;
