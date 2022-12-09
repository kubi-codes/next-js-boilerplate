import { globby } from "globby";

function generateSiteMap({
  // product = [],
  staticPages = [],
}) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
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
        <sitemap>
            <loc>${process.env.NEXT_PUBLIC_SITE_URL}${route}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
          </sitemap>
        `;
      })}
      </sitemapindex>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const pages = await globby([
    "pages/*",
    "!api/*",
    "!pages/sitemap.xml.js",
    "!pages/_document.js",
    "!pages/_app.js",
    "!pages/404.js",
  ]);

  console.log(pages);

  // We generate the XML sitemap with the product data
  const sitemap = generateSiteMap({
    staticPages: pages,
  });

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
