---
title: "Tic Tac Toe"
description: "Tic Tac Toe made with html, css, js"
url: "https://making-challenge.netlify.app/16-tictactoe/"
coverImage: "/assets/projects/16_tictactoe.png"
youtubeUrl: "https://www.youtube.com/watch?v=_hByC-lNJ5g"
date: "2023-07-21"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/16_tictactoe.png"
---

### Youtube Link

<a class="youtube" target="_blank" href="https://www.youtube.com/watch?v=_hByC-lNJ5g"><img src="https://img.youtube.com/vi/_hByC-lNJ5g/hqdefault.jpg" width="600" height="300" /></a>

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
    <title>Tic Tac Toe</title>
  </head>
  <body>
    <div class="board_wrap">
      <div class="board" id="board">
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
        <div class="cell" data-cell></div>
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
  margin: 0;
  padding: 0;
  background-color: #12bdac;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.board_wrap {
  background-color: #0ca192;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  background-color: #12bdac;
  cursor: pointer;
  font-weight: 900;
}

.cell.x {
  color: #545454;
}

.cell.o {
  color: #f2ebd3;
}
```

### js

<GoogleAd/>

```js
const board = document.getElementById("board");
const cells = document.querySelectorAll("[data-cell]");
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let currentPlayer = "X";

cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

function handleCellClick(event) {
  const cell = event.target;

  if (cell.textContent == "") {
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());

    if (checkWin(currentPlayer)) {
      setTimeout(() => {
        alert(currentPlayer + "wins");
        resetBoard();
      }, 100);
    } else if (isBoardFull()) {
      setTimeout(() => {
        alert("It's a tie!");
        resetBoard();
      }, 100);
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      if (currentPlayer === "O") {
        makeAIMove();
      }
    }
  }
}

function checkWin(player) {
  return winningCombinations.some((combination) => {
    return combination.every((index) => cells[index].textContent === player);
  });
}

function isBoardFull() {
  return [...cells].every((cell) => cell.textContent !== "");
}

function resetBoard() {
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("o", "x");
  });
  currentPlayer = "X";
}

function makeAIMove() {
  const emptyCells = [...cells].filter((cell) => cell.textContent === "");
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const cell = emptyCells[randomIndex];

  setTimeout(() => {
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());
    if (checkWin(currentPlayer)) {
      setTimeout(() => {
        alert(currentPlayer + "wins!");
        resetBoard();
      }, 100);
    } else if (isBoardFull()) {
      setTimeout(() => {
        alert("It's a tie!");
        resetBoard();
      }, 100);
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }, 500);
}
```
