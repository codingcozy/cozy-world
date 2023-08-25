---
title: "Next.js로 블로그 직접 만들기: 단계별 가이드"
description: "Next.js를 이용해 포스팅 이외의 다양한 기능을 추가한 나만의 블로그를 직접 만들어보았습니다."
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

Nextjs와 Vercel을 이용해서 블로그를 만드는 방법에 대해서 알아보겠습니다.
워드프레스 블로그스팟을 이용해서 만드는 방법도 있지만 개발자로서 직접 만들어보면 좋은 경험이 될 것이니 직접 만들어보도록 하겠습니다.

<GoogleAd/>

## Next.js Project 생성

```bash
npx create-next-app cozy-world
```

타입스크립트로 Next.js를 만들 것이기 때문에 저는 아래와 같이 작성했습니다.

```bash
npx create-next-app@latest --typescript cozy-world
```

## Next.js 블로그 템플릿 적용

<Image width="846" height="501" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/2.png" />

[vercel의 공식 문서](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)에 Nextjs를 이용한 블로그 보일러플레이트가 있으니 이 저장소를 참고해서 적용합니다.

<Image width="846" height="475" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/3.png" />

blog-starter 코드를 사용해 불필요한 부분을 제거하고 사용합니다.

<Image width="846" height="1562" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/4.png" />

cozy-world는 크게 블로그 포스팅과 프로젝트 두 가지로 나뉘기 때문에 위와 같은 폴더 구조를 갖도록 수정했습니다.

<GoogleAd/>

## SCSS

이 블로그의 스타일은 scss를 사용합니다.

```
yarn add sass
```

sass를 설치하면 아래와 같이 컴포넌트폴더 하위에 `component.module.scss`로 만들어서 작성할 수 있다.

<Image width="846" height="181" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/5.png" />

module.scss로 파일명을 작성하면 각 컴포넌트에서 유니크한 클래스명이 자동으로 적용된다.

scss파일은 아래와 같이 classnames의 bind를 이용해서 적용했다.

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

위와 같이 작성하면 아래 사진처럼 클래스명이 유니크하게 적용됩니다.

<Image width="846" height="187" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/6.png" />

<GoogleAd/>

## Deploy

<Image width="846" height="468" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/7.png" />

블로그를 위한 기본적인 구조를 만들었고 css도 작성했으니, 이제 vercel을 이용해서 배포를 해보겠습니다.

[vercel](https://vercel.com/)에 회원가입한 후에 새로운 프로젝트를 만듭니다.

<Image width="846" height="455" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/8.png" />

프로젝트는 github 저장소를 연결하면 push 됐을 때 자동으로 배포가 됩니다.

<Image width="846" height="448" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Nextjs/Building-a-Blog-with-Nextjs-A-Step-by-Step-Guide/9.png" />

오늘은 간단하게 Nextjs와 vercel를 이용해서 블로그를 만드는 방법에 대해서 알아보았습니다.

다음에는 블로그에 필요한 기능들을 추가하는 과정을 담아보도록 하겠습니다.
