---
title: "Cat Matching Game"
description: "Cat Matching Game made with html, css, js"
url: "https://making-challenge.netlify.app/6-Card_Matching_Game/"
coverImage: "/assets/projects/06_cat_matching_game-thumbnail.png"
youtubeUrl: "https://studio.youtube.com/video/oNW8BixUkQw"
date: "2023-04-25"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/06_cat_matching_game-thumbnail.png"
---

### Youtube Link

<a class="youtube" target="_blank" href="https://www.youtube.com/watch?v=oNW8BixUkQw"><img src="https://img.youtube.com/vi/oNW8BixUkQw/hqdefault.jpg" width="600" height="300" /></a>

<GoogleAd />

### html

<GoogleAd/>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Cat Matching Game</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <strong class="title">Cat Matching Game</strong>
    <div class="game-board">
      <div class="card_wrap">
        <div class="card" data-framework="a">
          <img class="front-face" src="assets/card_back.png" />
          <img class="back-face" src="assets/a.png" />
        </div>
      </div>
      <div class="card_wrap">
        <div class="card" data-framework="a">
          <img class="front-face" src="assets/card_back.png" />
          <img class="back-face" src="assets/a.png" />
        </div>
      </div>
      <div class="card_wrap">
        <div class="card" data-framework="b">
          <img class="front-face" src="assets/card_back.png" />
          <img class="back-face" src="assets/b.png" />
        </div>
      </div>
      <div class="card_wrap">
        <div class="card" data-framework="b">
          <img class="front-face" src="assets/card_back.png" />
          <img class="back-face" src="assets/b.png" />
        </div>
      </div>
      <div class="card_wrap">
        <div class="card" data-framework="c">
          <img class="front-face" src="assets/card_back.png" />
          <img class="back-face" src="assets/c.png" />
        </div>
      </div>
      <div class="card_wrap">
        <div class="card" data-framework="c">
          <img class="front-face" src="assets/card_back.png" />
          <img class="back-face" src="assets/c.png" />
        </div>
      </div>
      <div class="card_wrap">
        <div class="card" data-framework="d">
          <img class="front-face" src="assets/card_back.png" />
          <img class="back-face" src="assets/d.png" />
        </div>
      </div>
      <div class="card_wrap">
        <div class="card" data-framework="d">
          <img class="front-face" src="assets/card_back.png" />
          <img class="back-face" src="assets/d.png" />
        </div>
      </div>
      <div class="card_wrap">
        <div class="card" data-framework="e">
          <img class="front-face" src="assets/card_back.png" />
          <img class="back-face" src="assets/e.png" />
        </div>
      </div>
      <div class="card_wrap">
        <div class="card" data-framework="e">
          <img class="front-face" src="assets/card_back.png" />
          <img class="back-face" src="assets/e.png" />
        </div>
      </div>
      <div class="card_wrap">
        <div class="card" data-framework="f">
          <img class="front-face" src="assets/card_back.png" />
          <img class="back-face" src="assets/f.png" />
        </div>
      </div>
      <div class="card_wrap">
        <div class="card" data-framework="f">
          <img class="front-face" src="assets/card_back.png" />
          <img class="back-face" src="assets/f.png" />
        </div>
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
  background-color: #adc1df;
  font-family: sans-serif;
}

.title {
  display: block;
  text-align: center;
  padding: 30px 0;
  font-weight: 900;
  font-size: 60px;
}

.game-board {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 800px;
}

.card_wrap {
  margin: 10px;
  perspective: 1000px;
}

.card {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.7s, border 0.4s;
  background-color: #fff;
  border-radius: 9px;
  border: 5px solid transparent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 150px;
  height: 200px;
  box-sizing: border-box;
}

.card img {
  border-radius: 5px;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  object-fit: cover;
}

.card img.back-face {
  transform: rotateY(180deg);
}

.card.matched {
  border-color: #3cb371;
}

.card.unmatched {
  border-color: #dc143c;
  cursor: pointer;
}

.card.open {
  transform: rotateY(180deg);
}

.card.disabled {
  pointer-events: none;
}

@media only screen and (max-width: 600px) {
  .card {
    width: 120px;
    height: 120px;
  }

  .card img {
    height: 120px;
    width: 120px;
  }
}
```

### js

<GoogleAd/>

```js
const cardWraps = document.querySelectorAll(".card_wrap");
const cards = document.querySelectorAll(".card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("open");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  firstCard.classList.add("matched");
  secondCard.classList.add("matched");

  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  firstCard.classList.add("unmatched");
  secondCard.classList.add("unmatched");

  setTimeout(() => {
    firstCard.classList.remove("open");
    secondCard.classList.remove("open");
    firstCard.classList.remove("unmatched");
    secondCard.classList.remove("unmatched");
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cardWraps.forEach((cardWrap) => {
    let randomPos = Math.floor(Math.random() * 12);
    cardWrap.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));

setTimeout(() => {
  cards.forEach((card) => {
    card.classList.add("open");
  });
}, 100);

setTimeout(() => {
  cards.forEach((card) => {
    card.classList.remove("open");
  });
}, 4000);
```
