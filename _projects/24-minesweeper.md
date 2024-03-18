---
title: "Mine Sweeper"
description: "Mine Sweeper made with html, css, js"
url: "https://making-challenge.netlify.app/24-minesweeper/"
coverImage: "/assets/projects/24-minesweeper.png"
youtubeUrl: "https://www.youtube.com/watch?v=FfghYLtfYDY"
date: "2023-10-15"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/24-minesweeper.png"
---

### Youtube Link

<a class="youtube" target="_blank" href="https://www.youtube.com/watch?v=FfghYLtfYDY"><img src="https://img.youtube.com/vi/FfghYLtfYDY/hqdefault.jpg" width="600" height="300" /></a>

<GoogleAd />

### html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>mine sweeper game</title>
  </head>
  <body>
    <div class="game_wrap">
      <div class="header">
        <h1 class="logo">
          <img src="./assets/mine.png" width="20" alt="" />
          Minesweeper
        </h1>
        <div class="menu">
          <button type="button" class="btn min"></button>
          <button type="button" class="btn max"></button>
          <button type="button" class="btn close"></button>
        </div>
      </div>
      <div class="board_wrap">
        <div class="status">
          <span class="digit_wrap">
            <span id="mines_hundred" class="digit"></span>
            <span id="mines_ten" class="digit"></span>
            <span id="mines_one" class="digit"></span>
          </span>
          <button type="button" class="btn_start">
            <span class="blind">start game</span>
          </button>
          <span class="digit_wrap">
            <span id="time_hundred" class="digit"></span>
            <span id="time_ten" class="digit"></span>
            <span id="time_one" class="digit"></span>
          </span>
        </div>
        <div class="board" id="board">
          <!-- <div class="cell flag"></div>
          <div class="cell mine fail"></div>
          <div class="cell" data-mines="1">1</div>
          <div class="cell" data-mines="2">2</div>
          <div class="cell" data-mines="3">3</div>
          <div class="cell" data-mines="4">4</div>
          <div class="cell" data-mines="5">5</div>
          <div class="cell" data-mines="6">6</div>
          <div class="cell" data-mines="7">7</div>
          <div class="cell" data-mines="8">8</div> -->
        </div>
      </div>
    </div>
    <script src="./index.js"></script>
  </body>
</html>
```

<GoogleAd/>

### css

<GoogleAd/>

```css
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: no-repeat url(./assets/background.jpg) center center/ cover;
}

