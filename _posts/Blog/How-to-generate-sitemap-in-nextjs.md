---
title: "How to create a sitemap.xml for a Nextjs blog"
description: "I organized a blog about how to create a sitemap.xml and make it Google searchable on a blog made with Nextjs."
coverImage: "/assets/posts/Blog/How-to-generate-sitemap-in-nextjs/cover.png"
date: "2023-07-04T21:00:07.322Z"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/posts/Blog/How-to-generate-sitemap-in-nextjs/cover.png"
tag: sitemap
category: Blog
---

:::tip
💡 We share how to create sitemap.xml so Google crawler can check your site.
:::

<Image width="1265" height="519" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Blog/How-to-generate-sitemap-in-nextjs/1.png" />

## Create script

The sitemap.xml has the following format.

It contains information on pages that exist within the site.

To create sitemap.xml, write all the pages in the blog created with Nextjs in sitemap format. <br /> However, in the case of a blog site, it would be too cumbersome to update the sitemap every time you write a blog.
So, let's easily create sitemap.xml using a script.

First, I will share the final code.

<GoogleAd/>

```js
const fs = require("fs");
const globby = require("globby");
const path = require("path");
const prettier = require("prettier");

const getDate = new Date().toISOString();

const YOUR_AWESOME_DOMAIN = "https://cozycod.ing";

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
```

## 1.pagesSitemapGenerator

```js
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
```

<GoogleAd/>

`pagesSitemapGenerator` is a function that converts the basic pages of a site into a sitemap. <br/>For example, pages in large categories such as `/posts` and `/projects` are made into sitemaps.

We used the `globby` module to import only the files we needed within pages.
Files you do not want to include can be excluded by appending `!`.

## 2.categoriesSitemapGenerator

```js
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
```

`categoriesSitemapGenerator` is a function that creates a sitemap for the categories of blog posts.

As you write, the category increases variably, so you can't add it every time, so I wrote it as a function.

## 3.postsSitemapGenerator

```js
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
```

Finally, `postsSitemapGenerator` is a function that creates a sitemap for blog posts.

Since this site supports multiple languages, there is always a country code like `https://cozy-coder.com/en`. <br/> Since the url itself is different for each language, sitemap information was created for each language even if it was the same article.

## 4.Create final sitemap

```js
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
```

I wrote the code as above to create the final sitemap, and sitemap.xml was located under the public folder.

We have finished formatting the sitemap file through the prettier module.

```js
const formatted = (sitemap) => prettier.format(sitemap, { parser: "html" });
```

<GoogleAd/>

## 5. Write a shell script

```shell
# generate-sitemap.sh

ls

# Create a static sitemap
echo "Generating static sitemap..."
node scripts/sitemap.js
echo "Generating static sitemap done!"

# Send sitemap update ping to Google Search Console
curl http://google.com/ping?sitemap=https://cozy-coder.com/sitemap.xml
echo "Send sitemap ping to Google"
```

I wrote the shell script for sitemap generation as above.

```shell
curl http://google.com/ping?sitemap=https://cozy-coder.com/sitemap.xml
```

The code above notifies the Search Console site that the sitemap has been updated.

## 6. Modify the build script

If you have written a sitemap generation script and a shell script, you need to modify the build command so that the sitemap is automatically generated during build.

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build && next export && sh scripts/generate-sitemap.sh ",
    "start": "next start",
    "lint": "next lint"
  },
```

You can run a shell script after building to update the sitemap every time you build it.

```bash
sh scripts/generate-sitemap.sh
```

## finish

Today, when creating a blog with Nextjs, I made a sitemap.xml directly without using a library.
It's not easy to create a blog yourself, and there are already a lot of well-made blogs, so you don't have to do it.

p.s. You guys just make it on the blog platform 😂
