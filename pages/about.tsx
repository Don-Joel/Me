import dynamic from "next/dynamic";
import AboutMeBio from "../components/about/AboutMeBio";
import PagesMetaHead, { SITE_URL } from "../components/PagesMetaHead";

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
      keywords="about Joel Tavarez, Joel Tavarez experience, product engineer, full-stack engineer, React, JVM"
      canonicalPath="/about"
      ogType="profile"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        name: "About Joel Tavarez",
        description:
          "Joel Tavarez's product engineering experience, leadership, and technology stack.",
        url: `${SITE_URL}/about`,
        mainEntity: {
          "@type": "Person",
          name: "Joel Tavarez",
          url: SITE_URL,
          jobTitle: "Product Engineer",
          sameAs: [
            "https://github.com/Don-Joel",
            "https://www.linkedin.com/in/joel-d-tavarez/",
          ],
        },
      }}
    />
    <AboutMeBio />
    <TechnologiesSection />
  </>
);

export default About;
