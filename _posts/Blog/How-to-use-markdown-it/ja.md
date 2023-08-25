---
title: "Markdown-Itの使用方法"
description: "MarkDown-ITを使用してMarkdownをHTMLに変換する方法を要約しました"
coverImage: "/assets/posts/Blog/How-to-use-markdown-it/cover.png"
date: "2023-07-04T00:35:07.322Z"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/posts/Blog/How-to-use-markdown-it/cover.png"
tag: markdown-it
category: Blog
---

:::tip
今日は、Markdown を HTML に変換し、Markdown-IT でカスタマイズする方法を共有します。
:::

<GoogleAd/>

前の記事では、Vercel のブログスターターでブログを作成しました。

<Image width="1533" height="830" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Blog/How-to-use-markdown-it/1.png" />

## MarkDown-IT インストール

```bash
yarn add markdown-it
```

## Markdown-IT アプリケーション

以下に示すように、vercel のブログスターターに適用されたコードを消去し、Markdown-IT を適用します。

```tsx
import markdownIt from "markdown-it";
const md = markdownIt({ html: true });

export default function Post({ post }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: md.render(post.content) }}></div>;
}
```

<GoogleAd/>

## HighlightJS 設定

コードブロックのハイライトに highlightjs をインストールします。

```bash
yarn add markdown-it-highlightjs
```

以下のように変更します。

```tsx
import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
const md = markdownIt({ html: true }).use(highlightjs);

export default function Post({ post }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: md.render(post.content) }}></div>;
}
```

[https://highlightjs.org/static/demo/](https://highlightjs.org/static/demo/)あなたが望むテーマを選択してください。

[https://github.com/highlightjs/highlight.js/tree/main/src/styles](https://github.com/highlightjs/highlight.js/tree/main/src/styles) 必要なテーマの CSS ファイルを取得し、リポジトリに入れます。

<Image width="846" height="121"  alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Blog/How-to-use-markdown-it/2.png" />

スタイルを追加すると、上記のように適用されます。不足しているものがあったので、次のように CSS をカスタマイズしました。

<Image width="846" height="190"  alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Blog/How-to-use-markdown-it/3.png" />

必要な場合は、以下に CSS をコピーしてください。

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
## カスタムコンテンツを追加します

Markdown-IT のプラグインの中には、カスタムコンテナを追加するプラグインがあります。

[https://github.com/markdown-it/markdown-it-container](https://github.com/markdown-it/markdown-it-container)

```bash
yarn add markdown-it-container
```

使用方法は次のとおりです。

```tsx
import markdownContainer from "markdown-it-container";
const md = markdownIt({ html: true }).use(highlightjs).use(markdownContainer, "tip");
```

MarkDown-IIT-Container を追加し、2 番目の引数はコンテナ名を追加することです。

```md
:::tip
_here be dragons_
:::
```

上に示してコンテナ名を書くように:::にラップすると、以下に示すように HTML コンテナに変更します。
あなたの好みに合わせてスタイルを適用できます。

```html
<div class="tip">
  <em>here be dragons</em>
</div>
```

上記のように使用しています。
以下のコードを参照してください。

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

まだ追加すべきことはたくさんありますが、通常のブログ投稿のように見えます。

今日、私は MarkDown-IT を使用してブログ記事を飾る方法を学びました。

長い投稿を読んでいただきありがとうございます。
