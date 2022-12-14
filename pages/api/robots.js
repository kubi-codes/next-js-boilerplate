// /pages/api/robots
export default function handler(req, res) {
  res.send(`
    # *
    User-agent: *
    Allow: /

    # Host
    Host: http://localhost:3000

    # Sitemaps
    Sitemap: http://localhost:3000/sitemap.xml

  `); // Send your `robots.txt content here
}
