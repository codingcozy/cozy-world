---
title: "Apple Pay"
description: "Apple Pay made with html, css, js"
url: "https://making-challenge.netlify.app/3-applepay/"
coverImage: "/assets/projects/03_applepay-thumbnail.png"
youtubeUrl: "https://www.youtube.com/watch?v=rlY9HEleIuw"
date: "2023-03-29"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/03_applepay-thumbnail.png"
---

### Youtube Link

<a class="youtube" target="_blank" href="https://www.youtube.com/watch?v=rlY9HEleIuw"><img src="https://img.youtube.com/vi/rlY9HEleIuw/hqdefault.jpg" width="600" height="300" /></a>

### html

<GoogleAd/>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>apple pay</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="iphone">
      <div class="inner">
        <img src="./assets/header.png" alt="" class="header" />
        <div class="hyundai_card">
          <em class="card_name">M BOOST</em>
          <img
            class="card_logo"
            src="./assets/card_logo.png"
            alt=""
            width="86
					"
          />
          <img class="nfc" src="./assets/nfc.png" alt="" width="15" />
          <em class="card_number">
            <span class="dot"></span>
            <span class="dot"></span>
            3409
          </em>
          <span class="card_type">
            <span class="red"></span>
            <span class="orange"></span>
          </span>
        </div>
        <div class="hold_icon">
          <span></span>
        </div>
        <p class="hold_text">Hold Near Reader</p>
      </div>
    </div>

    <script src="./index.js"></script>
  </body>
</html>
```

### css

<GoogleAd/>

```css
body {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url("./assets/background.jpg") 0 0 / cover;
}

button {
  border: 0;
  padding: 0;
  margin: 0;
}

em {
  font-style: normal;
}

.iphone {
  position: relative;
  width: 375px;
  height: 667px;
  padding: 20px;
  box-sizing: border-box;
  background: url("./assets/iphone.png") 0 0 / 100% 100%;
}

.inner {
  background-color: #f2f2f6;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  padding: 10px 20px 20px;
  box-sizing: border-box;
}

.header {
  display: block;
  width: 100%;
  margin-bottom: 20px;
}

.hyundai_card {
  position: relative;
  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.8) 60%, rgba(222, 222, 222, 0.9));
  width: 300px;
  aspect-ratio: 100/63;
  border-radius: 15px;
  border: 2px solid #ccc;
  box-shadow: 0 -2px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(50px);
  box-sizing: border-box;
}

.card_name {
  position: absolute;
  top: 15px;
  left: 15px;
  font-family: YouandiModern, sans-serif;
  font-weight: 800;
  font-size: 14px;
}

.card_logo {
  position: absolute;
  top: 13px;
  right: 15px;
}

.nfc {
  position: absolute;
  bottom: 45px;
  left: 15px;
  opacity: 0.4;
}

.card_number {
  position: absolute;
  bottom: 15px;
  left: 15px;
  padding-left: 30px;
}

.card_number::before,
.card_number::after {
  content: "";
}

.card_number::before,
.card_number::after,
.dot {
  position: absolute;
  top: 6px;
  left: 0;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #000;
}

.card_number::after {
  left: 7px;
}

.dot {
  left: 14px;
}

.dot:nth-of-type(2) {
  left: 21px;
}

.card_type {
  position: absolute;
  bottom: 15px;
  right: 15px;
  display: flex;
}

.red {
  display: block;
  width: 35px;
  height: 35px;
  background-color: red;
  border-radius: 50%;
}

.orange {
  display: block;
  width: 35px;
  height: 35px;
  background-color: orange;
  opacity: 0.8;
  border-radius: 50%;
  margin-left: -13px;
}

.hold_icon {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 30px auto 0;
  border: 4px solid #067bff;
  overflow: hidden;
}

@keyframes scale {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, -8px) scale(1.1);
  }

  100% {
    transform: translate(0, 0) scale(1);
  }
}

.hold_icon span {
  position: relative;
  display: block;
  width: 25px;
  height: 40px;
  border-radius: 6px;
  margin: 22px auto;
  border: 2px solid #067bff;
  animation: scale 2.5s ease-in-out infinite;
  overflow: hidden;
}

.hold_icon span::after {
  content: "";
  display: block;
  width: 8px;
  height: 2px;
  margin: 4px auto 0;
  background-color: #067bff;
}

@keyframes movingBackground {
  0% {
    transform: rotate(-65deg) translate(-25px, 10px);
  }

  50% {
    transform: rotate(-20deg) translate(0, 0);
  }

  100% {
    transform: rotate(-65deg) translate(-25px, 10px);
  }
}

.hold_icon span::before {
  content: "";
  position: absolute;
  top: -10px;
  right: -10px;
  bottom: -10px;
  left: -10px;
  background-color: #dfeffd;
  transform: rotate(-65deg) translate(-25px, 10px);
  z-index: -1;
  animation: movingBackground 2.5s ease-in-out infinite;
}

.hold_text {
  text-align: center;
  margin-top: 20px;
  font-weight: 600;
  color: #85848b;
}
```
