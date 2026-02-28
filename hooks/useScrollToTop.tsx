import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

const useScrollToTop = (): JSX.Element => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = (): void => {
    setShowScroll((prev) => {
      const offset = window.pageYOffset;
      if (!prev && offset > 400) return true;
      if (prev && offset <= 400) return false;
      return prev;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollToTop);
    return () => window.removeEventListener("scroll", scrollToTop);
  }, []);

  const backToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <FiChevronUp
        className="scrollToTop"
        onClick={backToTop}
        style={{
          height: 40,
          width: 40,
          padding: 7,
          borderRadius: 50,
          right: 50,
          bottom: 50,
          display: showScroll ? "flex" : "none",
        }}
      />
    </>
  );
};

export default useScrollToTop;
