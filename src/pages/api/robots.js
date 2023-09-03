// /pages/api/robots
export default function handler(req, res) {
  res.send(`
    # *
    User-agent: *
    Allow: /
    # Host
    Host: ${process.env.NEXT_PUBLIC_SITE_URL}
    # Sitemaps
    Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml
  `); // Send your `robots.txt content here
}
