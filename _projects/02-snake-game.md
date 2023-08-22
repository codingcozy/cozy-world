---
title: "Snake Game"
description: "Snake Game made with html, css, js"
url: "https://making-challenge.netlify.app/2-snake%20game/"
coverImage: "/assets/projects/02_snake_game-thumbnail.png"
youtubeUrl: "https://www.youtube.com/watch?v=ctQmwM2uxAI"
date: "2023-03-24"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/02_snake_game-thumbnail.png"
---

### Youtube Link

<a class="youtube" target="_blank" href="https://www.youtube.com/watch?v=ctQmwM2uxAI"><img src="https://img.youtube.com/vi/ctQmwM2uxAI/hqdefault.jpg" width="600" height="300" /></a>

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
    <title>Snake Game</title>
  </head>
  <body>
    <div class="game_board_wrap">
      <div class="header">
        <span id="score">0</span>
      </div>
      <div id="game_board">
        <span id="snake"></span>
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
}

.game_board_wrap {
  background-color: #578a35;
  margin: 0 auto;
  display: inline-block;
  vertical-align: top;
  padding: 0 20px;
}

.header {
  background-color: #4a762c;
  margin: 0 -20px;
  padding: 20px;
}

#score {
  color: #fff;
  display: flex;
}

#score::before {
  content: "";
  margin-right: 8px;
  background: url("./assets/apple.png") 0 0 /100%;
  width: 25px;
  height: 25px;
  margin-top: -5px;
}

#game_board {
  width: 600px;
  height: 400px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  background: repeating-linear-gradient(rgba(181, 212, 92, 0.8), rgba(181, 212, 92, 0.8) 20px, rgba(175, 208, 86, 0.8) 20px, rgba(175, 208, 86, 0.8) 40px), repeating-linear-gradient(90deg, rgba(181, 212, 92, 0.8), rgba(
          181,
          212,
          92,
          0.8
        ) 20px, rgba(175, 208, 86, 0.8) 20px, rgba(175, 208, 86, 0.8) 40px);
}
.worm {
  width: 20px;
  height: 20px;
  background-color: #6179f2;
  position: absolute;
  top: 200px;
  left: 300px;
  z-index: 1;
}

/* rounded corner */
.worm[data-direction="right"] + .worm[data-direction="up"] {
  border-radius: 0 0 50% 0;
}

.worm[data-direction="right"] + .worm[data-direction="down"] {
  border-radius: 0 50% 0 0;
}

.worm[data-direction="left"] + .worm[data-direction="up"] {
  border-radius: 0 0 0 50%;
}

.worm[data-direction="left"] + .worm[data-direction="down"] {
  border-radius: 50% 0 0 0;
}

.worm[data-direction="down"] + .worm[data-direction="left"] {
  border-radius: 0 0 50% 0;
}

.worm[data-direction="down"] + .worm[data-direction="right"] {
  border-radius: 0 0 0 50%;
}

.worm[data-direction="up"] + .worm[data-direction="left"] {
  border-radius: 0 50% 0 0;
}

.worm[data-direction="up"] + .worm[data-direction="right"] {
  border-radius: 50% 0 0 0;
}

/* tail */
.worm.tail[data-direction="right"] {
  border-radius: 50% 0 0 50%;
}

.worm.tail[data-direction="down"] {
  border-radius: 50% 50% 0 0;
}

.worm.tail[data-direction="left"] {
  border-radius: 0 50% 50% 0;
}

.worm.tail[data-direction="up"] {
  border-radius: 0 0 50% 50%;
}

/* head */
.worm.head[data-direction="right"] {
  border-radius: 0 50% 50% 0;
}

.worm.head[data-direction="down"] {
  border-radius: 0 0 50% 50%;
}

.worm.head[data-direction="left"] {
  border-radius: 50% 0 0 50%;
}

.worm.head[data-direction="up"] {
  border-radius: 50% 50% 0 0;
}

.worm.head.tail {
  border-radius: 50%;
}

