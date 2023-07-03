---
title: "Building a Blog with Next.js: A Step-by-Step Guide"
description: "I created my own blog with various features other than posting using Next.js."
coverImage: "/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/cover.png"
date: "2023-07-01T05:35:07.322Z"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/cover.png"
tag: Nextjs
category: Nextjs
---

# Building a Blog with Next.js: A Step-by-Step Guide

<Image width="846" height="458" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/1.png" />

Let's take a look at how to make a blog using NextJS and VERCEL.
There is also a way to make a word press blog spot, but if you make it yourself as a developer, it will be a good experience.

## Create Next.js Project

```bash
npx create-next-app cozy-world
```

Since I'm going to make Next.js with typescript, I wrote the following.

```bash
npx create-next-app@latest --typescript cozy-world
```

## Apply the Next.js blog template

<Image width="846" height="501" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/2.png" />

There is a blog boilerplate using Nextjs in [vercel's official document](https://github.com/vercel/next.js/tree/canary/examples/blog-starter), so apply it by referring to this repository.

<Image width="846" height="475" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/3.png" />

Use the blog-starter code to remove unnecessary parts and use it.

<Image width="846" height="1562" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/4.png" />

Because cozy-world is largely divided into blog posts and projects, I modified it to have the folder structure as above.

## SCSS

The style of this blog uses scss.

```
yarn add sass
```

When sass is installed, you can create it by creating `component.module.scss` under the component folder as shown below.

<Image width="846" height="181" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/5.png" />

If the file name is written as module.scss, the unique class name in each component is automatically applied.

The scss file was applied using bind of classnames as shown below.

```ts
import React from "react";
import style from "./Header.module.scss";
import classnames from "classnames/bind";
import Link from "next/link";

const cx = classnames.bind(style);

const Header = () => {
  return (
    <header className={cx("header")}>
      <div className={cx("inner")}>
        <h1 className={cx("title")}>
          <Link href={"/"}>Cozy World</Link>
        </h1>
        <nav className={cx("nav_area")}>
          <Link href={"/posts"} className={cx("nav_item")}>
            Posts
          </Link>
          <Link href={"/projects"} className={cx("nav_item")}>
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
```

If written as above, the class name is uniquely applied as shown in the picture below.

<Image width="846" height="187" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/6.png" />

## Deploy

<Image width="846" height="468" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/7.png" />

Now that we have created the basic structure for our blog and written the css, let's deploy it using vercel.

Create a new project after signing up for [vercel](https://vercel.com/).

<Image width="846" height="455" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/8.png" />

When a project is pushed to a github repository, it is automatically deployed.

<Image width="846" height="448" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/9.png" />

Today, I learned how to simply create a blog using Nextjs and vercel.

Next, we will cover the process of adding necessary features to the blog.
