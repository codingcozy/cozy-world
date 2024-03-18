---
title: "Date Picker"
description: "Date Picker made with html, css, js"
coverImage: "/assets/projects/34-date-picker.png"
youtubeUrl: "https://www.youtube.com/watch?v=UjZwnGp-jbU"
date: "2024-03-17"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/34-date-picker.png"
---

### Youtube Link

<a class="youtube" target="_blank" href="https://www.youtube.com/watch?v=UjZwnGp-jbU"><img src="https://img.youtube.com/vi/UjZwnGp-jbU/hqdefault.jpg" width="600" height="300" /></a>

<GoogleAd />

### html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>date picker</title>
  </head>
  <body>
    <div class="calendar">
      <div class="day" data-day="1"><span class="number">1</span></div>
      <div class="day" data-day="2"><span class="number">2</span></div>
      <div class="day" data-day="3"><span class="number">3</span></div>
      <div class="day" data-day="4"><span class="number">4</span></div>
      <div class="day" data-day="5"><span class="number">5</span></div>
      <div class="day" data-day="6"><span class="number">6</span></div>
      <div class="day" data-day="7"><span class="number">7</span></div>
      <div class="day" data-day="8"><span class="number">8</span></div>
      <div class="day" data-day="9"><span class="number">9</span></div>
      <div class="day" data-day="10"><span class="number">10</span></div>
      <div class="day" data-day="11"><span class="number">11</span></div>
      <div class="day" data-day="12"><span class="number">12</span></div>
      <div class="day" data-day="13" data-selected="start"><span class="number">13</span></div>
      <div class="day" data-day="14"><span class="number">14</span></div>
      <div class="day" data-day="15"><span class="number">15</span></div>
      <div class="day" data-day="16"><span class="number">16</span></div>
      <div class="day" data-day="17"><span class="number">17</span></div>
      <div class="day" data-day="18"><span class="number">18</span></div>
      <div class="day" data-day="19"><span class="number">19</span></div>
      <div class="day" data-day="20"><span class="number">20</span></div>
      <div class="day" data-day="21"><span class="number">21</span></div>
      <div class="day" data-day="22"><span class="number">22</span></div>
      <div class="day" data-day="23" data-selected="end"><span class="number">23</span></div>
      <div class="day" data-day="24"><span class="number">24</span></div>
      <div class="day" data-day="25"><span class="number">25</span></div>
      <div class="day" data-day="26"><span class="number">26</span></div>
      <div class="day" data-day="27"><span class="number">27</span></div>
      <div class="day" data-day="28"><span class="number">28</span></div>
      <div class="day" data-day="29"><span class="number">29</span></div>
      <div class="day" data-day="30"><span class="number">30</span></div>
      <div class="day" data-day="31"><span class="number">31</span></div>
    </div>
    <script src="./index.js"></script>
  </body>
</html>
```

<GoogleAd />

### css

```css
*,
*::before,
*::after {
  position: relative;
  box-sizing: border-box;
}

html {
  height: 100%;
  display: flex;
  background: #eee;
}

body {
  margin: auto;
}

:root {
  --color-primary: #00aef2;
}

.calendar {
  font-size: 3vw;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 0.25em 0;
  margin: auto;
  padding: 1em;
  background: #fff;
  box-shadow: 0 1em 2em rgba(0, 0, 0, 0.25);
  border-radius: 0.5em;
  user-select: none;
}

.day:first-child {
  grid-column-start: 4;
}

.day {
  padding: 0.5em;
  text-align: center;
}
.day::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.day[data-selected]::before {
  border-radius: 0.5em;
}
.day[data-selected="start"]::before {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.day[data-selected],
.day[data-selected] ~ .day {
  color: white;
}
.day[data-selected]::before,
.day[data-selected] ~ .day::before {
  background-color: var(--color-primary);
}
.day[data-selected="start"] ~ .day:not([data-selected="end"])::before {
  opacity: 0.5;
}
.day[data-selected="end"][data-selected="end"]::before {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.day[data-selected="end"] ~ .day {
  color: inherit;
}
.day[data-selected="end"] ~ .day::before {
  background-color: transparent;
}
```

### js

<GoogleAd/>

```js
const data = {
  firstDate: null,
  secondDate: null,
};

const machine = {
  initial: "idle",
  states: {
    idle: {
      on: {
        pointerdown: (data, event) => {
          data.firstDate = +event.currentTarget.dataset.day;
          data.secondDate = null;
          return "dragging";
        },
      },
    },
    dragging: {
      on: {
        pointerover: (data, event) => {
          data.secondDate = +event.currentTarget.dataset.day;

          return "dragging";
        },
        pointerup: "idle",
        pointercancel: "idle",
      },
    },
  },
};

// idle
let currentState = machine.initial;

function send(event) {
  const transition = machine.states[currentState].on[event.type];

  if (typeof transition === "function") {
    currentState = transition(data, event);
    updateDOM();
  } else if (transition) {
    currentState = transition;
    updateDOM();
  }
}

const allDayEls = document.querySelectorAll("[data-day]");

allDayEls.forEach((dayEl) => {
  dayEl.addEventListener("pointerdown", send);
  dayEl.addEventListener("pointerover", send);
});

document.body.addEventListener("pointerup", send);

function updateDOM() {
  document.querySelectorAll("[data-selected]").forEach((el) => {
    delete el.dataset.selected;
  });

  const startDate = Math.min(data.firstDate, data.secondDate);
  const endDate = Math.max(data.firstDate, data.secondDate);

  if (startDate) {
    const startDateEl = document.querySelector(`[data-day="${startDate}"]`);
    startDateEl.dataset.selected = "start";
  }

  if (endDate) {
    const endDateEl = document.querySelector(`[data-day="${endDate}"]`);
    endDateEl.dataset.selected = "end";
  }
}
```
