---
title: "Google Search"
description: "Google Search made with html, css, js"
url: "https://making-challenge.netlify.app/28-google-search/"
coverImage: "/assets/projects/28-google-search.png"
youtubeUrl: "https://www.youtube.com/watch?v=JSxrcUBLQ-4"
date: "2023-11-01"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/28-google-search.png"
---

### Youtube Link

<a class="youtube" target="_blank" href="https://www.youtube.com/watch?v=JSxrcUBLQ-4"><img src="https://img.youtube.com/vi/JSxrcUBLQ-4/hqdefault.jpg" width="600" height="300" /></a>

<GoogleAd />

### html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Google Search</title>
  </head>
  <body>
    <div class="wrap">
      <header class="header">
        <a href="" class="btn">Gmail</a>
        <a href="" class="btn">Image</a>
        <button type="button" class="menu"></button>
        <button type="button" class="profile">
          <img src="./assets/site_thumbnail.png" alt="" width="36" height="36" />
        </button>
      </header>
      <div class="content">
        <h1 class="logo"></h1>
        <div class="search">
          <input type="text" class="input" placeholder="Google Search or type a URL" />
          <button type="button" class="mic"></button>
          <button type="button" class="camera"></button>
        </div>
        <button type="button" class="quick">
          <span class="plus"></span>
          <span class="txt">Add shortcut</span>
        </button>
      </div>
    </div>
    <script src="./index.js"></script>
  </body>
</html>
```

<GoogleAd />

### css

<GoogleAd />

```css
* {
  padding: 0;
  margin: 0;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.blind {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  user-select: none;
}

button {
  background: transparent;
  border: 0;
  cursor: pointer;
}

.wrap {
  background-color: #35363a;
  height: 100vh;
}

.header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
}

.btn {
  color: #e8eaed;
  font-size: 14px;
  text-decoration: none;
}

.btn + .btn {
  margin-left: 15px;
}

.menu {
  width: 30px;
  margin-left: 25px;
}

.menu svg {
  fill: rgba(255, 255, 255, 0.7);
}

.profile {
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  width: 36px;
  height: 36px;
  margin-left: 16px;
}
.profile::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.content {
  padding-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.logo path {
  fill: white;
}

.search {
  height: 44px;
  margin-top: 30px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 100px;
  max-width: 500px;
  width: 100%;
  box-sizing: border-box;
}

.search::before {
  content: "";
  background: no-repeat url("./assets/icon_search.svg") 0 0 / cover;
  width: 20px;
  height: 20px;
  margin-right: 16px;
}

.input {
  border: 0;
  flex: 1;
  font-size: 16px;
}

.input:focus {
  outline: none;
}

.input::placeholder {
  color: #5f6368;
}

.search button {
  width: 25px;
  height: 25px;
}

.mic {
  background: no-repeat url("./assets/mic_icon.svg") 0 0 / cover;
}
.camera {
  background: no-repeat url("./assets/lens_icon.svg") 0 0 / cover;
  margin-left: 10px;
}

.quick {
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border-radius: 4px;
}

.quick:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.plus {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 50%;
  background-color: #212121;
}

.plus::before {
  content: "";
  width: 24px;
  height: 24px;
  background: no-repeat url("./assets/add.svg") 0 0 / cover;
}

.txt {
  color: #e8eaed;
  margin-top: 16px;
}
```

### js

<GoogleAd/>

```js
const input = document.querySelector(".input");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    window.location.href = `https://www.google.com/search?q=${e.target.value}`;
  }
});
```
