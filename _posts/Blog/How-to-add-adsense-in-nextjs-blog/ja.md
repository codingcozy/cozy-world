---
title: "AdSenseをNextJSブログMarkdownに適用します"
description: "NextJSでブログを作成するときは、AdSenseをMarkdownに追加する方法を共有します。"
coverImage: "/assets/posts/Blog/How-to-use-markdown-it/cover.png"
date: "2023-08-22T00:35:07.322Z"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/posts/Blog/How-to-use-markdown-it/cover.png"
tag: MDXRemote
category: Blog
---

# AdSense を NextJS ブログ Markdown に適用します

<Image width="1515" height="771"  alt="nextjs blog adsense" src="/assets/posts/Blog/How-to-add-adsense-in-nextjs-blog/2.png" />

:::tip
今日は、NextJS を使用してブログを作成するときに、AdSense を Markdown に追加する方法を共有します。
:::

もちろん、AdSense を適用するには、最初に AdSense の承認を取得する必要があります。

この記事では、AdSense の承認を得る方法については説明しません。

<GoogleAd/>

## マークダウンで AdSense を使用します

AdSense は通常、次の形式で構成されています。

```js
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-###########"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-#######"
     data-ad-slot="1107185301"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

このコードを NextJS ブログのマークダウンに直接配置できますが、MDXRemote ライブラリを使用してマークダウンを強調し、チップボックスをカスタマイズします。

MDXRemote でサポートされているコンポーネントインジェクション機能を使用することにより、ブログ投稿の途中に AdSense 広告を簡単に挿入できます。

## Create an ad component

<GoogleAd/>

以下に示すように、Google AdSense 広告コンポーネントを作成します。
これは、広告コンポーネントを作成し、MDXRemote に注入することです。

```tsx
import React, { useEffect } from "react";
declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const GoogleAd = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="googleAd-container">
      <ins className="adsbygoogle" style={{ display: "block" }} data-ad-client="ca-pub-##############" data-ad-slot="1107185301" data-ad-format="auto" data-full-width-responsive="true"></ins>
    </div>
  );
};
```

## MDXRemote コンポーネントを注入します

MDXRemote は、注入するコンポーネントを挿入する機能をサポートしています。

```jsx
import Image from "next/image";
import GoogleAd from "@/components/GoogleAd";

<MDXRemote {...content} components={{ Image, GoogleAd }} />;
```

上記のように、MDXRemote のコンポーネントの小道具で使用するコンポーネントを入れます。

<GoogleAd/>

```md
今日は、MarkDown-IT で HTML にマークダウンを変換してカスタマイズする方法を共有したいと思います。

<GoogleAd/>

前の記事では、Vercel のブログスターターでブログを作成しましたが、このボイラープレートにマークダウンを書くと、以下に示すようにきれいではありません...
```

ここで、マークダウンで上記のように `<googlead/>`を使用する場合、mdxremote がコンポーネントを適切に挿入します。

このようにして、ブログの投稿を書いているときに、AdSense を必要な場所に配置できます。

## エラー

<Image width="1000" height="428" alt="ins already have ads error" src="/assets/posts/Blog/How-to-add-adsense-in-nextjs-blog/1.png" />

ただし、これを行うと、次のエラーが発生します。

```
TagError: adsbygoogle.push() error: All ins elements in the DOM with class=adsbygoogle already have ads in them.
```

私はこの問題を解決しようとしましたが、それはそれを解決しませんでした、それはローカルでのみ起こり、実際の広告は正常に追加されたので、私はそれを最初にスキップしました。

誰かがこれの解決策を持っている場合は、共有してください。
