import dynamic from "next/dynamic";
import PagesMetaHead from "../components/PagesMetaHead";
import DynamicAppBanner from "../components/shared/DynamicAppBanner";
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
        title="Joel Tavarez - Full-Stack Software Engineer"
        content="Full-stack software engineer with experience developing microservices in JVM languages and large web applications written with React"
      />
      <DynamicAppBanner />
      <AboutMeBio />
      <TechnologiesSection />
    </>
  );
};

export default Home;
