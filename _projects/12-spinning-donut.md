---
title: "Spinning Donut"
description: "Spinning Donut made with html, css, js"
url: "https://making-challenge.netlify.app/12-Spinning_Donut/"
coverImage: "/assets/projects/12_spinning_donut-thumbnail.png"
youtubeUrl: "https://www.youtube.com/watch?v=4jBGzkPwiOk"
date: "2023-06-07"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/12_spinning_donut-thumbnail.png"
---

### Youtube Link

<a class="youtube" href="https://www.youtube.com/watch?v=4jBGzkPwiOk"><img src="https://img.youtube.com/vi/4jBGzkPwiOk/hqdefault.jpg" width="600" height="300"></a>

### html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Spinning Donut</title>
  </head>
  <body>
    <pre id="donut"></pre>
    <script src="./index.js"></script>
  </body>
</html>
```

### css

```css
body {
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

pre {
  color: #fff;
}
```

### js

```js
let pretag = document.getElementById("donut");

let A = 1,
  B = 1;

let asciiframe = function () {
  let b = [];
  let z = [];
  A += 0.03;
  B += 0.03;

  let cA = Math.cos(A),
    sA = Math.sin(A),
    cB = Math.cos(B),
    sB = Math.sin(B);

  for (let k = 0; k < 1760; k++) {
    b[k] = k % 80 == 79 ? "\n" : " ";
    z[k] = 0;
  }

  for (let j = 0; j < 6.28; j += 0.07) {
    let ct = Math.cos(j),
      st = Math.sin(j);

    for (i = 0; i < 6.28; i += 0.02) {
      let sp = Math.sin(i),
        cp = Math.cos(i),
        h = ct + 2,
        D = 1 / (sp * h * sA + st * cA + 5);
      t = sp * h * cA - st * sA;

      let x = 0 | (40 + 30 * D * (cp * h * cB - t * sB)),
        y = 0 | (12 + 15 * D * (cp * h * sB + t * cB)),
        o = x + 80 * y,
        N = 0 | (8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));

      if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
        z[o] = D;
        b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
      }
    }
  }

  pretag.innerHTML = b.join("");
};

asciiframe();

setInterval(asciiframe, 50);
```