* {
  margin: 0;
  padding: 0;
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

.game_wrap {
  border: 3px solid #808080;
  border-top-color: #fff;
  border-left-color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 2px 4px;
  background-color: #120f7f;
}

.logo {
  display: flex;
  align-items: center;
  column-gap: 4px;
  color: #fff;
  font-family: "DungGeunMo", sans-serif;
  font-size: 22px;
}

.logo img {
  flex-shrink: 0;
}

.menu {
  display: flex;
  flex-shrink: 0;
  column-gap: 2px;
}

.btn {
  position: relative;
  width: 24px;
  border-radius: 0;
  border: 1px solid #808080;
  border-top-color: #fff;
  border-left-color: #fff;
  background-color: #c6c6c6;
}

.btn.min::before {
  content: "";
  position: absolute;
  bottom: 3px;
  left: 5px;
  width: 10px;
  height: 3px;
  background-color: #000;
}

.btn.max::before {
  content: "";
  position: absolute;
  bottom: 3px;
  left: 3px;
  width: 13px;
  height: 10px;
  border: 1px solid #000;
  border-top-width: 3px;
}

.btn.close::before,
.btn.close::after {
  content: "";
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: 9px;
  width: 3px;
  background-color: #000;
}

.btn.close::before {
  transform: rotate(45deg);
}

.btn.close::after {
  transform: rotate(-45deg);
}

.btn:active {
  border-color: #808080;
  background-color: #c6c6c6;
}

.board_wrap {
  border: 3px solid #808080;
  border-top-color: #fff;
  border-left-color: #fff;
  background-color: #c6c6c6;
  padding: 10px;
}

.status {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 3px solid #808080;
  border-right-color: #fff;
  border-bottom-color: #fff;
  padding: 4px;
}

.digit_wrap {
  display: flex;
  padding: 2px;
  column-gap: 3px;
  background-color: #000;
  border: 1px solid #808080;
  border-right-color: #fff;
  border-bottom-color: #fff;
}

.digit {
  width: 16px;
  height: 31px;
  background: no-repeat url("./assets/d0.png") 0 0 / cover;
}

.digit[data-num="1"] {
  background-image: url("./assets/d1.png");
}
.digit[data-num="2"] {
  background-image: url("./assets/d2.png");
}
.digit[data-num="3"] {
  background-image: url("./assets/d3.png");
}
.digit[data-num="4"] {
  background-image: url("./assets/d4.png");
}
.digit[data-num="5"] {
  background-image: url("./assets/d5.png");
}
.digit[data-num="6"] {
  background-image: url("./assets/d6.png");
}
.digit[data-num="7"] {
  background-image: url("./assets/d7.png");
}
.digit[data-num="8"] {
  background-image: url("./assets/d8.png");
}
.digit[data-num="9"] {
  background-image: url("./assets/d9.png");
}

.btn_start {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 2px;
  border: 3px solid #808080;
  border-top-color: #fff;
  border-left-color: #fff;
  background-color: #c6c6c6;
  cursor: pointer;
}

.btn_start::before {
  content: "";
  width: 20px;
  height: 20px;
  background: no-repeat url("./assets/face.png") 0 0 / cover;
}

.btn_start.lose::before {
  background-image: url("./assets/face-lose.png");
}

.btn_start:active {
  border-width: 1px;
}

.board {
  display: grid;
  grid-template-columns: repeat(9, 30px);
  width: 270px;
  border: 3px solid #808080;
  border-right-color: #fff;
  border-bottom-color: #fff;
}

.cell {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #808080;
  border-top-color: #fff;
  border-left-color: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 25px;
  font-family: "DungGeunMo", sans-serif;
  font-weight: bold;
  cursor: pointer;
  box-sizing: border-box;
  background-color: #c6c6c6;
}

.cell[data-mines="1"] {
  color: #00f;
}

.cell[data-mines="2"] {
  color: #387f22;
}
.cell[data-mines="3"] {
  color: #ea3323;
}
.cell[data-mines="4"] {
  color: #01017b;
}
.cell[data-mines="5"] {
  color: #76150c;
}
.cell[data-mines="6"] {
  color: #377e7e;
}
.cell[data-mines="7"] {
  color: #000;
}
.cell[data-mines="8"] {
  color: #808080;
}

.cell:not(.revealed):active {
  border-color: #c6c6c6;
}

.revealed {
  border-width: 1px;
  border-color: #808080;
  background-color: #c6c6c6;
}

.flag::before {
  content: "";
  width: 16px;
  height: 19px;
  margin: 2px;
  display: block;
  background: no-repeat url("./assets/flag.png") 0 0 / cover;
}

.mine {
  background-color: #c6c6c6;
  border-width: 1px;
  border-color: #808080;
}

.mine::before {
  content: "";
  width: 22px;
  height: 22px;
  display: block;
  background: no-repeat url("./assets/mine.png") 0 0 / cover;
}

.fail {
  background-color: #f00;
  border-width: 1px;
  border-color: #808080;
}
```

### js

<GoogleAd/>

```js
let board = document.getElementById("board");
let minesHundredElement = document.getElementById("mines_hundred");
let minesTenElement = document.getElementById("mines_ten");
let minesOneElement = document.getElementById("mines_one");
let timeHundredElement = document.getElementById("time_hundred");
let timeTenElement = document.getElementById("time_ten");
let timeOneElement = document.getElementById("time_one");
let startButton = document.querySelector(".btn_start");

let startTime = null;
let timeInterval;
let mineCount = 10;
let remainingMines = mineCount;
let revealedCells = 0;
let isGameActive = true;
let boardSize = 9;

let boradArray = [];

function initializeBoard() {
  startTime = null;
  remainingMines = mineCount;
  revealedCells = 0;
  isGameActive = true;
  boradArray = [];
  board.innerHTML = "";
  clearInterval(timeInterval);
  setMineDigit(mineCount);
  setTimeDigit(0);

  for (let i = 0; i < boardSize; i++) {
    const row = [];
    for (let j = 0; j < boardSize; j++) {
      row.push({ isMine: false, isRevealed: false });
    }
    boradArray.push(row);
  }

  placeMines();
  updateMinesCount();
  renderBoard();
}

function placeMines() {
  for (let i = 0; i < mineCount; i++) {
    let row, col;
    do {
      row = Math.floor(Math.random() * boardSize);
      col = Math.floor(Math.random() * boardSize);
    } while (boradArray[row][col].isMine);

    boradArray[row][col].isMine = true;
  }
}

function updateMinesCount() {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (!boradArray[i][j].isMine) {
        let count = 0;

        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            const newRow = i + x;
            const newCol = j + y;
            if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize) {
              if (boradArray[newRow][newCol].isMine) {
                count++;
              }
            }
          }
        }

        boradArray[i][j].minesCount = count;
      }
    }
  }
}

