import "../styles/globals.css";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import DefaultLayout from "../components/layout/DefaultLayout";
import UseScrollToTop from "../hooks/useScrollToTop";

const Analytics = process.env.NEXT_PUBLIC_VERCEL_ENV
  ? dynamic(
      () => import("@vercel/analytics/react").then((mod) => mod.Analytics),
      { ssr: false }
    )
  : () => null;

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
};

export default MyApp;
