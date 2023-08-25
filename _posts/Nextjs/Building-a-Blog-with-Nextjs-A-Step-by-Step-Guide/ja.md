---
title: "next.jsでブログを構築する：ステップバイステップガイド"
description: "next.jsを使用して投稿する以外のさまざまな機能を備えた自分のブログを作成しました。"
coverImage: "/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/cover.png"
date: "2023-07-01T05:35:07.322Z"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/cover.png"
tag: Nextjs
category: Nextjs
---

<Image width="846" height="458" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/1.png" />

NextJS と Vercel を使用してブログを作成する方法を見てみましょう。
ワードプレスブログスポットを作成する方法もありますが、開発者として自分自身を作ると、それは良い経験になります。

<GoogleAd/>

## next.js プロジェクトを作成します

```bash
npx create-next-app cozy-world
```

TypeScript を使用して next.js を作成するので、次のことを書きました。

```bash
npx create-next-app@latest --typescript cozy-world
```

## next.js ブログテンプレートを適用します

<Image width="846" height="501" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/2.png" />

[Vercel の公式文書](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)に[vercel の公式文書]に nextjs を使用しているブログの bulerplate がありますので、このリポジトリを参照して適用してください。

<Image width="846" height="475" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/3.png" />

Blog-Starter コードを使用して、不要な部品を削除して使用します。

<Image width="846" height="1562" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/4.png" />

居心地の良い世界は大部分がブログの投稿やプロジェクトに分割されているため、上記のようにフォルダー構造を持つように変更しました。

<GoogleAd/>

## scss

このブログのスタイルは SCSS を使用しています。

```
yarn add sass
```

SASS がインストールされたら、以下に示すようにコンポーネントフォルダーの下に`component.module.scss`を作成することで作成できます。

<Image width="846" height="181" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/5.png" />

ファイル名が module.scss として記述されている場合、各コンポーネントの一意のクラス名が自動的に適用されます。

以下に示すように、SCSS ファイルはクラス名のバインドを使用して適用されました。

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

上記のように書かれている場合、クラス名は下の写真に示すように一意に適用されます。

<Image width="846" height="187" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/6.png" />

<GoogleAd/>

## Deploy

<Image width="846" height="468" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/7.png" />

ブログの基本構造を作成し、CSS を作成したので、Vercel を使用して展開しましょう。

[Vercel](https://vercel.com/) にサインアップした後、新しいプロジェクトを作成します。

<Image width="846" height="455" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/8.png" />
プロジェクトがGitHubリポジトリにプッシュされると、自動的に展開されます。

<Image width="846" height="448" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/9.png" />

今日、私は単に NextJS と Vercel を使用してブログを作成する方法を学びました。

次に、ブログに必要な機能を追加するプロセスについて説明します。
