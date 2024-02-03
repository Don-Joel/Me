function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        <a
          href=""
          target="__blank"
          className="text-secondary-dark dark:text-secondary-light font-medium  hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          Made with Next.js and Tailwind by Joel Tavarez
        </a>
        <a> &copy; {new Date().getFullYear()}</a>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
