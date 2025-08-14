import AppHeader from "../shared/AppHeader";
import AppFooter from "../shared/AppFooter";
import PagesMetaHead from "../PagesMetaHead";

const DefaultLayout = ({ children }) => {
  return (
    <html lang="en" className="min-h-screen">
        <body>
            <PagesMetaHead />
            <AppHeader />
            <div>{children}</div>
            <AppFooter />
        </body>
    </html>
  );
};

export default DefaultLayout;
