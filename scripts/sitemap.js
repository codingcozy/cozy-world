const fs = require("fs");
const globby = require("globby");
const path = require("path");
const prettier = require("prettier");

const getDate = new Date().toISOString();

const YOUR_AWESOME_DOMAIN = "https://cozy-world.vercel.app";

const formatted = (sitemap) => prettier.format(sitemap, { parser: "html" });
const langList = ["ko", "en", "ja"];

const pagesSitemapGenerator = async () => {
  const pages = await globby([
    // include
    "pages/**/*.tsx",
    "pages/**/**/*.tsx",
    "pages/*.tsx",
    "pages/_*.tsx",
    // exclude
    "!pages/_*.tsx",
    "!pages/index.tsx",
    "!pages/[slug].tsx",
    "!pages/**/[slug].tsx",
    "!pages/**/**/[category]/index.tsx",
    "!pages/**/**/[slug].tsx",
  ]);

  return `${langList
    .map((lang) => {
      return `
    ${pages
      .map((page) => {
        const path = page
          .replace("pages/", "")
          .replace("[lang]", lang)
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
    })
    .join("")}`;
};

const categoriesSitemapGenerator = () => {
  const categories = fs.readdirSync("_posts/");

  return `${langList
    .map((lang) => {
      return `${categories
        .map(
          (category) =>
            `<url>
              <loc>${YOUR_AWESOME_DOMAIN}/${lang}/posts/${category}</loc>
              <lastmod>${getDate}</lastmod>
            </url>
            `
        )
        .join("")}`;
    })
    .join("")}`;
};

console.log(categoriesSitemapGenerator());

const postsSitemapGenerator = async () => {
  const posts = await globby([
    // include
    "_projects/*.md",
    "_projects/**/*.md",
    "_posts/*.md",
    "_posts/**/*.md",
    "_posts/**/**/*.md",
  ]);

  const postsSitemap = `
    ${langList
      .map((lang) => {
        return `${posts
          .map((page) => {
            const path = page
              .replace("_projects", "projects")
              .replace("_posts", "posts")
              .replace(".md", "")
              .replace(/\/ko|\/en|\/ja/g, "")
              .replace(/\/index/g, "");
            let routePath = path === "index" ? "" : path;
            routePath = `${lang}/${routePath}`;

            return `
            <url>
              <loc>${YOUR_AWESOME_DOMAIN}/${routePath}</loc>
              <lastmod>${getDate}</lastmod>
            </url>
          `;
          })
          .join("")}`;
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
      ${categoriesSitemapGenerator()}
			${await postsSitemapGenerator()}
    </urlset>
  `;

  const formattedSitemap = [formatted(generatedSitemap)];

  fs.writeFileSync("public/sitemap.xml", formattedSitemap.join(""), "utf8");
})();
