---
title: "Painter App"
description: "Painter App made with html, css, js"
url: "https://making-challenge.netlify.app/26-painter-app/"
coverImage: "/assets/projects/26-painter-app.png"
youtubeUrl: "https://www.youtube.com/watch?v=v34khui5qww"
date: "2023-10-25"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/26-painter-app.png"
---

### Youtube Link

<a class="youtube" target="_blank" href="https://www.youtube.com/watch?v=v34khui5qww"><img src="https://img.youtube.com/vi/v34khui5qww/hqdefault.jpg" width="600" height="300" /></a>

<GoogleAd />

### html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Painter App</title>
  </head>
  <body>
    <div class="toolbar">
      <div class="group">
        <button type="button" class="btn pen_type active" id="pen">
          <img src="./assets/pen.png" width="28" alt="" />
        </button>
        <button type="button" class="btn pen_type" id="eraser">
          <img src="./assets/erase.png" width="28" alt="" />
        </button>
      </div>
      <div class="group">
        <button type="button" class="btn pen_size thin active" data-size="1"></button>
        <button type="button" class="btn pen_size normal" data-size="3"></button>
        <button type="button" class="btn pen_size semi-bold" data-size="5"></button>
        <button type="button" class="btn pen_size bold" data-size="8"></button>
      </div>
      <div class="group">
        <button type="button" class="btn pen_color active" data-color="#2d3436"></button>
        <button type="button" class="btn pen_color" data-color="#6ad78e"></button>
        <button type="button" class="btn pen_color" data-color="#ffcb57"></button>
        <button type="button" class="btn pen_color" data-color="#ff5457"></button>
        <button type="button" class="btn pen_color" data-color="#82ccdd"></button>
        <button type="button" class="btn pen_color" data-color="#6c5ce7"></button>
      </div>
    </div>
    <canvas id="canvas"></canvas>
    <script src="./index.js"></script>
  </body>
</html>
```

<GoogleAd />

### css

<GoogleAd />

```css
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: no-repeat url("./assets/background.jpg") 0 0 / cover;
}

* {
  padding: 0;
  margin: 0;
}

.toolbar {
  background-color: #e1e8ed;
  padding: 0 10px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  box-shadow: 0 7px 29px rgba(100, 100, 111, 0.2);
}

.group {
  padding: 10px;
  display: flex;
  align-items: center;
  column-gap: 6px;
}

.group + .group {
  border-left: 1px solid #fff;
}

#canvas {
  width: 500px;
  border: 1px solid #d1dde5;
  border-radius: 16px;
  background-color: #fff;
  margin-top: 16px;
  box-shadow: 0 7px 29px rgba(100, 100, 111, 0.2);
}

.btn {
  border: 1px solid #e5e5e5;
  background-color: #fff;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  overflow: hidden;
}

.btn.active {
  border-color: #000;
}

.pen_size::before {
  width: 18px;
  height: 1px;
  background-color: #484747;
  border-radius: 100px;
  content: "";
}

.normal::before {
  height: 2px;
}

.semi-bold::before {
  height: 4px;
}

.bold::before {
  height: 8px;
}

.pen_color[data-color="#2d3436"] {
  background-color: #2d3436;
}

.pen_color[data-color="#6ad78e"] {
  background-color: #6ad78e;
}

.pen_color[data-color="#ffcb57"] {
  background-color: #ffcb57;
}

.pen_color[data-color="#ff5457"] {
  background-color: #ff5457;
}

.pen_color[data-color="#82ccdd"] {
  background-color: #82ccdd;
}

.pen_color[data-color="#6c5ce7"] {
  background-color: #6c5ce7;
}
```

### js

<GoogleAd/>

```js
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let isDrawing = false;
let startX, startY;
let penSize = document.querySelector(".pen_size.active").dataset.size;
let penSizeBtnList = document.querySelectorAll(".pen_size");
let penTypeBtnList = document.querySelectorAll(".pen_type");
let penColorBtnList = document.querySelectorAll(".pen_color");
let penButton = document.getElementById("pen");
let eraserButton = document.getElementById("eraser");
let penColor = "#2d3436";

canvas.width = 500;
canvas.height = 500;

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);
penButton.addEventListener("click", usePen);
eraserButton.addEventListener("click", useEraser);

function startDrawing(e) {
  isDrawing = true;
  startX = e.pageX - canvas.offsetLeft;
  startY = e.pageY - canvas.offsetTop;
  context.beginPath();
  context.moveTo(startX, startY);
}

function draw(e) {
  if (!isDrawing) return;

  let x = e.pageX - canvas.offsetLeft;
  let y = e.pageY - canvas.offsetTop;

  context.lineWidth = penSize;
  context.lineCap = "round";
  context.strokeStyle = penColor;
  context.lineTo(x, y);
  context.stroke();
}

function stopDrawing() {
  isDrawing = false;
}

function usePen() {
  penColor = document.querySelector(".pen_color.active").dataset.color;
  penSize = document.querySelector(".pen_size.active").dataset.size;
}

function useEraser() {
  penColor = "#fff";
  penSize = document.querySelector(".pen_size.active").dataset.size + 5;
}

penTypeBtnList.forEach((penTypeBtn) => {
  penTypeBtn.addEventListener("click", (e) => {
    document.querySelector(".pen_type.active").classList.remove("active");
    e.currentTarget.classList.add("active");
  });
});

penSizeBtnList.forEach((penSizeBtn) => {
  penSizeBtn.addEventListener("click", (e) => {
    document.querySelector(".pen_size.active").classList.remove("active");
    e.target.classList.add("active");
    penSize = e.target.dataset.size;
  });
});

penColorBtnList.forEach((penColorBtn) => {
  penColorBtn.addEventListener("click", (e) => {
    document.querySelector(".pen_color.active").classList.remove("active");
    e.target.classList.add("active");
    penColor = e.target.dataset.color;
  });
});
```
