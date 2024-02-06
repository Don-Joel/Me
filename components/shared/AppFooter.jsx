import AppFooterCopyright from "./AppFooterCopyright";

function AppFooter() {
  return (
    <footer className="container mx-auto min-h-screen">
      <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark min-h-screen">
        <AppFooterCopyright />
      </div>
    </footer>
  );
}

export default AppFooter;
