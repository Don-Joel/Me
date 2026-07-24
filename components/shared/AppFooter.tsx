import AppFooterCopyright from "./AppFooterCopyright";

const AppFooter = () => {
  return (
    <footer className="border-t border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="container mx-auto px-6 py-12 sm:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-6xl">
          <AppFooterCopyright />
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
