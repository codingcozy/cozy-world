---
title: "Magic Keyboard"
description: "Magic Keyboard made with html, css, js"
url: "https://making-challenge.netlify.app/19-magic-keyboard/"
coverImage: "/assets/projects/19-magic-keyboard.png"
youtubeUrl: "https://www.youtube.com/watch?v=8d_nqhMAGwY"
date: "2023-08-21"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/19-magic-keyboard.png"
---

### Youtube Link

<a class="youtube" href="https://www.youtube.com/watch?v=8d_nqhMAGwY"><img src="https://img.youtube.com/vi/8d_nqhMAGwY/hqdefault.jpg" width="600" height="300"></a>

### html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Happy Hacking Keyboard</title>
    <link rel="stylesheet" type="text/css" href="./style.css" />
  </head>
  <body>
    <div class="keyboard">
      <button class="key" data-key="`">`</button>
      <button class="key" data-key="1 !">1</button>
      <button class="key" data-key="2 @">2</button>
      <button class="key" data-key="3 #">3</button>
      <button class="key" data-key="4 $">4</button>
      <button class="key" data-key="5 %">5</button>
      <button class="key" data-key="6 ^">6</button>
      <button class="key" data-key="7 &">7</button>
      <button class="key" data-key="8 *">8</button>
      <button class="key" data-key="9 (">9</button>
      <button class="key" data-key="0 )">0</button>
      <button class="key" data-key="- _">-</button>
      <button class="key" data-key="= +">=</button>
      <button class="key backspace" data-key="backspace">
        <i class="fas fa-long-arrow-alt-left"></i>
      </button>
      <button class="key tab" data-key="tab">Tab</button>
      <button class="key" data-key="q">q</button>
      <button class="key" data-key="w">w</button>
      <button class="key" data-key="e">e</button>
      <button class="key" data-key="r">r</button>
      <button class="key" data-key="t">t</button>
      <button class="key" data-key="y">y</button>
      <button class="key" data-key="u">u</button>
      <button class="key" data-key="i">i</button>
      <button class="key" data-key="o">o</button>
      <button class="key" data-key="p">p</button>
      <button class="key" data-key="[">[</button>
      <button class="key" data-key="]">]</button>
      <button class="key" data-key="\">\</button>
      <button class="key caps" data-key="capslock">Caps Lock</button>
      <button class="key" data-key="a">a</button>
      <button class="key" data-key="s">s</button>
      <button class="key" data-key="d">d</button>
      <button class="key" data-key="f">f</button>
      <button class="key" data-key="g">g</button>
      <button class="key" data-key="h">h</button>
      <button class="key" data-key="j">j</button>
      <button class="key" data-key="k">k</button>
      <button class="key" data-key="l">l</button>
      <button class="key" data-key=";">;</button>
      <button class="key" data-key="'">'</button>
      <button class="key enter" data-key="enter">Enter</button>
      <button class="key shift" data-key="shift">Shift</button>
      <button class="key" data-key="z">z</button>
      <button class="key" data-key="x">x</button>
      <button class="key" data-key="c">c</button>
      <button class="key" data-key="v">v</button>
      <button class="key" data-key="b">b</button>
      <button class="key" data-key="n">n</button>
      <button class="key" data-key="m">m</button>
      <button class="key" data-key=",">,</button>
      <button class="key" data-key=".">.</button>
      <button class="key" data-key="/">/</button>
      <button class="key shift" data-key="shift">Shift</button>
      <button class="key" data-key="fn">Fn</button>
      <button class="key" data-key="ctrl">Ctrl</button>
      <button class="key alt" data-key="alt">Alt</button>
      <button class="key" data-key="meta">cmd</button>
      <button class="key space" data-key=" ">Space</button>
      <button class="key alt" data-key="alt">Alt</button>
      <button class="key" data-key="ctrl">Ctrl</button>
      <button class="key arrowleft" data-key="arrowleft">←</button>
      <div class="arrow_wrap">
        <button class="key arrowup" data-key="arrowup">↑</button>
        <button class="key arrowdown" data-key="arrowdown">↓</button>
      </div>
      <button class="key arrowright" data-key="arrowright">→</button>
    </div>

    <script src="./index.js"></script>
  </body>
</html>
```

### css

```css
body {
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
}

.keyboard {
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  gap: 5px;
  max-width: 783px;
  margin: 0 auto;
  padding: 10px;
  grid-auto-rows: 50px;
  transform-style: preserve-3d;
  background-image: linear-gradient();
  background-image: linear-gradient(135deg, #ced0d7, #ced0d7 60%, #bfc0c3);
  border-radius: 15px;
  box-shadow: 0 4 12px rgba(0, 0, 0, 0.4);
}

.key {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  cursor: pointer;
  border: 1px solid #898b90;
  transform-style: preserve-3d;
  transition: background-color 0.2s;
  text-transform: capitalize;
  color: #9f9f9f;
}

.key.pressed {
  background-color: #ff9999;
}

.key.tab {
  grid-column: span 1;
}

.key.enter {
  grid-column: span 2;
}

.key.shift {
  grid-column: span 2;
}

.key.ctrl {
  grid-column: span 1;
}

.key.win {
  grid-column: span 1;
}

.key.alt {
  grid-column: span 1;
}

.key.space {
  grid-column: span 5;
}

.arrow_wrap {
  display: flex;
  flex-direction: column;
  row-gap: 3px;
}

.arrow_wrap .key {
  flex-grow: 1;
}
```

### js

```js
var keyState = {};

document.addEventListener("keydown", function (event) {
  var key = event.key.toLowerCase();
  if (!keyState[key]) {
    keyState[key] = true;
    handleKeyPress(key);
  }
});

document.addEventListener("keyup", function (event) {
  var key = event.key.toLowerCase();
  if (keyState[key]) {
    keyState[key] = false;
    handleKeyRelease(key);
  }
});

function handleKeyPress(key) {
  console.log("Key pressed:'", key, "'");
  let pressedKey;

  if (/[0-9~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(key)) {
    pressedKey = document.querySelector(`button[data-key*="${key}"]`);
  } else {
    pressedKey = document.querySelector(`button[data-key="${key}"]`);
  }

  if (pressedKey) {
    pressedKey.classList.add("pressed");
  }
}

function handleKeyRelease(key) {
  console.log("Key released:", key);

  let releasedKey;
  if (/[0-9~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(key)) {
    releasedKey = document.querySelector(`button[data-key*="${key}"]`);
  } else {
    releasedKey = document.querySelector(`button[data-key="${key}"]`);
  }
  if (releasedKey) {
    releasedKey.classList.remove("pressed");
  }
}
```
