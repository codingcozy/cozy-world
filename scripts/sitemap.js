const fs = require("fs");
const globby = require("globby");
const path = require("path");
const prettier = require("prettier");

const getDate = new Date().toISOString();

const YOUR_AWESOME_DOMAIN = "https://cozy-world.vercel.app";

const formatted = (sitemap) => prettier.format(sitemap, { parser: "html" });

const pagesSitemapGenerator = async () => {
  const pages = await globby([
    // include
    "pages/**/*.tsx",
    "pages/*.tsx",
    "pages/_*.tsx",
    // exclude
    "!pages/_*.tsx",
    "!pages/**/[slug].tsx",
  ]);

  const pagesSitemap = `
    ${pages
      .map((page) => {
        const path = page
          .replace("pages/", "")
          .replace(".tsx", "")
          .replace(/\/index/g, "");
        const routePath = path === "index" ? "" : path;
        return `
          <url>
            <loc>${YOUR_AWESOME_DOMAIN}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
      })
      .join("")}
  `;

  return pagesSitemap;
};

const postsSitemapGenerator = async () => {
  const posts = await globby([
    // include
    "_projects/*.md",
    "_projects/**/*.md",
    "_posts/*.md",
    "_posts/**/*.md",
  ]);

  // console.log(posts);

  const postsSitemap = `
    ${posts
      .map((page) => {
        const path = page
          .replace("_projects", "projects")
          .replace("_posts", "posts")
          .replace(".md", "")
          .replace(/\/index/g, "");
        const routePath = path === "index" ? "" : path;
        return `
          <url>
            <loc>${YOUR_AWESOME_DOMAIN}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
      })
      .join("")}
  `;

  return postsSitemap;
};

(async () => {
  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${await pagesSitemapGenerator()}
			${await postsSitemapGenerator()}
    </urlset>
  `;

  const formattedSitemap = [formatted(generatedSitemap)];

  fs.writeFileSync("public/sitemap.xml", formattedSitemap.join(""), "utf8");
})();

console.log("test");
