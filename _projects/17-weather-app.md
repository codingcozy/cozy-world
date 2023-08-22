---
title: "Weather app"
description: "Weather app made with html, css, js"
url: "https://making-challenge.netlify.app/17-weather_app/"
coverImage: "/assets/projects/17_weather_app.png"
youtubeUrl: "https://www.youtube.com/watch?v=R63iSPsDMHc"
date: "2023-07-23"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/17_weather_app.png"
---

### Youtube Link

<a class="youtube" target="_blank" target="_blank" href="https://www.youtube.com/watch?v=R63iSPsDMHc"><img src="https://img.youtube.com/vi/R63iSPsDMHc/hqdefault.jpg" width="600" height="300" /></a>

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
    <title>Weather app</title>
  </head>
  <body>
    <div class="container" id="weatherWrap">
      <div class="weather_card">
        <div class="input_wrap">
          <input type="text" id="cityInput" placeholder="Where Are You?" />
          <button type="button">
            <img src="./assets/button_search.png" alt="search" width="38" />
          </button>
        </div>
        <div id="weatherInfo">
          <img class="weather_icon" src="./assets/clear.png" alt="" width="150" />
          <span class="temp">29</span>
          <span class="description">Clouds</span>
          <div class="sub_info">
            <span class="humidity">29</span>
            <span class="wind">11</span>
          </div>
        </div>
        <div class="empty">No data yet.</div>
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
  padding: 0;
  margin: 0;
  height: 100vh;
  color: #222;
}

.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.weather_card {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  padding: 40px;
  width: 400px;
  backdrop-filter: blur(30px);
  min-height: 500px;
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
}

.input_wrap {
  display: flex;
  border-bottom: 1px solid #333;
}

input[type="text"] {
  border: 0;
  padding: 10px;
  flex-grow: 1;
  font-size: 25px;
  background-color: transparent;
  outline: none;
}

button {
  border: none;
  cursor: pointer;
  background: transparent;
  padding: 0;
}

.weather_icon {
  display: block;
  width: 200px;
  margin: 20px auto 0;
}

.temp {
  display: flex;
  font-size: 50px;
  text-align: center;
  justify-content: center;
  column-gap: 4px;
  font-weight: 900;
}

.unit {
  width: 0;
  font-size: 20px;
}

.description {
  display: block;
  text-align: center;
  font-size: 25px;
  margin-top: 6px;
  text-transform: capitalize;
  font-weight: 500;
}

.sub_info {
  display: flex;
  justify-content: space-between;
  padding: 40px 20px 0;
}

.humidity {
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 20px;
}

.humidity::before {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  background: no-repeat url("./assets/humidity.png") 0 0 / 100%;
}

.wind {
  display: flex;
  align-items: center;
  column-gap: 8px;
  font-size: 20px;
}

.wind::before {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  background: no-repeat url("./assets/wind.png") 0 0 / 100%;
}

.empty {
  padding: 30px 10px;
  border-radius: 10px;
  background-color: #eee;
  text-align: center;
  margin-top: 150px;
  font-size: 22px;
  line-height: 30px;
  color: #bbb;
  white-space: pre-wrap;
}

#weatherInfo {
  display: none;
}

#weatherWrap {
  transition: background 1s ease-in-out;
  background: no-repeat url("./assets/weather_clear-2.jpg") center center / cover;
}
```

### js

<GoogleAd/>

```js
const input = document.getElementById("cityInput");
const apiKey = "YOUR_API_KEY";

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
});

function getWeather() {
  const city = input.value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        const weather = String(data.weather[0].main).toLowerCase();

        document.querySelector(".empty").style.display = "none";
        document.getElementById("weatherInfo").style.display = "block";

        document.getElementById("weatherWrap").style.backgroundImage = `url('./assets/weather_${weather}-${Math.floor(Math.random() * 3) + 1}.jpg')`;

        const img = document.querySelector(".weather_icon");
        img.src = `./assets/${weather}.png`;

        const temp = document.querySelector(".temp");
        temp.innerHTML = Math.floor(data.main.temp) + "<span class='unit'>°C</span>";

        const humidity = document.querySelector(".humidity");
        humidity.innerHTML = Math.floor(data.main.humidity) + "%";

        const wind = document.querySelector(".wind");
        wind.innerHTML = Math.floor(data.wind.speed) + "km/h";

        const description = document.querySelector(".description");
        description.innerHTML = data.weather[0].description;
      } else {
        document.querySelector(".empty").style.display = "block";
        document.getElementById("weatherInfo").style.display = "none";
        document.querySelector(".empty").innerHTML = `Oops, something went wrong\n Please try again`;
      }
    });
}
```
