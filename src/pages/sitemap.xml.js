function generateSiteMap() {
  return `
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
          <loc>${process.env.NEXT_PUBLIC_SITE_URL}/sitemap-0.xml</loc>
        </sitemap>
    </sitemapindex>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We generate the XML sitemap with the product data
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap.replaceAll(",", ""));
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
