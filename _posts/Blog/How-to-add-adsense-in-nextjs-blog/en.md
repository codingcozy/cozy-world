---
title: "Applying Adsense to Nextjs blog markdown"
description: "When creating a blog with nextjs, we will share how to add AdSense to markdown."
coverImage: "/assets/posts/Blog/How-to-use-markdown-it/cover.png"
date: "2023-08-22T00:35:07.322Z"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/posts/Blog/How-to-use-markdown-it/cover.png"
tag: MDXRemote, sitemap
category: Blog
---

<Image width="1515" height="771"  alt="nextjs blog adsense" src="/assets/posts/Blog/How-to-add-adsense-in-nextjs-blog/2.png" />

:::tip
Today, I will share how to add AdSense to markdown when creating a blog with nextjs.
:::

Of course, in order to apply AdSense, you must first get AdSense approval.

We will not cover how to get AdSense approval in this article.

<GoogleAd/>

## Using AdSense in Markdown

Adsense is usually made up of the following format.

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

You can directly put this code in the markdown of the nextjs blog, but I use the MDXRemote library to highlight the markdown and customize the tip box.

By using the component injection function supported by MDXRemote, you can easily insert AdSense advertisements in the middle of blog posts.

## Create an ad component

<GoogleAd/>

Create a Google Adsense ad component as shown below.
This is to create an advertising component and inject it into MDXRemote.

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

## Inject the MDXRemote component

MDXRemote supports the ability to insert components to be injected.

```jsx
import Image from "next/image";
import GoogleAd from "@/components/GoogleAd";

<MDXRemote {...content} components={{ Image, GoogleAd }} />;
```

As above, put the components to be used in MDXRemote's components props.

<GoogleAd/>

```md
Today, I would like to share how to convert and customize markdown to html with markdown-it.

<GoogleAd/>

In the previous article, I created a blog with vercel's blog-starter, but when I write markdown in this boiler plate, it is not pretty as shown below...
```

Now, if you use `<GoogleAd/>` as above in markdown, MDXRemote will inject the component properly.

This way, you can put AdSense where you want while writing blog posts.

## Error

<Image width="1000" height="428" alt="ins already have ads error" src="/assets/posts/Blog/How-to-add-adsense-in-nextjs-blog/1.png" />

However, if you do this, the following error occurs.

```
TagError: adsbygoogle.push() error: All ins elements in the DOM with class=adsbygoogle already have ads in them.
```

I tried to solve this problem, but it didn't solve it, it only happened locally, and the actual advertisement was added normally, so I skipped it first.

If anyone has a solution to this, please share.