#food {
  width: 20px;
  height: 20px;
  background: url("./assets/apple.png") 0 0 / cover;
  position: absolute;
  top: 100px;
  left: 100px;
  z-index: 1;
}
```

### js

<GoogleAd/>

```js
let wormPosition = { top: 200, left: 300 };
let wormDirection = "right";
let wormBody = [];
let foodPosition = {};
let gameInterval;
let score = 0;

function startGame() {
  document.addEventListener("keydown", changeDirection);
  gameInterval = setInterval(gameLoop, 100);
  generateFood();
}

function gameLoop() {
  updateWormPosition();
  checkSelfCollision();
  updateWormBody();
  checkFoodCollision();
  checkBoundaryCollision();
}

function changeDirection(event) {
  switch (event.keyCode) {
    case 37: // left
      wormDirection = "left";
      break;
    case 38: // up
      wormDirection = "up";
      break;
    case 39: // right
      wormDirection = "right";
      break;
    case 40: // down
      wormDirection = "down";
      break;
    default:
      break;
  }
}

function updateWormPosition() {
  switch (wormDirection) {
    case "left":
      wormPosition.left -= 20;
      break;
    case "up":
      wormPosition.top -= 20;
      break;
    case "right":
      wormPosition.left += 20;
      break;
    case "down":
      wormPosition.top += 20;
      break;
    default:
      break;
  }
}

function updateWormBody() {
  if (wormBody.length > score) {
    let wormTail = wormBody.shift();
    document.getElementById(wormTail.id).remove();
  }

  let wormElement = document.createElement("div");
  wormElement.style.width = "20px";
  wormElement.style.height = "20px";
  wormElement.style.position = "absolute";
  wormElement.style.top = wormPosition.top + "px";
  wormElement.style.left = wormPosition.left + "px";
  wormElement.style.zIndex = "0";
  wormElement.classList.add("worm");
  wormElement.dataset.direction = wormDirection;

  wormElement.id = "worm-body-" + wormBody.length;

  wormBody.push({
    top: wormPosition.top,
    left: wormPosition.left,
    id: wormElement.id,
  });

  // head & tail add class
  document.getElementById("snake").appendChild(wormElement);
  const [head] = document.querySelectorAll(".head");
  if (head) head.classList.remove("head");
  const [tail] = document.querySelectorAll(".tail");
  if (tail) tail.classList.remove("tail");

  const wormBodyElList = document.querySelectorAll(".worm");
  wormBodyElList[wormBodyElList.length - 1].classList.add("head");

  const neck = wormBodyElList[wormBodyElList.length - 2];
  if (neck) {
    neck.dataset.direction = wormDirection;
  }

  wormBodyElList[0].classList.add("tail");
}

function checkBoundaryCollision() {
  if (wormPosition.top < 0 || wormPosition.top > 380 || wormPosition.left < 0 || wormPosition.left > 580) {
    gameOver();
  }
}

function updateScore() {
  score++;
  document.getElementById("score").innerHTML = +score;
}

function checkFoodCollision() {
  if (wormPosition.top === foodPosition.top && wormPosition.left === foodPosition.left) {
    updateScore();
    document.querySelector("#food").remove();
    generateFood();
  }
}

function checkSelfCollision() {
  for (let i = 1; i < wormBody.length; i++) {
    if (wormPosition.top === wormBody[i].top && wormPosition.left === wormBody[i].left) {
      gameOver();
    }
  }
}

function generateFood() {
  let foodElement = document.createElement("div");
  foodElement.style.width = "20px";
  foodElement.style.height = "20px";
  foodElement.style.position = "absolute";

  foodPosition = {
    top: Math.floor(Math.random() * 20) * 20,
    left: Math.floor(Math.random() * 30) * 20,
  };

  foodElement.style.top = foodPosition.top + "px";
  foodElement.style.left = foodPosition.left + "px";
  foodElement.style.borderRadius = "50%";
  foodElement.style.zIndex = "1";
  foodElement.id = "food";

  document.getElementById("game_board").appendChild(foodElement);
}

function gameOver() {
  clearInterval(gameInterval);
  alert("Game Over! Your score is " + score);
  location.reload();
}

startGame();
```
