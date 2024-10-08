---
title: "Watermelon Game"
description: "Watermelon Game made with html, css, js"
coverImage: "/assets/projects/30-watermelon-game.png"
youtubeUrl: "https://www.youtube.com/watch?v=qeSN5tHy93U"
date: "2023-12-04"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/30-watermelon-game.png"
---

### Youtube Link

<a class="youtube" target="_blank" href="https://www.youtube.com/watch?v=qeSN5tHy93U"><img src="https://img.youtube.com/vi/qeSN5tHy93U/hqdefault.jpg" width="600" height="300" /></a>

<GoogleAd />

### html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Watermelon Game</title>
    <style>
      body {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1>Watermelon Game</h1>
    <script type="module" src="./index.js"></script>
  </body>
</html>
```

<GoogleAd />

### js

<GoogleAd/>

```js
import { Bodies, Body, Engine, Events, Render, Runner, World } from "matter-js";

const FRUITS = [
  {
    name: "base/00_cherry",
    radius: 33 / 2,
  },
  {
    name: "base/01_strawberry",
    radius: 48 / 2,
  },
  {
    name: "base/02_grape",
    radius: 61 / 2,
  },
  {
    name: "base/03_gyool",
    radius: 69 / 2,
  },
  {
    name: "base/04_orange",
    radius: 89 / 2,
  },
  {
    name: "base/05_apple",
    radius: 114 / 2,
  },
  {
    name: "base/06_pear",
    radius: 129 / 2,
  },
  {
    name: "base/07_peach",
    radius: 156 / 2,
  },
  {
    name: "base/08_pineapple",
    radius: 177 / 2,
  },
  {
    name: "base/09_melon",
    radius: 220 / 2,
  },
  {
    name: "base/10_watermelon",
    radius: 259 / 2,
  },
];

const engine = Engine.create();
const render = Render.create({
  engine,
  element: document.body,
  options: {
    wireframes: false,
    background: "#F7F4C8",
    width: 620,
    height: 850,
  },
});

const world = engine.world;

const leftWall = Bodies.rectangle(15, 395, 30, 790, {
  isStatic: true,
  render: { fillStyle: "#E6B143" },
});

const rightWall = Bodies.rectangle(605, 395, 30, 790, {
  isStatic: true,
  render: { fillStyle: "#E6B143" },
});

const ground = Bodies.rectangle(310, 820, 620, 60, {
  isStatic: true,
  render: { fillStyle: "#E6B143" },
});

const topLine = Bodies.rectangle(310, 150, 620, 2, {
  name: "topLine",
  isStatic: true,
  isSensor: true,
  render: { fillStyle: "#E6B143" },
});

World.add(world, [leftWall, rightWall, ground, topLine]);

Render.run(render);
Runner.run(engine);

let currentBody = null;
let currentFruit = null;
let disableAction = false;
let interval = null;

function addFruit() {
  const index = Math.floor(Math.random() * 5);
  const fruit = FRUITS[index];

  const body = Bodies.circle(300, 50, fruit.radius, {
    index: index,
    isSleeping: true,
    render: {
      sprite: {
        texture: `${fruit.name}.png`,
      },
    },
    restitution: 0.2,
  });

  currentBody = body;
  currentFruit = fruit;

  World.add(world, body);
}

window.onkeydown = (event) => {
  if (disableAction) {
    return;
  }

  switch (event.code) {
    case "KeyJ":
      if (interval) return;

      interval = setInterval(() => {
        if (currentBody.position.x - currentFruit.radius > 30)
          Body.setPosition(currentBody, {
            x: currentBody.position.x - 1,
            y: currentBody.position.y,
          });
      }, 5);
      break;

    case "KeyL":
      if (interval) return;

      interval = setInterval(() => {
        if (currentBody.position.x + currentFruit.radius < 590)
          Body.setPosition(currentBody, {
            x: currentBody.position.x + 1,
            y: currentBody.position.y,
          });
      }, 5);
      break;

    case "KeyK":
      currentBody.isSleeping = false;
      disableAction = true;
      setTimeout(() => {
        addFruit();
        disableAction = false;
      }, 1000);
      break;
  }
};

window.onkeyup = (event) => {
  switch (event.code) {
    case "KeyJ":
    case "KeyL":
      clearInterval(interval);
      interval = null;
  }
};

Events.on(engine, "collisionStart", (event) => {
  event.pairs.forEach((collision) => {
    if (collision.bodyA.index === collision.bodyB.index) {
      const index = collision.bodyA.index;

      if (index === FRUITS.length - 1) {
        return;
      }

      World.remove(world, [collision.bodyA, collision.bodyB]);

      const newFruit = FRUITS[index + 1];

      const newBody = Bodies.circle(collision.collision.supports[0].x, collision.collision.supports[0].y, newFruit.radius, {
        render: {
          sprite: {
            texture: `${newFruit.name}.png`,
          },
        },
        index: index + 1,
      });

      World.add(world, newBody);
    }

    if (!disableAction && (collision.bodyA.name === "topLine" || collision.bodyB.name === "topLine")) {
      alert("Game over");
    }
  });
});

addFruit();
```
