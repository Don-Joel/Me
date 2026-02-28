import "../styles/globals.css";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import DefaultLayout from "../components/layout/DefaultLayout";
import UseScrollToTop from "../hooks/useScrollToTop";

const Analytics = process.env.NEXT_PUBLIC_VERCEL_ENV
  ? dynamic<{}>(
      () => import("@vercel/analytics/react").then((mod) => mod.Analytics),
      { ssr: false }
    )
  : () => null;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <>
      <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
        <DefaultLayout>
          <motion.div
            key={router.asPath}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </DefaultLayout>
        <UseScrollToTop />
      </div>
      <Analytics />
    </>
  );
};

export default MyApp;
