---
title: "How to use markdown-it"
description: "share how to convert and customize markdown to html with markdown-it."
coverImage: "/assets/posts/Blog/How-to-use-markdown-it/cover.png"
date: "2023-07-04T00:35:07.322Z"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/posts/Blog/How-to-use-markdown-it/cover.png"
tag: markdown-it
category: Blog
---

# How to use markdown-it

:::tip
Today, I would like to share how to convert and customize markdown to html with markdown-it.
:::

In the previous article, I created a blog with Vercel's Blog-STARTER, and when I write a markdown in this boiler plate, it is not as pretty as below.

<Image width="1533" height="830" alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Blog/How-to-use-markdown-it/1.png" />

## MarkDown-IT installation

```bash
yarn add markdonw-it
```

## MarkDown-IT application

Erase the code applied to the Blog-STARTER of the vercel and apply the MarkDown-IT as shown below.

```tsx
import markdownIt from "markdown-it";
const md = markdownIt({ html: true });

export default function Post({ post }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: md.render(post.content) }}></div>;
}
```

## HighlightJS settings

Install Highlightjs for code block highlighting.

```bash
yarn add markdown-it-highlightjs
```

Modify as below.

```tsx
import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
const md = markdownIt({ html: true }).use(highlightjs);

export default function Post({ post }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: md.render(post.content) }}></div>;
}
```

[https://highlightjs.org/static/demo/](https://highlightjs.org/static/demo/)Choose the theme you want.

[https://github.com/highlightjs/highlight.js/tree/main/src/styles](https://github.com/highlightjs/highlight.js/tree/main/src/styles) Get the css file of the theme you want and put it in the repository.

<Image width="846" height="121"  alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Blog/How-to-use-markdown-it/2.png" />

If you add a style, it will be applied as shown above.There was something lacking, so I customized the CSS as follows.

<Image width="846" height="190"  alt="250466992-88684525-bfce-4688-bb1e-8404cdd5fc0c" src="/assets/posts/Blog/How-to-use-markdown-it/3.png" />

If you need it, please copy the CSS below.

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

## Add Custom Contents

Among the plugins of MarkDown-IT, there is a plug-in to add a custom container.

[https://github.com/markdown-it/markdown-it-container](https://github.com/markdown-it/markdown-it-container)

```bash
yarn add markdown-it-container
```

How to use is as follows.

```tsx
import markdownContainer from "markdown-it-container";
const md = markdownIt({ html: true }).use(highlightjs).use(markdownContainer, "tip");
```

Add MarkDown-Iit-Container and the second argument is to add the container name.

```md
:::tip
_here be dragons_
:::
```

If you wrap it in ::: as shown above and write the container name to write the markdown, it will be changed to the HTML container as shown below.
You can apply style to suit your taste.

```html
<div class="tip">
  <em>here be dragons</em>
</div>
```

I am using it as above.
Please refer to the code below.

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

There are still many things to add, but it looks like a normal blog post.

Today, I learned how to decorate a blog article using MarkDown-IT.

Thank you for reading long posts.
