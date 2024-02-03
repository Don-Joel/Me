import Head from "next/head";

function PagesMetaHead({ title, keywords, description }) {
  return (
    <Head lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" src="/public/images/logo.png" />
      <title>{title}</title>
    </Head>
  );
}

PagesMetaHead.defaultProps = {
  title: "Joel Tavarez's Portfolio",
  keywords: "Joel Tavarez, Software Engineer, web, ui, design, jvm languages",
  keywords: "Joel Tavarez website"
};

export default PagesMetaHead;
