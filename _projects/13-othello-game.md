---
title: "Othello Game"
description: "Othello Game made with html, css, js"
url: "https://making-challenge.netlify.app/13-Othello/"
coverImage: "/assets/projects/13_othello-thumbnail.png"
youtubeUrl: "https://www.youtube.com/watch?v=npNoZIjWMO8"
date: "2023-06-12"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/13_othello-thumbnail.png"
---

### Youtube Link

<a class="youtube" target="_blank" href="https://www.youtube.com/watch?v=npNoZIjWMO8"><img src="https://img.youtube.com/vi/npNoZIjWMO8/hqdefault.jpg" width="600" height="300" /></a>

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
    <title>Othello</title>
  </head>
  <body>
    <div class="board"></div>
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
  background-image: linear-gradient(135deg, #c6d8d7, #eeefde 60%, #c6d8d7);
}

.board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  width: 400px;
  height: 400px;
  border: 10px solid #333;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.cell {
  border: 1px solid #333;
  background-color: #149f54;
  display: flex;
  align-items: center;
  justify-content: center;
}

.black::before {
  background-color: #000;
}

.black::before,
.white::before {
  content: "";
  border-radius: 50%;
  display: block;
  width: 80%;
  height: 80%;
  transition: 0.3s ease-in-out;
  margin: auto;
}

.white::before {
  background-color: #fff;
}
```

### js

<GoogleAd/>

```js
let board = [
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "B", "W", "", "", ""],
  ["", "", "", "W", "B", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
];

let currentPlayer = "B";

const boardElement = document.querySelector(".board");
for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    const cellElement = document.createElement("div");
    cellElement.classList.add("cell");
    if (board[i][j] === "B") {
      cellElement.classList.add("black");
    } else if (board[i][j] === "W") {
      cellElement.classList.add("white");
    }

    cellElement.addEventListener("click", function () {
      if (isValidMove(i, j, "B")) {
        board[i][j] = "B";
        flipTiles(i, j, "B");
        updateBoard();

        setTimeout(() => {
          aiMove();
        }, (Math.floor(Math.random() * 8) + 2) * 100);

        const randomRow = Math.floor(Math.random() * 8);
        const randomCol = Math.floor(Math.random() * 8);

        if (isValidMove(randomRow, randomCol, "W")) {
          board[randomRow][randomCol] = "W";
          flipTiles(randomRow, randomCol, "W");
          updateBoard();
        }
      }
    });

    boardElement.appendChild(cellElement);
  }
}

function updateBoard() {
  const cells = document.querySelectorAll(".cell");
  for (let i = 0; i < cells.length; i++) {
    const row = Math.floor(i / 8);
    const col = i % 8;
    cells[i].className = "cell";
    if (board[row][col] === "B") {
      cells[i].classList.add("black");
    } else if (board[row][col] === "W") {
      cells[i].classList.add("white");
    }
  }
}

function isValidMove(row, col, player) {
  if (board[row][col] !== "") {
    return false;
  }

  const opponent = player === "B" ? "W" : "B";

  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) {
        continue;
      }

      let r = row + dr;
      let c = col + dc;

      let foundOpponent = false;

      while (r >= 0 && r < 8 && c >= 0 && c < 8) {
        if (board[r][c] === opponent) {
          foundOpponent = true;
        } else if (board[r][c] === player && foundOpponent) {
          return true;
        } else {
          break;
        }

        r += dr;
        c += dc;
      }
    }
  }

  return false;
}

function aiMove() {
  let validMoves = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (isValidMove(i, j, "W")) {
        validMoves.push({ row: i, col: j });
      }
    }
  }

  if (validMoves.length > 0) {
    const randomIndex = Math.floor(Math.random() * validMoves.length);
    const { row, col } = validMoves[randomIndex];
    board[row][col] = "W";
    flipTiles(row, col, "W");
    updateBoard();
  }
}

function flipTiles(row, col, player) {
  const opponent = player === "B" ? "W" : "B";

  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) {
        continue;
      }

      let r = row + dr;
      let c = col + dc;
      let foundOpponent = false;
      let tilesToFlip = [];

      while (r >= 0 && r < 8 && c >= 0 && c < 8) {
        if (board[r][c] === opponent) {
          foundOpponent = true;
          tilesToFlip.push({ row: r, col: c });
        } else if (board[r][c] === player && foundOpponent) {
          for (const tile of tilesToFlip) {
            board[tile.row][tile.col] = player;
          }
          break;
        } else {
          break;
        }

        r += dr;
        c += dc;
      }
    }
  }
}

function isGameOver() {
  let isBoardFull = true;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "") {
        isBoardFull = false;
        break;
      }
    }
    if (!isBoardFull) {
      break;
    }
  }

  let hasValidMove = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (isValidMove(i, j, currentPlayer)) {
        hasValidMove = true;
        break;
      }
    }

    if (hasValidMove) {
      break;
    }
  }

  return isBoardFull || !hasValidMove;
}
```
