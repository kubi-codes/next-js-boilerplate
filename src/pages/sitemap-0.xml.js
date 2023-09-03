function generateSiteMap({
  // product = [],
  staticPages = [],
}) {
  return `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      ${staticPages.map((url) => {
        const path = url
          .replace("src/pages", "")
          .replace("pages", "")
          .replace(".jsx", "")
          .replace(".tsx", "")
          .replace(".ts", "")
          .replace(".js", "");
        // const route = path === '/index' ? '' : path;
        const regex = /\/index+/g;
        const route = path.replace(regex, "");
        return `
          <url>
            <loc>${process.env.NEXT_PUBLIC_SITE_URL}${route}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
        `;
      })}
    </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // List all your pages path
  let pages = ["/"];

  const combinePage = [...pages];

  // We generate the XML sitemap with the product data
  const sitemap = generateSiteMap({
    staticPages: combinePage,
  });

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap.replaceAll(",", ""));
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
