---
title: "markdown-it 사용법"
description: "markdown-it를 사용해서 markdown을 html로 변환하는 방법에 대해서 정리했습니다"
coverImage: "/assets/posts/Blog/How-to-use-markdown-it/cover.png"
date: "2023-07-04T00:35:07.322Z"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/posts/Blog/How-to-use-markdown-it/cover.png"
tag: markdown-it
category: Blog
---

# markdown-it 사용해서 markdown을 html로 변환하기

:::tip
오늘은 markdown-it로 마크다운을 html로 변환하고 커스텀하는 방법에 대해서 공유하려고 합니다.
:::

<GoogleAd/>

이전 글에서 vercel의 blog-starter로 블로그를 만들었는데, 이 보일러 플레이트에서 마크다운을 작성하면 아래와 같이 이쁘지 않게 작성되는데요.

<Image width="1533" height="830" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Blog/How-to-use-markdown-it/1.png" />

## markdown-it 설치

```bash
yarn add markdown-it
```

## markdown-it 적용

vercel의 blog-starter에 적용되어있던 코드를 지우고 아래와 같이 markdown-it를 적용합니다.

```tsx
import markdownIt from "markdown-it";
const md = markdownIt({ html: true });

export default function Post({ post }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: md.render(post.content) }}></div>;
}
```

<GoogleAd/>

## highlightjs 설정

코드블럭 하이라이팅 처리를 하기 위해서 highlightjs 설치해줍니다.

```bash
yarn add markdown-it-highlightjs
```

아래와 같이 수정해줍니다.

```tsx
import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
const md = markdownIt({ html: true }).use(highlightjs);

export default function Post({ post }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: md.render(post.content) }}></div>;
}
```

[https://highlightjs.org/static/demo/](https://highlightjs.org/static/demo/)에서 원하는 테마를 골라줍니다.

[https://github.com/highlightjs/highlight.js/tree/main/src/styles](https://github.com/highlightjs/highlight.js/tree/main/src/styles) 원하는 테마의 css파일을 가져와 저장소에 넣어줍니다.

<Image width="846" height="121"  alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Blog/How-to-use-markdown-it/2.png" />

스타일까지 추가하면 위 사진처럼 적용되는데요. 뭔가 부족한 부분이 있어서 css를 아래와 같이 커스텀해주었습니다.

<Image width="846" height="190"  alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Blog/How-to-use-markdown-it/3.png" />

필요하신 분들은 아래 css를 복사해 사용하시기 바랍니다.

```css
pre {
  background: #011627;
  padding: 15px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 8px;
  overflow-x: auto;
  color: #fff;
}

pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em;
}

code.hljs {
  padding: 3px 5px;
}

.hljs {
  background: #011627;
  color: #d6deeb;
}

.hljs-keyword {
  color: #c792ea;
  font-style: italic;
}

.hljs-built_in {
  color: #addb67;
  font-style: italic;
}

.hljs-type {
  color: #82aaff;
}

.hljs-literal {
  color: #ff5874;
}

.hljs-number {
  color: #f78c6c;
}

.hljs-regexp {
  color: #5ca7e4;
}

.hljs-string {
  color: #ecc48d;
}

.hljs-subst {
  color: #d3423e;
}

.hljs-symbol {
  color: #82aaff;
}

.hljs-class {
  color: #ffcb8b;
}

.hljs-function {
  color: #82aaff;
}

.hljs-title {
  color: #dcdcaa;
  font-style: italic;
}

.hljs-params {
  color: #7fdbca;
}

.hljs-comment {
  color: #637777;
  font-style: italic;
}

.hljs-doctag {
  color: #7fdbca;
}

.hljs-meta,
.hljs-meta .hljs-keyword {
  color: #82aaff;
}

.hljs-meta .hljs-string {
  color: #ecc48d;
}

.hljs-section {
  color: #82b1ff;
}

.hljs-attr,
.hljs-name,
.hljs-tag {
  color: #7fdbca;
}

.hljs-attribute {
  color: #80cbc4;
}

.hljs-variable {
  color: #addb67;
}

.hljs-bullet {
  color: #d9f5dd;
}

.hljs-code {
  color: #80cbc4;
}

.hljs-emphasis {
  color: #c792ea;
  font-style: italic;
}

.hljs-strong {
  color: #addb67;
  font-weight: 700;
}

.hljs-formula {
  color: #c792ea;
}

.hljs-link {
  color: #ff869a;
}

.hljs-quote {
  color: #697098;
  font-style: italic;
}

.hljs-selector-tag {
  color: #ff6363;
}

.hljs-selector-id {
  color: #fad430;
}

.hljs-selector-class {
  color: #addb67;
  font-style: italic;
}

.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #c792ea;
  font-style: italic;
}

.hljs-template-tag {
  color: #c792ea;
}

.hljs-template-variable {
  color: #addb67;
}

.hljs-addition {
  color: #addb67ff;
  font-style: italic;
}

.hljs-deletion {
  color: #ef535090;
  font-style: italic;
}
```

<GoogleAd/>

## 커스텀 컨테이터 추가

markdown-it의 여러 플러그인 중에서 커스텀 컨테이너를 추가할 수 있는 플러그인이 있어 적용해보겠습니다.

[https://github.com/markdown-it/markdown-it-container](https://github.com/markdown-it/markdown-it-container)

```bash
yarn add markdown-it-container
```

사용 방법은 아래와 같습니다.

```tsx
import markdownContainer from "markdown-it-container";
const md = markdownIt({ html: true }).use(highlightjs).use(markdownContainer, "tip");
```

markdown-it-container를 넣어주고 두번째 인자로는 컨테이너 이름을 넣어줍니다.

```md
:::tip
_here be dragons_
:::
```

위와 같이 :::로 감싸고 컨테이너 이름을 넣어서 마크다운을 작성하면 아래와 같은 html 컨테이너로 변경되는데요.
사용자의 취향에 맞게 스타일을 적용하면 됩니다.

```html
<div class="tip">
  <em>here be dragons</em>
</div>
```

저는 위와 같이 커스텀 해서 사용하고 있습니다.
아래 코드를 참고해주세요.

```css
.tip {
  padding: 0.1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 1rem 0;
  border-color: #42b983;
  background-color: #f3f4f5;
  border-radius: 8px;
}
```

<img loading="lazy" width="1037" alt="249997973-1552fe96-9d87-4844-a7fd-2bacbaa031c0" src="https://github.com/codingcozy/cozy-world/assets/127212769/5e2fb540-502f-4021-8c4c-455679760aeb" />

<Image width="846" height="190"  alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Blog/How-to-use-markdown-it/3.png" />

아직 추가해야될 내용들이 많이 있지만 이정도만 해도 평범한 블로그 글 같아 보이네요.

오늘은 이렇게 markdown-it를 활용해서 블로그 글을 꾸미는 방법에 대해 알아보았습니다.

긴 글 읽어주셔서 감사합니다.
