---
title: "Nextjs 블로그 마크다운에 애드센스 적용하기"
description: "nextjs로 블로그를 만들 때 마크다운에 애드센스를 넣는 방법을 공유합니다."
coverImage: "/assets/posts/Blog/How-to-use-markdown-it/cover.png"
date: "2023-08-22T00:35:07.322Z"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/posts/Blog/How-to-use-markdown-it/cover.png"
tag: MDXRemote
category: Blog
---

# Nextjs 블로그 마크다운에 애드센스 적용하기

<Image width="1515" height="771"  alt="nextjs blog adsense" src="/assets/posts/Blog/How-to-add-adsense-in-nextjs-blog/2.png" />

:::tip
오늘은 nextjs로 블로그를 만들 때 마크다운에 애드센스를 넣는 방법을 공유합니다.
:::

당연한 이야기이지만 애드센스를 적용하려면 먼저 애드센스 승인을 받아야하는데요.

애드센스 승인 받는 방법에 대해서는 이 글에서는 다루지 않도록 하겠습니다.

<GoogleAd/>

## 마크다운에서 애드센스 사용

애드센스는 보통 아래와 같은 형식으로 이루어져 있는데요.

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

이 코드를 nextjs 블로그의 마크다운에 직접 넣을 수도 있지만 저는 MDXRemote 라이브러리를 이용해서 마크다운에 하이라이팅도 하고 tip박스를 커스텀하는 등 여러 마크다운 기능을 활용하고 있습니다.

MDXRemote에서 지원하는 컴포넌트 주입 기능을 이용해서 애드센스 광고를 블로그 글 중간에도 손쉽게 넣을 수 있는데요.

## 광고 컴포넌트 만들기

<GoogleAd/>

아래와 같이 구글 애드센스 광고 컴포넌트를 만들어줍니다.
광고용 컴포넌트를 하나 만들어서 MDXRemote에 주입하기 위함입니다.

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

## MDXRemote 컴포넌트 주입

MDXRemote에서는 주입할 컴포넌트를 넣을 수 있는 기능을 지원하고 있는데요.

```jsx
import Image from "next/image";
import GoogleAd from "@/components/GoogleAd";

<MDXRemote {...content} components={{ Image, GoogleAd }} />;
```

위와 같이 MDXRemote의 components props에 사용할 컴포넌트들을 넣어줍니다.

<GoogleAd/>

```md
오늘은 markdown-it로 마크다운을 html로 변환하고 커스텀하는 방법에 대해서 공유하려고 합니다.

<GoogleAd/>

이전 글에서 vercel의 blog-starter로 블로그를 만들었는데, 이 보일러 플레이트에서 마크다운을 작성하면 아래와 같이 이쁘지 않게 작성되는데요...
```

이제 마크다운에서 위와 같이 `<GoogleAd/>` 를 사용하면 MDXRemote에서 컴포넌트를 맞게 주입시켜준답니다.

이렇게 하면 블로그 글을 작성하면서 내가 원하는 곳에 애드센스를 넣을 수 있게 되는데요.

## 에러

<Image width="1000" height="428"  alt="ins already have ads error" src="/assets/posts/Blog/How-to-add-adsense-in-nextjs-blog/1.png" />

다만 이렇게 하게 될 경우 아래와 같은 에러가 발생합니다.

```
TagError: adsbygoogle.push() error: All ins elements in the DOM with class=adsbygoogle already have ads in them.
```

저는 이 문제를 해결해보려 했으나, 해결이 되지 않고 로컬에서만 발생하고 실제 광고는 정상적으로 추가되어 우선은 넘어갔습니다.

혹시 이에 대해서 해결하신 분이 있다면 공유해주시면 감사하겠습니다.
