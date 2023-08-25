---
title: "Nextjs 블로그에서 sitemap.xml 만드는 방법"
description: "Nextjs로 만든 블로그에 sitemap.xml을 만들어 구글 검색이 되도록 만드는 방법에 대해서 정리했습니다."
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
💡 구글 크롤러가 사이트를 확인할 수 있도록 sitemap.xml을 만드는 방법에 대해서 공유합니다.
:::

<Image width="1265" height="519" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Blog/How-to-generate-sitemap-in-nextjs/1.png" />

## script 작성

sitemap.xml은 아래와 같은 형식으로 이루어져 있는데요.

사이트 내에 존재하는 페이지들의 정보가 들어있습니다.

sitemap.xml을 만드는 방법은 Nextjs로 만든 블로그에 있는 페이지들을 모두 sitemap 형식으로 작성해주면 됩니다. <br /> 하지만 블로그 사이트의 경우 일일히 블로그를 작성할 때마다 사이트맵을 업데이트 해주기는 너무 번거롭겠죠?

그래서 스크립트를 사용해서 간편하게 sitemap.xml을 만들어보겠습니다.

먼저 최종 코드부터 공유하겠습니다.

<GoogleAd/>

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

<GoogleAd/>

`pagesSitemapGenerator`는 사이트의 기본적인 페이지들을 sitemap으로 만들어주는 함수입니다. <br/>예를 들어 `/posts`, `/projects` 와 같은 큰 카테고리의 페이지들을 사이트맵으로 만들어줍니다.

`globby` 모듈을 사용해서 pages 내에서 필요한 파일만 가져왔습니다.
포함하고 싶지 않은 파일은 `!`를 붙혀서 제외할 수 있습니다.

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

`categoriesSitemapGenerator`는 블로그 글의 카테고리에 대한 사이트맵을 만드는 함수입니다.

글을 작성하다보면 카테고리는 가변적으로 늘어나기 때문에 매번 추가해줄수 없어 함수로 작성했습니다.

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

마지막으로 `postsSitemapGenerator` 는 블로그 글에 대한 사이트맵을 만드는 함수입니다.

이 사이트는 다국어를 지원하기 때문에 `https://cozy-coder.com/en`처럼 항상 국가 코드가 있는데요. <br/> 언어별로 url 자체가 달라지기 때문에 같은 글이더라도 언어별로 사이트맵 정보를 만들어주었습니다.

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

최종 사이트맵을 만들기 위해 위와 같이 코드를 작성했고, sitemap.xml은 public 폴더 하위에 위치하도록 했습니다.

prettier모듈을 통해서 sitemap 파일 포멧팅까지 마쳤습니다.

```js
const formatted = (sitemap) => prettier.format(sitemap, { parser: "html" });
```

<GoogleAd/>

## 5. 쉘 스크립트 작성

```shell
# generate-sitemap.sh

ls

# 정적 sitemap 생성
echo "정적 sitemap 생성중.."
node scripts/sitemap.js
echo "정적 sitemap 생성 완료!"

# Google 서치콘솔에 sitemap 업데이트 핑 전송
curl http://google.com/ping?sitemap=https://cozy-coder.com/sitemap.xml
echo "Google에 sitemap 핑 전송"
```

사이트맵 생성을 위한 쉘 스크립트를 위와 같이 작성했습니다.

```shell
curl http://google.com/ping?sitemap=https://cozy-coder.com/sitemap.xml
```

위 코드는 사이트맵의 업데이트가 있었음을 서치콘솔 사이트에 알려주는 역할을 합니다.

## 6. 빌드 스크립트 수정

사이트맵 생성 스크립트와 쉘 스크립트까지 작성했다면 빌드시에 자동으로 사이트맵을 생성해줄 수 있도록 빌들 명령어를 수정해주어야 합니다.

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build && next export && sh scripts/generate-sitemap.sh ",
    "start": "next start",
    "lint": "next lint"
  },
```

빌드 이후에 쉘 스크립트를 실행시켜서 사이트맵을 빌드할 때마다 업데이트해줄 수 있습니다.

```bash
sh scripts/generate-sitemap.sh
```

## 마무리

오늘은 Nextjs로 블로그를 만들 때 라이브러리를 사용하지 않고 직접 sitemap.xml을 만들어보았는데요.
블로그를 직접 만드는 것은 쉬운 일은 아니고, 이미 잘 만들어진 블로그들이 많이 있어서 굳이 할 필요도 없지만 이런 기능들을 직접 추가해보면서 뿌듯함도 느끼고 내가 원하는 방식으로 커스텀할 수 있다는 장점이 있는 것 같습니다.

ps. 여러분들은 그냥 블로그 플랫폼에서 만드세요 🤣
