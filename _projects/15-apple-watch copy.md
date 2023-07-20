---
title: "Apple Watch"
description: "Apple Watch made with html, css, js"
url: "https://making-challenge.netlify.app/15-Clock/"
coverImage: "/assets/projects/15_apple_watch-thumbnail.png"
youtubeUrl: "https://www.youtube.com/watch?v=cscrCn-EjHA"
date: "2023-07-08"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/15_apple_watch-thumbnail.png"
---

### Youtube Link

<a class="youtube" href="https://www.youtube.com/watch?v=cscrCn-EjHA"><img src="https://img.youtube.com/vi/cscrCn-EjHA/hqdefault.jpg" width="600" height="300"></a>

### html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <script src="https://unpkg.com/@egjs/flicking@4.0.0-beta.4/dist/flicking.pkgd.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/@egjs/flicking@4.0.0/dist/flicking.css" />
    <title>Apple Watch</title>
  </head>
  <body>
    <div class="wrap">
      <h1 class="logo">
        <img src="./assets/watch_logo.png" alt="Apple Watch" width="300" />
      </h1>
      <div class="watch">
        <div class="content">
          <div id="my-flicking" class="flicking-viewport">
            <div class="flicking-camera">
              <div class="panel">
                <div class="watch_face -mono">
                  <div class="hour-hand"></div>
                  <div class="minute-hand"></div>
                  <div class="second-hand"></div>
                  <div class="center-dot"></div>
                  <div class="hour-number"></div>
                  <div class="minute-number"></div>
                </div>
              </div>
              <div class="panel">
                <div class="watch_face -metro">
                  <div class="hour-hand"></div>
                  <div class="minute-hand"></div>
                  <div class="second-hand"></div>
                  <div class="center-dot"></div>
                  <div class="hour-number"></div>
                  <div class="minute-number"></div>
                </div>
              </div>
              <div class="panel">
                <div class="watch_face -face">
                  <div class="hour-hand"></div>
                  <div class="minute-hand"></div>
                  <div class="second-hand"></div>
                  <div class="center-dot"></div>
                  <div class="hour-number"></div>
                  <div class="minute-number"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="./index.js"></script>
  </body>
</html>
```

### css

```css
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #fbfbfd;
  padding: 0;
  margin: 0;
}

.logo {
  text-align: center;
  margin-bottom: 40px;
  padding-right: 20px;
}

.watch {
  background: no-repeat url("./assets/apple-watch.png") 0 0 / cover;
  width: 435px;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 69px 0 50px;
  box-sizing: border-box;
  transform: scale(0.8);
}

.content {
  width: 100%;
  height: 384px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border-radius: 15px;
  overflow: hidden;
}

.flicking-viewport {
  height: 95%;
}

.panel {
  width: 100%;
}

.watch_face {
  width: 308px;
  height: 100%;
  position: relative;
}

.hour-hand,
.minute-hand,
.second-hand {
  background-color: #000;
  position: absolute;
  transform-origin: bottom center;
  transition-timing-function: steps(1);
}

.hour-hand {
  width: 6px;
  height: 70px;
  top: calc(50% - 62px);
  left: 50%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.minute-hand {
  width: 4px;
  height: 90px;
  top: calc(50% - 85px);
  left: 50%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.second-hand {
  width: 2px;
  height: 95px;
  top: calc(50% - 90px);
  left: 50%;
  background-color: #f00;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

.center-dot {
  width: 12px;
  height: 12px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -4px;
  z-index: 10;
}

.watch_face.-mono {
  background: no-repeat url("./assets/watch-face-mono.png") center / 100% 100%;
}

.watch_face.-mono .hour-hand,
.watch_face.-mono .minute-hand,
.watch_face.-mono .center-dot {
  background-color: #fff;
  border: 1px solid #000;
}

.watch_face.-mono .hour-number,
.watch_face.-mono .minute-number {
  display: none;
}

.watch_face.-metro {
  background: no-repeat url("./assets/watch-face-metro.png") center / 100% 100%;
}

.watch_face.-metro .hour-hand,
.watch_face.-metro .minute-hand,
.watch_face.-metro .center-dot {
  background-color: #fff;
  border: 1px solid #000;
}

.watch_face.-metro .hour-number,
.watch_face.-metro .minute-number {
  display: none;
}

.watch_face.-face {
  background: no-repeat url("./assets/watch-face-face.png") center / 100% 100%;
}

.watch_face.-face .hour-hand,
.watch_face.-face .minute-hand,
.watch_face.-face .center-dot,
.watch_face.-face .second-hand {
  display: none;
}

.watch_face.-face .hour-number,
.watch_face.-face .minute-number {
  position: absolute;
  top: 42%;
  font-size: 50px;
  color: #484343;
  width: 40px;
}

.watch_face.-face .hour-number {
  left: 44%;
  text-align: right;
}

.watch_face.-face .minute-number {
  left: 65%;
  text-align: left;
}
```

### js

```js
function rotateClockHands() {
  let now = new Date();
  let options = { timeZone: "Asia/Seoul" };
  let timeString = now.toLocaleString("en-US", options);
  let timeComponents = timeString.split(", ")[1].split(":");
  let seconds = parseInt(timeComponents[2]) * 6;
  let minutes = parseInt(timeComponents[1]) * 6 + seconds / 60;
  let hours = parseInt(timeComponents[0]) * 30 + minutes / 12;

  const secondsElList = document.querySelectorAll(".second-hand");
  secondsElList.forEach((secondsEl) => {
    secondsEl.style.transform = "rotate(" + seconds + "deg)";
  });

  const minutesElList = document.querySelectorAll(".minute-hand");
  minutesElList.forEach((minutesEl) => {
    minutesEl.style.transform = "rotate(" + minutes + "deg)";
  });

  const hoursElList = document.querySelectorAll(".hour-hand");
  hoursElList.forEach((hoursEl) => {
    hoursEl.style.transform = "rotate(" + hours + "deg)";
  });

  const hoursNumberElList = document.querySelectorAll(".hour-number");
  hoursNumberElList.forEach((hoursNumberEl) => {
    hoursNumberEl.innerText = timeComponents[0];
  });

  const minutesNumberElList = document.querySelectorAll(".minute-number");
  minutesNumberElList.forEach((minutesNumberEl) => {
    minutesNumberEl.innerText = timeComponents[1];
  });
}

rotateClockHands();

setInterval(rotateClockHands, 1000);

const flicking = new Flicking("#my-flicking", {
  align: "prev",
});
```
