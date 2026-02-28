const AppFooterCopyright = () => {
  return (
    <div className="text-center">
      <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-general-medium" suppressHydrationWarning>
        <span className="text-slate-900 dark:text-slate-100 font-general-semibold">
          Joel Tavarez
        </span>
        {" "}&copy; {new Date().getFullYear()}
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-500 mt-2 font-general-regular">
        Full-stack software engineer passionate about building great products
      </p>
    </div>
  );
};

export default AppFooterCopyright;
