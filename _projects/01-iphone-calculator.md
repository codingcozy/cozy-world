---
title: "IPhone Calculator"
description: "IOS Calculator made with html, css, js"
url: "https://making-challenge.netlify.app/1-iphone%20calculator/"
youtubeUrl: "https://www.youtube.com/watch?v=Pa5kbjgyWDk"
coverImage: "/assets/projects/01_iphone_caculator-thumbnail.png"
date: "2023-03-18"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/01_iphone_caculator-thumbnail.png"
---

## Youtube Link

<a class="youtube" target="_blank" href="https://www.youtube.com/watch?v=Pa5kbjgyWDk"><img src="https://img.youtube.com/vi/Pa5kbjgyWDk/hqdefault.jpg" width="600" height="300" /></a>

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
    <title>IPhone Calculator</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="iphone">
      <div class="calculator_wrap">
        <div class="result_text_area"><span class="result_text">0</span></div>
        <div class="button_area">
          <button id="clear" class="oper_button -option">AC</button>
          <button id="toggle" class="oper_button -option">+/-</button>
          <button id="%" class="oper_button -option">%</button>
          <button id="divide" class="oper_button -operator">÷</button>
          <button id="7" class="oper_button">7</button>
          <button id="8" class="oper_button">8</button>
          <button id="9" class="oper_button">9</button>
          <button id="x" class="oper_button -operator">x</button>
          <button id="4" class="oper_button">4</button>
          <button id="5" class="oper_button">5</button>
          <button id="6" class="oper_button">6</button>
          <button id="-" class="oper_button -operator">-</button>
          <button id="1" class="oper_button">1</button>
          <button id="2" class="oper_button">2</button>
          <button id="3" class="oper_button">3</button>
          <button id="+" class="oper_button -operator">+</button>
          <button id="0" class="oper_button -colspan">0</button>
          <button id="." class="oper_button">.</button>
          <button id="=" class="oper_button -operator">=</button>
        </div>
      </div>
    </div>

    <script src="./index.js"></script>
  </body>
</html>
```

## css

```css
body {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url("./assets/background.jpg") 0 0 / cover;
}

button {
  border: 0;
  padding: 0;
  margin: 0;
}

.iphone {
  width: 375px;
  height: 667px;
  padding: 20px;
  box-sizing: border-box;
  background: url("./assets/iphone.png") 0 0 / 100% 100%;
}

.calculator_wrap {
  background-color: #000;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 26px;
}

.result_text_area {
  padding: 0 32px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex: 1;
}

.result_text {
  display: block;
  color: #fff;
  font-size: 60px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.button_area {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 10px 16px 40px;
}

.oper_button {
  border-radius: 50%;
  background-color: #333;
  aspect-ratio: 1/1;
  font-size: 38px;
  color: #fff;
}

.oper_button.-option {
  background-color: #a5a5a5;
  color: #000;
}

.oper_button.-operator {
  background-color: #ff9f0a;
}

.oper_button.-colspan {
  grid-column-start: 1;
  grid-column-end: 3;
  aspect-ratio: 2 /1;
  border-radius: 100px;
  text-align: left;
  padding-left: 25px;
}
```

## js

```js
const operButtons = document.querySelectorAll(".oper_button");
let beforeNumber = null,
  currentNumber = "",
  currentOperator;
operButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const display = document.querySelector(".result_text");
    const id = e.target.id;
    console.log(id);
    if (id === "=") {
      if (currentOperator && beforeNumber) {
        console.log(currentOperator, beforeNumber, display.innerText);
        if (currentOperator === "x") {
          display.innerText = +beforeNumber * +display.innerText;
        } else if (currentOperator === "+") {
          display.innerText = +beforeNumber + +display.innerText;
        } else if (currentOperator === "divide") {
          display.innerText = +beforeNumber / +display.innerText;
        } else if (currentOperator === "-") {
          display.innerText = +beforeNumber - +display.innerText;
        }
      }
      currentOperator = null;
      currentNumber = display.innerText;
      beforeNumber = null;
    } else if (id === "clear") {
      display.innerText = 0;
      currentNumber = "";
      beforeNumber = null;
      currentOperator = null;
    } else if (id === "x" || id === "-" || id === "+" || id === "divide") {
      currentOperator = id;
      beforeNumber = display.innerText;
      currentNumber = "";
      console.log(beforeNumber);
    } else if (id === "toggle") {
      currentNumber = currentNumber * -1;
      display.innerText = currentNumber;
    } else if (id === "%") {
      currentNumber = currentNumber * 0.01;
      display.innerText = currentNumber;
    } else if (id === ".") {
      if (!String(display.innerText).includes(".")) {
        currentNumber = currentNumber + ".";
        display.innerText = currentNumber;
      }
    } else {
      // number
      console.log(currentNumber, id);
      currentNumber = currentNumber + id;
      display.innerText = currentNumber;
    }
  });
});
```
