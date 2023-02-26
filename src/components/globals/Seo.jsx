import React from "react";
import seo from "seo.json";
import Head from "next/head";
import PropTypes from "prop-types";

function Seo(props) {
  const { url, title, description } = props ?? {};
  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${url}`;
  const titlePage = `${title} | ${process.env.NEXT_PUBLIC_APP_NAME}`;

  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description ?? seo?.description} />
      <link rel="canonical" href={pageUrl} />
      <meta name="robots" content="index, follow" />

      {/* OpenGraph tags */}
      <meta property="og:title" content={title ?? seo?.og_title} />
      <meta property="og:description" content={description ?? seo?.og_desc} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website"></meta>
      <meta property="og:image" content={seo?.og_image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo?.twitter_id} />
      <meta name="twitter:title" content={title ?? seo?.twitter_title} />
      <meta
        name="twitter:description"
        content={description ?? seo?.twitter_desc}
      />
      <meta name="twitter:image" content={seo?.twitter_image} />
      <meta name="twitter:image:alt" content={seo?.twitter_image_alt} />

      <title>{titlePage}</title>
    </Head>
  );
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Seo;
