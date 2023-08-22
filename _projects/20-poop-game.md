---
title: "Poop Game"
description: "Poop Game made with html, css, js"
url: "https://making-challenge.netlify.app/20-poop-game/"
coverImage: "/assets/projects/20-poop-game.png"
youtubeUrl: "https://www.youtube.com/watch?v=PwhPBwyvgPY"
date: "2023-08-22"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/20-poop-game.png"
---

### Youtube Link

<a class="youtube" href="https://www.youtube.com/watch?v=PwhPBwyvgPY"><img src="https://img.youtube.com/vi/PwhPBwyvgPY/hqdefault.jpg" width="600" height="300"></a>

### html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Poop Game</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <canvas id="gameCanvas" width="500" height="500"></canvas>
    <script src="./index.js"></script>
  </body>
</html>
```

### css

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
}
canvas {
  border: 2px solid black;
}
```

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686"
     crossorigin="anonymous"></script>

<ins className="adsbygoogle"
style={{display:"block"}}
data-ad-client="ca-pub-4877378276818686"
data-ad-slot="1107185301"
data-ad-format="auto"
data-full-width-responsive="true"></ins>

<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

### js

```js
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const playerWidth = 15;
const playerHeight = 20;
const poopSize = 10;
const poopSpeed = 3;
const playerSpeed = 5;
const acceleration = 2;
let playerDirection = "right";
let playerFrame = 0;
let playerMaxFrame = 6;
let playerX = canvas.width / 2 - playerWidth / 2;
let playerY = canvas.height - playerHeight;
let poops = [];
let time = 0;
let isGameOver = false;
let accelerationX = 0;
let accelerationY = 0;
let startTime = Date.now();

const playerImg = new Image();
playerImg.src = "./assets/player-right.png";

const poopImg = new Image();
poopImg.src = "./assets/poop.png";

function drawPlayer() {
  if (playerDirection === "right") playerImg.src = "./assets/player-right.png";
  if (playerDirection === "left") playerImg.src = "./assets/player-left.png";

  ctx.drawImage(playerImg, 175 * playerFrame, 0, 175, 241, playerX - playerWidth, playerY - playerHeight, playerWidth * 2, playerHeight * 2);
}

function drawpoop(poop) {
  ctx.drawImage(poopImg, poop.x - poop.radius, poop.y - poop.radius, poop.radius * 2, poop.radius * 2);
}

function drawScore() {
  const currentTime = Date.now();
  const timeElapsed = Math.floor((currentTime - startTime) / 1000);

  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Score: " + timeElapsed, canvas.width / 2 - 40, 40);
}

function gameOver() {
  const currentTime = Date.now();
  const timeElapsed = Math.floor((currentTime - startTime) / 1000);

  ctx.font = "40px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Game Over", canvas.width / 2 - 100, canvas.height / 2 - 30);

  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Your Score: " + timeElapsed, canvas.width / 2 - 55, canvas.height / 2 + 30);
}

function updateGame() {
  if (isGameOver) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();

  if (Math.random() < 0.1) {
    const randomX = Math.random() * canvas.width;
    poops.push({ x: randomX, y: 0, radius: 10 });
  }

  for (let i = 0; i < poops.length; i++) {
    poops[i].y += poopSpeed;
    drawpoop(poops[i]);

    const distance = Math.sqrt((poops[i].x - playerX) ** 2 + (poops[i].y - playerY) ** 2);
    if (distance < playerHeight / 2 + poopSize) {
      isGameOver = true;
      gameOver();
      break;
    }
  }

  playerX += accelerationX;
  playerY += accelerationY;

  playerX = Math.max(0, Math.min(playerX, canvas.width - playerWidth));
  playerY = Math.max(0, Math.min(playerY, canvas.height - playerWidth));

  time++;
  if (time % 5 === 0) playerFrame = (playerFrame + 1) % 6;
  drawScore();
  requestAnimationFrame(updateGame);
}

function handleKeyDown(e) {
  switch (e.key) {
    case "ArrowLeft":
      accelerationX = -acceleration;
      playerDirection = "left";
      break;
    case "ArrowRight":
      accelerationX = acceleration;
      playerDirection = "right";
      break;
  }
}

function handleKeyUp(e) {
  switch (e.key) {
    case "ArrowLeft":
    case "ArrowRight":
      accelerationX = 0;
      break;
  }
}

function startGame() {
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);
  updateGame();
}

startGame();
```
