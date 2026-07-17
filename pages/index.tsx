import PagesMetaHead, { SITE_URL } from "../components/PagesMetaHead";
import DynamicAppBanner from "../components/shared/DynamicAppBanner";
import HowIBuildSection from "../components/about/HowIBuildSection";

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
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Joel Tavarez",
        url: SITE_URL,
        jobTitle: "Product Engineer",
        sameAs: [
          "https://github.com/Don-Joel",
          "https://www.linkedin.com/in/joel-d-tavarez/",
        ],
        knowsAbout: [
          "Product engineering",
          "Full-stack development",
          "React",
          "JVM languages",
          "Artificial intelligence orchestration",
        ],
      },
    ],
  };

  return (
    <>
      <PagesMetaHead
        title="Joel Tavarez - Product Engineer | AI Orchestration, Leadership, Systems"
        description="Product engineer who uses AI orchestration to build ideal software. Full-stack experience at Newmark and Target; leadership, system optimization, and React/JVM."
        keywords="Joel Tavarez, product engineer, AI orchestration, Codex, Opus, full-stack engineer, React, leadership, systems optimization, software engineer"
        canonicalPath="/"
        structuredData={structuredData}
      />
      <DynamicAppBanner />
      <HowIBuildSection />
    </>
  );
};

export default Home;
