---
title: "nextjsブログでsitemap.xmlの作成方法"
description: "NextJSで作成されたブログでSiteMap.xmlを作成し、Google検索を行う方法をまとめました。"
coverImage: "/assets/posts/Blog/How-to-generate-sitemap-in-nextjs/cover.png"
date: "2023-07-04T21:00:07.322Z"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/posts/Blog/How-to-generate-sitemap-in-nextjs/cover.png"
tag: sitemap
category: Blog
---

# NextJS でサイトマップファイルを作成する方法

:::tip
💡 Google Crawler がサイトを確認できるように、SiteMap.xml を作成する方法を共有します。
:::

<Image width="1265" height="519" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Blog/How-to-generate-sitemap-in-nextjs/1.png" />

## script 작성

sitemap.xml は、次の形式で構成されています。

サイトに存在するページからの情報が含まれています。

SiteMap.xml を作成する方法は、SiteMap 形式で NextJS で作成されたブログにすべてのページを記述することです。<br />しかし、ブログを書くたびにサイトマップを更新するのは面倒すぎます。

スクリプトを使用して SiteMap.xml を簡単に作成しましょう。

まず、最終コードを共有します。

```js
const fs = require("fs");
const globby = require("globby");
const path = require("path");
const prettier = require("prettier");

const getDate = new Date().toISOString();

const YOUR_AWESOME_DOMAIN = "https://cozy-coder.com";

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

`PagesItemapGenerator`は、サイトの基本ページをサイトマップにする関数です。<br/>たとえば、`/posts`や`/projects`などの大規模なカテゴリのサイトマップを作成します。

`Globby`モジュールを使用して、必要なファイルのみをページに表示しました。
含めたくないファイルを除外できます。

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

`categoriessitemapgenerator`は、ブログ投稿のカテゴリのサイトマップを作成する関数です。

私が書くとき、カテゴリは変数を増やすので、毎回追加することはできません。

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

最後に、`Postssitemapgenerator`は、ブログ投稿のサイトマップを作成する関数です。

このサイトは多言語をサポートしているため、`https：// cozy-coder.com/en`のような全国コードが常にあります。<br/> URL 自体は各言語で異なるため、同じ記事が同じ記事であっても、各言語のサイトマップ情報を作成しました。

## 4.최종 사이트맵 생성

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

最終的なサイトマップを作成するために、上記のようにコードを書きました。SiteMap.xml はパブリックフォルダーの下部にありました。

きれいなモジュールを介して SiteMap ファイルのフォーマットを完了しました。

```js
const formatted = (sitemap) => prettier.format(sitemap, { parser: "html" });
```

## 5. 쉘 스크립트 작성

```shell
# generate-sitemap.sh

ls

# サイトマップ生成
echo "静的サイトマップが作成されています.."
node scripts/sitemap.js
echo "静的サイトマップ生成の完了!"

# Google 서치콘솔에 sitemap 업데이트 핑 전송
curl http://google.com/ping?sitemap=https://cozy-coder.com/sitemap.xml
echo "GoogleへのサイトマップPing送信"
```

サイトマップを作成するためのシェルスクリプトを書きました。

```shell
curl http://google.com/ping?sitemap=https://cozy-coder.com/sitemap.xml
```

上記のコードは、検索コンソライートに、サイトマップに更新があったことを示しています。

## 6. スクリプトの変更を作成します

サイトマップ作成スクリプトとシェルスクリプトを作成した場合、Bildul コマンドを変更して、構築時にサイトマップを自動的に作成する必要があります。

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build && next export && sh scripts/generate-sitemap.sh ",
    "start": "next start",
    "lint": "next lint"
  },
```

ビルド後、サイトマップを作成するたびにシェルスクリプトを実行して更新できます。

```bash
sh scripts/generate-sitemap.sh
```

## 終了

今日、私が NextJS でブログを作成したとき、私はライブラリを使用しませんでしたが、SiteMap.xml を作成しました。
自分でブログを作るのは簡単ではありません。そして、よくできたブログがたくさんあるので、あなたはそれをする必要はありませんが、これらの機能を直接追加して、カスタマイズしてカスタマイズできると感じることができます私が欲しい。

詩ブログプラットフォームで作るだけです 🤣
