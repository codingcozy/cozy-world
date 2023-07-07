---
title: "Space Simulation"
description: "Space Simulation made with html, css, js"
url: "https://making-challenge.netlify.app/14-Space_simulation/"
coverImage: "/assets/projects/14_space_simulation-thumbnail.png"
youtubeUrl: "https://www.youtube.com/watch?v=_QVOWzqdn3A"
date: "2023-06-26"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/14_space_simulation-thumbnail.png"
---

### Youtube Link

<a class="youtube" href="https://www.youtube.com/watch?v=_QVOWzqdn3A"><img src="https://img.youtube.com/vi/_QVOWzqdn3A/hqdefault.jpg" width="600" height="300"></a>

### html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Space Simulation</title>
  </head>
  <body>
    <div id="space"></div>
    <div id="sun"></div>
    <div id="mercury" class="planet"></div>
    <div id="venus" class="planet"></div>
    <div id="earth" class="planet"></div>
    <div id="mars" class="planet"></div>
    <div id="jupiter" class="planet"></div>
    <div id="saturn" class="planet"></div>
    <div id="uranus" class="planet"></div>
    <div id="neptune" class="planet"></div>
    <div id="moon" class="planet"></div>
    <script src="./index.js"></script>
  </body>
</html>
```

### css

```css
body {
  background-color: #000;
  overflow: hidden;
}

#space {
  position: fixed;
  top: 50%;
  left: 50%;
  height: 1px;
  width: 1px;
  background-color: #fff;
  border-radius: 50%;
  animation: rotate 400s infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

#sun {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: no-repeat url("./assets/sun.png") center/ cover;
  box-shadow: 0 0 50px 3px orange, 0 0 700px 3px red;
}

.planet {
  position: absolute;
  border-radius: 50%;
}

#mercury {
  background-color: grey;
  background: no-repeat url("./assets/mercury.png") center/ cover;
  width: 50px;
  height: 50px;
  box-shadow: 0 0 50px 1px #7c2d0f, 0 0 700px 1px #d86721;
}

#venus {
  background: no-repeat url("./assets/venus.png") center / cover;
  width: 75px;
  height: 75px;
  box-shadow: 0 0 40px 1px #fffcd7, 0 0 700px 1px #fffcd7;
}

#earth {
  background: no-repeat url("./assets/earth.png") center/ cover;
  width: 100px;
  height: 100px;
  box-shadow: 0 0 50px 1px #0c2534, 0 0 200px 1px #9fcadd;
}

#mars {
  background: no-repeat url("./assets/mars.png") center/ cover;
  width: 120px;
  height: 120px;
  box-shadow: 0 0 50px 1px #6c2615, 0 0 500px 1px #fabd5e;
}

#jupiter {
  background: no-repeat url("./assets/jupiter.png") center / cover;
  width: 150px;
  height: 150px;
  box-shadow: 0 0 50px 1px #93532b, 0 0 500px 1px #f0e3cd;
}

#saturn {
  background: transparent no-repeat url("./assets/saturn.png") center / cover;
  width: 250px;
  height: 250px;
}

#uranus {
  background: no-repeat url("./assets/uranus.png") center / cover;
  width: 140px;
  height: 140px;
  box-shadow: 0 0 50px 1px #294a4e, 0 0 500px 1px #9ec0c2;
}

#neptune {
  background: no-repeat url("./assets/neptune.png") center / cover;
  width: 130px;
  height: 130px;
  box-shadow: 0 0 50px 1px #0d2d56, 0 0 100px 1px #3b92d1;
}

#moon {
  background: no-repeat url("./assets/moon.png") center/ cover;
  width: 30px;
  height: 30px;
  box-shadow: 0 0 50px 1px #34363f, 0 0 100px 1px #e1e5f0;
}
```

### js

```js
const planets = [
  { id: "mercury", radius: 50, orbitRadius: 200, speed: 0.001 },
  { id: "venus", radius: 75, orbitRadius: 300, speed: 0.0008 },
  { id: "earth", radius: 100, orbitRadius: 400, speed: 0.0006 },
  { id: "mars", radius: 120, orbitRadius: 500, speed: 0.0005 },
  { id: "jupiter", radius: 180, orbitRadius: 600, speed: 0.0002 },
  { id: "saturn", radius: 200, orbitRadius: 700, speed: 0.00015 },
  { id: "uranus", radius: 160, orbitRadius: 800, speed: 0.0001 },
  { id: "neptune", radius: 150, orbitRadius: 900, speed: 0.00009 },
];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const star_count = 1000;

let result = "";
for (let i = 0; i < star_count; i++) {
  result += `${randomNumber(-100, 100)}vw ${randomNumber(-100, 100)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`;
}

const space = document.getElementById("space");

space.style.boxShadow = result.substring(0, result.length - 1);

const moon = {
  id: "moon",
  radius: 30,
  orbitRadius: 150,
  speed: 0.001,
};

function movePlanets() {
  const currentDate = new Date();
  const time = currentDate.getTime();

  planets.forEach((planet) => {
    const element = document.getElementById(planet.id);
    const angle = planet.speed * time;

    const x = Math.cos(angle) * planet.orbitRadius;
    const y = Math.sin(angle) * planet.orbitRadius;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    element.style.left = centerX + x - planet.radius + "px";
    element.style.top = centerY + y - planet.radius + "px";
  });

  const moonElement = document.getElementById(moon.id);
  const moonAngle = moon.speed * time;

  const moonX = Math.cos(moonAngle) * moon.orbitRadius;
  const moonY = Math.sin(moonAngle) * moon.orbitRadius;

  const earthElement = document.getElementById("earth");
  const earthX = parseFloat(earthElement.style.left) + earthElement.clientWidth / 2;
  const earthY = parseFloat(earthElement.style.top) + earthElement.clientHeight / 2;

  moonElement.style.left = earthX + moonX - moon.radius + "px";
  moonElement.style.top = earthY + moonY - moon.radius + "px";
}

function animate() {
  movePlanets();
  requestAnimationFrame(animate);
}

animate();
```