function getDigitNum(num) {
  const digitNum = String(num).padStart(3, "0");
  return { one: digitNum[2], ten: digitNum[1], hundred: digitNum[0] };
}

function setMineDigit(num) {
  const { one, ten, hundred } = getDigitNum(num);

  minesHundredElement.dataset.num = hundred;
  minesTenElement.dataset.num = ten;
  minesOneElement.dataset.num = one;
}

function setTimeDigit(num) {
  const { one, ten, hundred } = getDigitNum(num);

  timeHundredElement.dataset.num = hundred;
  timeTenElement.dataset.num = ten;
  timeOneElement.dataset.num = one;
}

function renderBoard() {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.addEventListener("click", cellClick);
      cell.addEventListener("contextmenu", cellRightClick);
      board.appendChild(cell);
    }
  }
}

function cellClick(event) {
  if (!isGameActive) return;

  if (startTime === null) {
    startTime = Date.now();
    timeInterval = setInterval(updateTime, 1000);
  }

  const row = parseInt(event.target.dataset.row);
  const col = parseInt(event.target.dataset.col);

  if (boradArray[row][col].isMine) {
    event.target.classList.add("fail");
    startButton.classList.add("lose");
    revealMines();
    clearInterval(timeInterval);
    isGameActive = false;
  } else {
    revealCell(row, col);
  }
}

function cellRightClick(event) {
  event.preventDefault();

  if (!isGameActive) return;

  const row = parseInt(event.target.dataset.row);
  const col = parseInt(event.target.dataset.col);
  const cell = boradArray[row][col];

  if (!cell.isRevealed) {
    cell.isFlagged = !cell.isFlagged;

    if (cell.isFlagged) {
      setMineDigit(--remainingMines);
      event.target.classList.add("flag");
    } else {
      setMineDigit(++remainingMines);
      event.target.classList.remove("flag");
    }
  }
}

function revealCell(row, col) {
  const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

  if (!cell || boradArray[row][col].isRevealed) return;

  boradArray[row][col].isRevealed = true;
  revealedCells++;

  if (boradArray[row][col].isFlagged) {
    boradArray[row][col].isFlagged = !boradArray[row][col].isFlagged;
  }

  if (boradArray[row][col].minesCount > 0) {
    cell.textContent = boradArray[row][col].minesCount;
    cell.dataset.mines = boradArray[row][col].minesCount;
  } else {
    cell.classList.add("revealed");
    cell.textContent = "";

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        const newRow = row + x;
        const newCol = col + y;

        if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize) {
          revealCell(newRow, newCol);
        }
      }
    }
  }

  if (revealedCells === boardSize * boardSize - mineCount) {
    clearInterval(timeInterval);
    isGameActive = false;
  }
}

function revealMines() {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (boradArray[i][j].isMine) {
        const cell = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
        cell.classList.add("mine");
      }
    }
  }
}

function updateTime() {
  const currentTime = Math.floor((Date.now() - startTime) / 1000);

  setTimeDigit(currentTime);
}

initializeBoard();

startButton.addEventListener("click", () => {
  initializeBoard();
  startButton.classList.remove("lose");
});
```
