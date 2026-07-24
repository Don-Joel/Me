const AppFooterCopyright = () => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <p
        className="text-sm font-general-medium text-slate-500 dark:text-slate-400"
        suppressHydrationWarning
      >
        <span className="font-general-semibold text-slate-900 dark:text-slate-100">
          Joel Tavarez
        </span>
        <span className="mx-2 text-slate-300 dark:text-slate-700">·</span>
        <span suppressHydrationWarning>&copy; {new Date().getFullYear()}</span>
      </p>
      <p className="text-sm font-general-medium text-slate-400 dark:text-slate-500">
        Product engineer
      </p>
    </div>
  );
};

export default AppFooterCopyright;
