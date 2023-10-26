---
title: "Word Game"
description: "Word Game made with html, css, js"
url: "https://making-challenge.netlify.app/23-wordgame/"
coverImage: "/assets/projects/23-wordgame.png"
youtubeUrl: "https://www.youtube.com/watch?v=ssl7daos8o8"
date: "2023-10-07"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/23-wordgame.png"
---

### Youtube Link

<a class="youtube" target="_blank" href="https://www.youtube.com/watch?v=ssl7daos8o8"><img src="https://img.youtube.com/vi/ssl7daos8o8/hqdefault.jpg" width="600" height="300" /></a>

### html

<GoogleAd/>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>typing practice game</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div id="game-container">
      <div id="score">Score: <span id="score-value">0</span></div>
      <div id="time">Time: <span id="time-value">60</span></div>
      <div id="word-container"></div>
    </div>
    <div id="btn-container" class="btn-container">
      <div class="inner">
        <strong id="result-score" class="result_score"></strong>
        <button type="button" id="restart_button" class="restart_button">restart</button>
      </div>
    </div>
    <div id="input-container">
      <input type="text" id="user-input" placeholder="" autofocus autocomplete="false" />
    </div>
    <script src="./index.js"></script>
  </body>
</html>
```

### css

<GoogleAd/>

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "dilo world", sans-serif;
  padding: 0;
  margin: 0;
  background: no-repeat url("./assets/sea.jpg") 0 0 / cover;
}

#game-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  border: 1px solid #000;
  overflow: hidden;
}

#score {
  position: relative;
  width: 200px;
  text-align: center;
  font-size: 40px;
  color: #333;
  margin: 50px auto 0;
  padding: 10px 0;
  border-radius: 6px;
  border: 4px solid rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 10;
}

#time {
  font-size: 28px;
  padding: 20px;
  text-align: center;
}

#word-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.word {
  position: absolute;
  left: 0;
  top: 100%;
  font-weight: 500;
  font-size: 24px;
  font-family: "machine gunk", sans-serif;
}

#input-container {
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
}

#user-input {
  padding: 10px;
  width: 200px;
  font-size: 24px;
  border: 3px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
  font-family: "machine gunk", sans-serif;
}

#user-input.wrong {
  border-color: red;
}

#user-input.correct {
  border-color: greenyellow;
}

#user-input:focus {
  outline: none;
}

.btn-container {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
}

.inner {
  border: 10px;
  background-color: #eddfc1;
  padding: 40px;
  text-align: center;
  border-radius: 20px;
  border: 10px solid rgb(226, 180, 89);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.result_score {
  display: block;
  font-size: 50px;
  color: rgb(193, 121, 19);
}

.restart_button {
  font-size: 40px;
  background-color: rgb(244, 169, 78);
  padding: 10px 20px;
  color: #fff;
  margin-top: 20px;
  border-radius: 100px;
  font-family: "machine gunk", sans-serif;
  border: 0;
}
```

### js

<GoogleAd/>

```js
const words = [
  "apple",
  "avocado",
  "banana",
  "blackberry",
  "blueberry",
  "cherry",
  "cherry",
  "coconut",
  "grape",
  "kiwi",
  "lemon",
  "lime",
  "mango",
  "melon",
  "orange",
  "papaya",
  "peach",
  "pear",
  "persimmon",
  "pineapple",
  "plum",
  "strawberry",
  "tangerine",
  "tomato",
  "watermelon",
];

const wordContainer = document.getElementById("word-container");
const scoreValue = document.getElementById("score-value");
const userInput = document.getElementById("user-input");
const resultScore = document.getElementById("result-score");
const btnContainer = document.getElementById("btn-container");
const restartButton = document.getElementById("restart_button");
const timeValue = document.getElementById("time-value");

let score = 0;
let gameTimer, timeTimer;
let wordSpeed = 1;
let wordInterval = 2000;
let playTime = 60;
let remainingTime = playTime;

function createWord() {
  const word = document.createElement("div");

  word.classList.add("word");
  word.innerText = words[Math.floor(Math.random() * words.length)];
  word.style.left = Math.random() * (wordContainer.offsetWidth - 200 - word.offsetWidth) + 100 + "px";
  wordContainer.appendChild(word);

  const bottom = wordContainer.offsetHeight - word.offsetHeight - 150;

  const animation = word.animate([{ top: "0px" }, { top: bottom + "px" }], {
    duration: 20000 / wordSpeed,
    easing: "linear",
    fill: "forwards",
  });

  animation.onfinish = function () {
    word.textContent = "";
    word.style.width = "70px";
    word.style.height = "50px";
    word.style.background = 'no-repeat url("./assets/drop.png") 0 0 / cover';

    setTimeout(() => {
      word.remove();
    }, 500);
  };
}

function startGame() {
  remainingTime = playTime;
  score = 0;
  wordSpeed = 1;
  timeValue.innerText = playTime;
  scoreValue.innerText = score;
  userInput.value = "";
  wordContainer.innerHTML = "";
  userInput.disabled = false;
  userInput.focus();
  btnContainer.style.display = "none";

  gameTimer = setInterval(function () {
    createWord();
  }, wordInterval);

  setTimeout(function () {
    endGame();
  }, 60000);

  timeTimer = setInterval(decreaseTime, 1000);
}

function endGame() {
  clearInterval(gameTimer);
  clearInterval(timeTimer);
  wordContainer.innerText = "";
  userInput.disabled = true;
  userInput.blur();
  btnContainer.style.display = "flex";
  resultScore.innerText = `Score : ${score}`;
}

function checkWord() {
  const enteredWord = userInput.value.trim().toLowerCase();
  const wordElements = document.querySelectorAll(".word");

  let isFind = false;

  for (let i = 0; i < wordElements.length; i++) {
    const wordElement = wordElements[i];

    if (wordElement.innerText.toLowerCase() === enteredWord) {
      isFind = true;
      userInput.classList.add("correct");
      setTimeout(() => {
        userInput.classList.remove("correct");
      }, 500);

      // correct pop animation
      wordElement.textContent = "";
      wordElement.style.width = "150px";
      wordElement.style.height = "150px";
      wordElement.style.transform = "translate(-50px , -50px)";
      wordElement.style.background = 'no-repeat url("./assets/pop.gif")  0 0 / cover';

      setTimeout(() => {
        wordElement.remove();
      }, 300);

      score++;
      scoreValue.innerText = score;
      userInput.value = "";
      if (score % 10 === 0) {
        wordSpeed += 1;
        clearInterval(gameTimer);
        wordInterval -= 100;
        createWord();
        gameTimer = setInterval(function () {
          createWord();
        }, wordInterval);
      }
      break;
    }
  }

  if (!isFind) {
    userInput.classList.add("wrong");
    setTimeout(() => {
      userInput.classList.remove("wrong");
    }, 500);
  }
}

userInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkWord();
    userInput.value = "";
  }
});

startGame();

function decreaseTime() {
  remainingTime--;

  timeValue.innerText = remainingTime;

  if (remainingTime === 0) {
    endGame();
  }
}

restartButton.addEventListener("click", () => {
  startGame();
});
```
