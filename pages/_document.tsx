import { Html, Head, Main, NextScript } from "next/document";

const themeInitScript = `
(function () {
  try {
    var theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      if (theme !== "light") {
        localStorage.setItem("theme", "light");
      }
    }
  } catch (e) {}
})();
`;

const Document = () => (
  <Html lang="en">
    <Head>
      <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
