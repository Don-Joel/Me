import PagesMetaHead from "../components/PagesMetaHead";
import DynamicAppBanner from "../components/shared/DynamicAppBanner";
import AboutMeBio from "../components/about/AboutMeBio";

const Home = () => {
  return (
    <>
      <PagesMetaHead
        title="Joel Tavarez - Full-Stack Software Engineer"
        content="Full-stack software engineer with experience developing microservices in JVM languages and large web applications written with React"
      />
      <DynamicAppBanner />
      <AboutMeBio />
    </>
  );
};

export default Home;
