---
title: css로 Blur처리를 하는 방법(filter, backdrop-filter)
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

# css로 Blur처리를 하는 방법(filter, backdrop-filter)

:::tip
css를 이용해서 이미지를 블러처리하거나 배경을 블러처리하는 방법에 대해서 알아봅니다.
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

<Image width="542" height="300"  alt="css filter" src="https://github.com/codingcozy/cozy-world/assets/46010705/397d6db7-dafc-4325-91e1-016e8a4ab124"/>

위와 같이 작성하면 filter를 사용할 수 있습니다.

### 지원범위

filter 속성은 ie11을 제외한 곳에서는 사용 가능하기 때문에 IE가 지원 종료된 지금 시점에서는 사용하는데 무리가 없을 것 같습니다.

<Image width="1475" height="500" alt="css filter blur" src="https://github.com/codingcozy/cozy-world/assets/46010705/ea02abc4-6c39-46f1-8c46-352f4e472332"/>

각 css속성의 브라우저 지원 범위는 caniuse사이트를 통해서 확인하실 수 있습니다.

[caniuse](https://caniuse.com/?search=filter)

## backdrop-filter

블러처리를 하는데 이미지 블러처리가 아닌 배경을 블러처리하고 싶은 경우가 있을 수 있는데요.

<Image width="1475" height="500" alt="css backdrop-filter" src="https://github.com/codingcozy/cozy-world/assets/46010705/11ff8d96-2f87-4015-95da-8ec78daee55b"/>

웹사이트를 만들다보면 이런 스펙들을 많이 만나 보셨을텐데요.
이런 배경을 블러처리하는 방식은 아래와 같이 하면 됩니다.

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

### 지원 범위

<Image width="1475" height="500" alt="css backdrop-filter" src="https://github.com/codingcozy/cozy-world/assets/46010705/35286bc0-0890-4998-a4ea-632cf7e54674"/>

backdrop-filter또한 IE를 제외한 곳에서 지원을 하고 있기 때문에 사용하시는데 문제 없을 것 같습니다.
