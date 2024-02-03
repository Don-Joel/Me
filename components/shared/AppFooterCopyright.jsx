function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        <p className="text-secondary-dark dark:text-secondary-light font-medium ml-1 ">
          Made with Next.js and Tailwind by Joel Tavarez &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
