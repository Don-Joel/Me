import dynamic from "next/dynamic";
import PagesMetaHead from "../components/PagesMetaHead";
import DynamicAppBanner from "../components/shared/DynamicAppBanner";
import HowIBuildSection from "../components/about/HowIBuildSection";
import AboutMeBio from "../components/about/AboutMeBio";

const TechnologiesSection = dynamic(
  () => import("../components/about/TechnologiesSection"),
  {
    loading: () => (
      <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-900 min-h-[400px]" />
    ),
    ssr: true,
  }
);

const Home = () => {
  return (
    <>
      <PagesMetaHead
        title="Joel Tavarez - Product Engineer | AI Orchestration, Leadership, Systems"
        description="Product engineer who uses AI orchestration (Codex, Opus) to build ideal software. Full-stack experience at Newmark and Target; leadership, system optimization, and React/JVM."
        keywords="Joel Tavarez, product engineer, AI orchestration, Codex, Opus, full-stack engineer, React, leadership, systems optimization, software engineer"
      />
      <DynamicAppBanner />
      <HowIBuildSection />
      <AboutMeBio />
      <TechnologiesSection />
    </>
  );
};

export default Home;
