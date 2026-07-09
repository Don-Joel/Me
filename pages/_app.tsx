import "../styles/globals.css";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
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
          <div key={router.asPath}>
            <Component {...pageProps} />
          </div>
        </DefaultLayout>
        <UseScrollToTop />
      </div>
      <Analytics />
    </>
  );
};

export default MyApp;
