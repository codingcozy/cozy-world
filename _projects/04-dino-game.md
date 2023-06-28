---
title: "Dino Game"
description: "Dino Game made with html, css, js"
url: "https://making-challenge.netlify.app/4-dino%20game/"
coverImage: "/assets/projects/04_dino_game-thumbnail.png"
youtubeUrl: "https://www.youtube.com/watch?v=H27VDl2wq3o"
date: "2023-04-07"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/04_dino_game-thumbnail.png"
---

### Youtube Link

<a class="youtube" href="https://www.youtube.com/watch?v=H27VDl2wq3o"><img src="https://img.youtube.com/vi/H27VDl2wq3o/hqdefault.jpg" width="600" height="300"></a>

### html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Dino Game</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h1 class="title">Dino Game</h1>
      <div class="game">
        <div class="map"></div>
        <div class="dino"></div>
        <div class="cactus"></div>
        <div class="bird"></div>
      </div>
      <span class="score">Score : 0</span>
      <button type="button" class="start_button">START</button>
    </div>
    <script src="./index.js"></script>
  </body>
</html>
```

### css

```css
.container {
  position: relative;
  margin: 100px auto;
  width: 500px;
  text-align: center;
  font-family: VT323, sans-serif;
}

.title {
  font-size: 40px;
}

.game {
  height: 300px;
  position: relative;
  overflow: hidden;
}

.map {
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: no-repeat url("./assets/map2.png") 0 80px / 1000px 100%;
}

@keyframes walk {
  0% {
    background: no-repeat url("./assets/dino1.png") 0 0 / 100%;
  }

  50% {
    background: no-repeat url("./assets/dino2.png") 0 0 / 100%;
  }
}

.dino {
  width: 50px;
  height: 53px;
  position: absolute;
  left: 20px;
  bottom: 50px;
  background-color: #333;
  background: no-repeat url("./assets/dino1.png") 0 0 / 100%;
  animation: walk 0.2s infinite none;
}
.cactus {
  width: 55px;
  height: 50px;
  position: absolute;
  bottom: 50px;
  right: -55px;
  background-color: #333;
  background: url("./assets/cactus.png") 0 0 / 100% 100%;
}

.bird {
  width: 50px;
  height: 30px;
  position: absolute;
  bottom: 130px;
  right: -50px;
  background: url("./assets/bird.png") 0 0 / cover;
}

.score {
  position: absolute;
  top: 50px;
  right: 30px;
  font-size: 22px;
}

.start_button {
  padding: 10px;
  background-color: #555;
  border-radius: 2px;
  color: #fff;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### js

```js
const map = document.querySelector(".map");
const dino = document.querySelector(".dino");
const cactus = document.querySelector(".cactus");
const bird = document.querySelector(".bird");
const scoreText = document.querySelector(".score");
const startButton = document.querySelector(".start_button");

let gameInterval;
let isJumping = false;
let position = 50;
let score = 0;
let speed = 10;
let obstacles = ["cactus", "bird"];
let obstaclePosition = 550;
let nextObstacle = obstacles[Math.floor(Math.random() * obstacles.length)];
let backgroundPosition = 0;

function handleKeyDown(event) {
  if (event.code === "Space") {
    if (!isJumping) {
      isJumping = true;

      let upInterval = setInterval(() => {
        if (position >= 200) {
          clearInterval(upInterval);

          let downInterval = setInterval(() => {
            if (position <= 50) {
              clearInterval(downInterval);
              isJumping = false;
            } else {
              position -= 10;
              dino.style.bottom = position + "px";
            }
          }, 20);
        } else {
          position += 10;
          dino.style.bottom = position + "px";
        }
      }, 20);
    }
  }
}

function updateScore() {
  scoreText.innerHTML = `Score : ${score}`;
}

function checkAvoid() {
  if (obstaclePosition < -30) {
    obstaclePosition = 550;
    score++;
    updateScore();
    speed += 0.5;
    nextObstacle = obstacles[Math.floor(Math.random() * obstacles.length)];
  }
}

function updateObstaclePosition() {
  obstaclePosition -= speed;

  if (nextObstacle === "cactus") {
    cactus.style.right = 550 - obstaclePosition + "px";
  } else if (nextObstacle === "bird") {
    bird.style.right = 550 - obstaclePosition + "px";
  }
}

function checkObstacleCollision() {
  if (nextObstacle === "cactus") {
    if (obstaclePosition < 100 && obstaclePosition > 20 && position < 120) {
      gameOver();
    }
  } else if (nextObstacle === "bird") {
    if (obstaclePosition < 50 && obstaclePosition > 0 && position > 80) {
      gameOver();
    }
  }
}

function gameOver() {
  clearInterval(gameInterval);
  startButton.style.display = "block";
}

function moveBackground() {
  backgroundPosition -= speed;
  map.style.left = backgroundPosition + "px";
  if (backgroundPosition < -500) backgroundPosition += 500;
}

function gameInit() {
  obstaclePosition = 550;
  cactus.style.right = "-55px";
  bird.style.right = "-50px";
  score = 0;
  updateScore();
  speed = 10;
}

startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  gameInit();
  nextObstacle = obstacles[Math.floor(Math.random() * obstacles.length)];

  gameInterval = setInterval(() => {
    updateObstaclePosition();
    checkAvoid();
    checkObstacleCollision();
    moveBackground();
  }, 20);

  document.addEventListener("keydown", handleKeyDown);
});
```
