import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import AppFooter from "../shared/AppFooter";

const AppHeader = dynamic(() => import("../shared/AppHeader"), {
  ssr: true,
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
