import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import AppFooter from "../shared/AppFooter";

const AppHeader = dynamic(() => import("../shared/AppHeader"), {
  ssr: false,
  loading: () => (
    <header
      className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/60 dark:border-slate-700/60 shadow-sm"
      aria-hidden
    >
      <nav className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16 lg:h-20" />
      </nav>
    </header>
  ),
});

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </>
  );
};

export default DefaultLayout;
