import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Script from "next/script";
import DefaultLayout from "../components/layout/DefaultLayout";
import UseScrollToTop from "../hooks/useScrollToTop";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        id="theme-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme') || 'dark';
              document.documentElement.classList.add(theme);
            })();
          `,
        }}
      />
      <AnimatePresence>
        <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
          <UseScrollToTop />
        </div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
