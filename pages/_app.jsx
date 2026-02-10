import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import DefaultLayout from "../components/layout/DefaultLayout";
import UseScrollToTop from "../hooks/useScrollToTop";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <AnimatePresence>
        <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
          <UseScrollToTop />
        </div>
      </AnimatePresence>
      <Analytics />
    </>
  );
}

export default MyApp;
