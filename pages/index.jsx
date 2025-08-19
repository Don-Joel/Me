import { motion } from "framer-motion";
import PagesMetaHead from "../components/PagesMetaHead";
import DynamicAppBanner from "../components/shared/DynamicAppBanner";
import AboutMeBio from "../components/about/AboutMeBio";

export default Home = () => {
  return (
    <div className="container mx-auto">
      <PagesMetaHead
        title="Joel Tavarez"
        content="Hello, World! This is Joel Tavarez's Website."
      />
      <DynamicAppBanner />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <AboutMeBio />
      </motion.div>
    </div>
  );
}
