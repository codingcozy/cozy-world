---
title: "Whack-a-mole"
description: "Whack-a-mole made with html, css, js"
url: "https://making-challenge.netlify.app/5-whack-a-mole/"
coverImage: "/assets/projects/05_whack_a_mole-thumbnail.png"
youtubeUrl: "https://www.youtube.com/watch?v=eIdUuW0Gxp8"
date: "2023-04-11"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/05_whack_a_mole-thumbnail.png"
---

### Youtube Link

<a class="youtube" target="_blank" href="https://www.youtube.com/watch?v=eIdUuW0Gxp8"><img src="https://img.youtube.com/vi/eIdUuW0Gxp8/hqdefault.jpg" width="600" height="300" /></a>

<GoogleAd />

### html

<GoogleAd/>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Document</title>
  </head>
  <body>
    <img class="cursor" src="./assets/hammer.png" alt="" width="50" />
    <div class="container">
      <div class="start_dimmed">
        <button type="button" class="start_button -easy">Easy</button>
        <button type="button" class="start_button -normal">Normal</button>
        <button type="button" class="start_button -hard">hard</button>
      </div>
      <strong class="game_title">Whack-a-Mole!</strong>
      <span class="score_text">Score <span id="score" class="score">0</span></span>
      <span class="time_bar">
        <span class="time" id="time"></span>
      </span>
      <div class="game">
        <div class="hole hole1"><div class="mole"></div></div>
        <div class="hole hole2"><div class="mole"></div></div>
        <div class="hole hole3"><div class="mole"></div></div>
        <div class="hole hole4"><div class="mole"></div></div>
        <div class="hole hole5"><div class="mole"></div></div>
        <div class="hole hole6"><div class="mole"></div></div>
        <div class="hole hole4"><div class="mole"></div></div>
        <div class="hole hole5"><div class="mole"></div></div>
        <div class="hole hole6"><div class="mole"></div></div>
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
  cursor: none;
  font-family: VT323, sans-serif;
}

.container {
  position: relative;
  text-align: center;
  width: 700px;
  background: no-repeat url("./assets/background.png") 0 0 / cover;
  height: 800px;
  padding-top: 50px;
  box-sizing: border-box;
  margin: 0 auto;
}

.start_dimmed {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 15px;
}

.start_button {
  width: 190px;
  height: 65px;
  padding: 0 20px;
  font-size: 50px;
  text-transform: uppercase;
  border-radius: 5px;
  border: 2px solid #fff;
  background-color: #de8336;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
  font-family: VT323, sans-serif;
}

.start_button.-easy {
  background-color: #2ecc71;
}

.start_button.-normal {
  background-color: #3498db;
}

.game_title {
  display: block;
  font-size: 40px;
}

.cursor {
  position: absolute;
  top: 0;
  left: 0;
  margin: -25px 0 0 -30px;
  background: no-repeat url("./assets/hammer.png") 0 0 / cover;
  z-index: 10;
  transition: transform 0.1s ease-in-out;
}

.score_text {
  display: inline-flex;
  background-color: #ccc;
  font-size: 30px;
  border-radius: 10px;
  padding: 6px 10px;
  align-items: center;
  column-gap: 20px;
  border: 1px solid #999;
  font-weight: 700;
  color: #111;
  margin-top: 60px;
}

.score {
  display: inline-block;
  vertical-align: top;
  background-color: #de8336;
  color: #fff;
  border: 2px solid #fff;
  line-height: 37px;
  width: 80px;
  border-radius: 10px;
}

.time_bar {
  display: block;
  width: 400px;
  border-radius: 100px;
  border: 4px solid #eee;
  height: 30px;
  margin: 30px auto 0;
  background-color: #ccc;
  overflow: hidden;
}

.time {
  background-color: #de8336;
  width: 100%;
  display: block;
  height: 30px;
}

.game {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  justify-items: center;
  width: 600px;
  margin: 20px auto 0;
}

.hole {
  width: 150px;
  height: 150px;
  position: relative;
  overflow: hidden;
  padding-bottom: 20px;
  box-sizing: border-box;
}

.hole::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: no-repeat url("./assets/back.png") 0 23px / cover;
}

.hole::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: no-repeat url("./assets/front.png") 0 23px / cover;
  z-index: 10;
}

.mole {
  width: 150px;
  height: 150px;
  background: #f00;
  position: absolute;
  top: 100px;
  left: 0;
  background: no-repeat url("./assets/mole.png") 0 0 / cover;
  transition: top 0.3s ease;
}

.hole.up .mole {
  top: 30px;
}

.hole.hit {
  background: no-repeat url("./assets/hit.png") 0 0 / cover;
}
```

### js

<GoogleAd/>

```js
const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector("#score");
const cursor = document.querySelector(".cursor");
const timeRange = document.querySelector("#time");
const startButtons = document.querySelectorAll(".start_button");
const startDimmed = document.querySelector(".start_dimmed");

let score = 0;
let lastHole;
let playTime = 10;
let remainTime = playTime;
let isClick = false;
let timeInterval;
let min = 200,
  max = 1000;

// cursor
const positionElement = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;
};

window.addEventListener("mousemove", positionElement);

document.addEventListener("click", () => {
  if (isClick) return;
  isClick = true;
  cursor.style.transform = `rotate(-90deg)`;
  setTimeout(() => {
    cursor.style.transform = `rotate(0deg)`;
    isClick = false;
  }, 100);
});

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  console.log(min, max);
  const time = randomTime(min, max);
  const hole = randomHole(holes);
  hole.classList.add("up");

  setTimeout(() => {
    hole.classList.remove("up");
    if (remainTime > 0) peep();
    else {
      startDimmed.style.display = "flex";
      clearInterval(timeInterval);
    }
  }, time);
}

function updateTimeRange() {}

function startGame() {
  timeUp = false;
  peep();
  timeInterval = setInterval(() => {
    remainTime -= 0.02;
    timeRange.style.width = `${(remainTime / playTime) * 100}%`;
  }, 20);
}

function bonk(e) {
  if (!e.isTrusted) return;
  if ([...this.classList].includes("up")) {
    score++;
    this.classList.remove("up");
  }
  this.classList.add("hit");
  setTimeout(() => {
    this.classList.remove("hit");
  }, 200);
  scoreBoard.textContent = score;
}

function init() {
  score = 0;
  lastHole;
  playTime = 10;
  remainTime = playTime;
  isClick = false;
  scoreBoard.textContent = 0;
  timeRange.style.width = "100%";
}

holes.forEach((hole) => hole.addEventListener("click", bonk));

// prevent Drag
document.addEventListener("dragstart", (event) => {
  event.preventDefault();
});

startButtons.forEach((startButton) => {
  startButton.addEventListener("click", (e) => {
    startDimmed.style.display = "none";
    if ([...e.target.classList].includes("-easy")) {
      min = 700;
      max = 1000;
    } else if ([...e.target.classList].includes("-normal")) {
      min = 400;
      max = 1000;
    } else if ([...e.target.classList].includes("-hard")) {
      min = 200;
      max = 400;
    }

    init();
    setTimeout(() => {
      startGame();
    }, [500]);
  });
});
```
