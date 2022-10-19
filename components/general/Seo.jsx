import React from "react";
import seo from "seo.json";

function Seo() {
  return (
    <>
      <meta name="description" content={seo?.description} />
      <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />

      {/* OpenGraph tags */}
      <meta property="og:title" content={seo?.og_title} />
      <meta property="og:description" content={seo?.og_desc} />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_UR} />
      <meta property="og:type" content="website"></meta>

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo?.twitter_id} />
      <meta name="twitter:title" content={seo?.twitter_title} />
      <meta name="twitter:description" content={seo?.twitter_desc} />
      <meta name="twitter:image" content={seo?.twitter_image} />
      <meta name="twitter:image:alt" content={seo?.twitter_image_alt} />
    </>
  );
}

export default Seo;
