---
title: CSSでぼやけする方法（フィルター、バックドロップフィルター）
description:
coverImage: "/assets/posts/CSS/2023-08-23-how-to-css-blur-/cover.png"
date: 2023-08-23 14:01
author:
  name: Cozy Coding
ogImage:
  url: "/assets/posts/CSS/2023-08-23-how-to-css-blur-/cover.png"
tag: blur, filter, backdrop-filter
category: CSS
---

# CSS でぼやけする方法（フィルター、バックドロップフィルター）

:::tip
CSS を使用して画像をぼかしたり、背景をぼんやりとぼんやりとしたりする方法を学びます。
:::

## filter

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        display: flex;
        column-gap: 50px;
        padding: 50px;
      }
      .item {
        width: 100px;
      }

      .filter-1 {
        filter: blur(1px);
      }

      .filter-10 {
        filter: blur(5px);
      }

      .filter-30 {
        filter: blur(15px);
      }

      strong {
        display: block;
        text-align: center;
        margin-bottom: 10px;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="item">
        <strong>1px</strong>
        <img src="./1.png" alt="" width="100" height="100" class="filter-1" />
      </div>
      <div class="item">
        <strong>5px</strong>
        <img src="./1.png" alt="" width="100" height="100" class="filter-10" />
      </div>
      <div class="item">
        <strong>15px</strong>
        <img src="./1.png" alt="" width="100" height="100" class="filter-30" />
      </div>
    </div>
  </body>
</html>
```

<GoogleAd/>

<Image width="542" height="300"  alt="css filter" src="https://github.com/codingcozy/cozy-world/assets/46010705/397d6db7-dafc-4325-91e1-016e8a4ab124"/>

上記を書くことで、フィルターを使用できます。

### サポートの範囲

フィルタープロパティは IE11 以外の場所で利用可能であるため、IE サポートが終了した今、それを使用することに問題はないようです。

<Image width="1475" height="500" alt="css filter blur" src="https://github.com/codingcozy/cozy-world/assets/46010705/ea02abc4-6c39-46f1-8c46-352f4e472332"/>

Caniuse サイトから各 CSS プロパティのブラウザサポートの範囲を確認できます。

[caniuse](https://caniuse.com/?search=filter)

<GoogleAd/>

## backdrop-filter

画像を曖昧にするのではなく、背景を曖昧にしたい場合があります。

<Image width="1475" height="500" alt="css backdrop-filter" src="https://github.com/codingcozy/cozy-world/assets/46010705/11ff8d96-2f87-4015-95da-8ec78daee55b"/>

Web サイトを作成しているときに、これらの仕様の多くに遭遇したに違いありません。
背景を曖昧にする方法は次のとおりです。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        width: 500px;
      }
      header {
        padding: 10px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid #ccc;
      }

      p {
        height: 200vh;
        padding-top: 40px;
      }
    </style>
  </head>
  <body>
    <header class="backdrop">header</header>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolore eveniet aliquid culpa minima, adipisci quaerat nam non animi tempora molestias quidem facilis earum! Dolor ad itaque ipsum eaque assumenda hic
      natus nihil ipsam minus sint fugit, maxime quam facere quae odit. Tempore, dignissimos. Earum eaque rem dicta ut, cupiditate dolor? Eum optio similique nobis, excepturi ratione autem eius laudantium minus eveniet maiores
      voluptate minima exercitationem voluptatum mollitia earum, fugiat dolor officiis dicta ipsum, unde placeat. Consectetur molestias ipsa corporis voluptatibus hic eveniet laborum voluptatum sequi aspernatur, facere nisi, nemo
      minus fugiat asperiores fuga temporibus et impedit corrupti voluptatem. Debitis?
    </p>
  </body>
</html>
```

<GoogleAd/>
### サポートの範囲

<Image width="1475" height="500" alt="css backdrop-filter" src="https://github.com/codingcozy/cozy-world/assets/46010705/35286bc0-0890-4998-a4ea-632cf7e54674"/>

背景フィルターは IE 以外の場所でもサポートされているため、使用するのに問題はないようです。
