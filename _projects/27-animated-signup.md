---
title: "Animated Sign up"
description: "Animated Sign up made with html, css, js"
url: "https://making-challenge.netlify.app/27-animated-signup/"
coverImage: "/assets/projects/27-animated-signup.png"
youtubeUrl: "https://www.youtube.com/watch?v=LhzO9xEMPJM"
date: "2023-10-29"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/27-animated-signup.png"
---

### Youtube Link

<a class="youtube" target="_blank" href="https://www.youtube.com/watch?v=LhzO9xEMPJM"><img src="https://img.youtube.com/vi/LhzO9xEMPJM/hqdefault.jpg" width="600" height="300" /></a>

<GoogleAd />

### html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>animated sign up</title>
  </head>
  <body>
    <div class="iphone">
      <div class="inner">
        <div class="page onboarding" id="onboarding">
          <div class="banner">
            <span class="logo">
              <img src="./assets/logo.png" alt="" width="50" height="50" />
            </span>
          </div>
          <div class="content">
            <h1 class="title">Cozy Coding</h1>
            <p class="desc">ASMR Programming with HTML, CSS and JS.</p>
            <a href="#" class="start" id="start">Get Started for Free</a>
          </div>
        </div>
        <div class="page signup" id="signup">
          <h1 class="logo"><img src="./assets/logo.png" alt="" width="35" height="35" />Cozy Coding</h1>
          <p class="desc">Let's Code with me</p>
          <div class="form">
            <div class="form_item">
              <label for="email" class="label">email address</label>
              <div class="input_wrap">
                <input type="text" id="email" class="input" placeholder="email address" />
              </div>
            </div>
            <div class="form_item">
              <label for="password" class="label">Choose a password</label>
              <div class="input_wrap">
                <input type="password" id="password" class="input" placeholder="min. 8 characters" />
                <button type="button" class="show" id="show">
                  <!-- svg -->
                  <span class="blind">show</span>
                </button>
              </div>
            </div>
            <button type="button" class="btn continue" id="continue" disabled>Continue</button>
            <div class="divide">or</div>
            <a href="#" class="btn -google">Sign up with Google</a>
            <a href="#" class="btn -apple">Sign up with Apple</a>
          </div>
        </div>
      </div>
    </div>
    <script src="./index.js"></script>
  </body>
</html>
```

<GoogleAd />

### css

<GoogleAd />

```css
:root {
  --text-color: #212121;
  --theme-color: #111b30;
  --point-color: #a6fc84;
  --disabled-color: #f0f2f6;
}

* {
  margin: 0;
  padding: 0;
}

.blind {
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  user-select: none;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: no-repeat url("./assets/background.jpeg") 0 0 / cover;
  color: var(--text-color);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

button {
  cursor: pointer;
}

.iphone {
  position: relative;
  width: 375px;
  height: 667px;
  padding: 20px;
  box-sizing: border-box;
  background: no-repeat url("./assets/iphone.png") 0 0 / 100% 100%;
}

.iphone::before {
  content: "";
  position: absolute;
  top: 30px;
  left: 50%;
  width: 68px;
  height: 20px;
  background: no-repeat url("./assets/dynamic-island.png") 0 0 / cover;
  z-index: 100;
  transform: translateX(-50%);
}

.inner {
  position: relative;
  height: 100%;
  background-color: #fff;
  border-radius: 33px;
  overflow: hidden;
  box-sizing: border-box;
}

.page {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 33px;
  overflow: hidden;
  box-sizing: border-box;
}

.onboarding {
}

.banner {
  position: relative;
  height: 45%;
  background-color: var(--theme-color);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
}

.banner .logo {
  position: absolute;
  bottom: -40px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f5f6f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.banner .logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  padding: 60px 20px;
}

.title {
  font-size: 28px;
}

.onboarding .desc {
  font-size: 13px;
  margin-top: 25px;
}

.start {
  margin-top: auto;
  padding: 20px 30px;
  background-color: var(--point-color);
  color: var(--text-color);
  text-decoration: none;
  border-radius: 100px;
}

.onboarding.fadeout {
  animation: fadeout 0.3s 0.8s ease-in-out forwards;
}

.onboarding.fadeout .logo {
  animation: scale0 0.3s ease-in-out forwards;
}

.onboarding.fadeout .banner {
  animation: slideup 0.5s 0.3s ease-in-out forwards;
}

.onboarding.fadeout .title {
  animation: scale0 0.3s 0.5s ease-in-out forwards;
}

.onboarding.fadeout .desc {
  animation: scale0 0.3s 0.5s ease-in-out forwards;
}

.onboarding.fadeout .start {
  animation: scale0 0.3s 0.5s ease-in-out forwards;
}

@keyframes fadeout {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes scale0 {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(0.8);
    opacity: 0;
  }
}

@keyframes slideup {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateY(-100%);
  }
}

.signup {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 60px 20px;
  align-items: center;
}

.signup .logo {
  display: flex;
  align-items: center;
  column-gap: 6px;
}

.signup .desc {
  font-size: 14px;
  margin-top: 25px;
}

.form {
  margin-top: 60px;
  width: 100%;
}

.label {
  font-size: 12px;
}

.input_wrap {
  position: relative;
  margin-top: 10px;
}

.input {
  border: 1px solid #ccc;
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 100px;
  transition: all 0.15s ease-in;
}

.input:focus {
  outline: none;
  border-color: var(--theme-color);
}

.input::placeholder {
  color: #b9bfcc;
}

.form_item + .form_item {
  margin-top: 20px;
}

.show {
  position: absolute;
  top: 0;
  right: 15px;
  bottom: 0;
  margin: auto 0;
  width: 24px;
  height: 24px;
  background: transparent;
  border: 0;
}

.show path {
  fill: #b9bfcc;
}

.input[type="text"] + .show path {
  fill: var(--theme-color);
}

.divide {
  position: relative;
  text-align: center;
  margin: 20px 0;
  color: #b9bfcc;
  font-size: 12px;
}

.divide::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 45%;
  height: 2px;
  background-color: #f4f4f7;
}

.divide::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  width: 45%;
  height: 2px;
  background-color: #f4f4f7;
}

.signup .btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 46px;
  font-size: 12px;
  padding: 0 20px;
  border-radius: 100px;
  border: 2px solid #f1f2f5;
  box-sizing: border-box;
  color: var(--text-color);
  text-decoration: none;
}

.signup .btn + .btn {
  margin-top: 16px;
}

.btn.continue {
  margin-top: 20px;
  background-color: var(--point-color);
  border: var(--point-color);
}

.continue:disabled {
  background-color: var(--disabled-color);
  border-color: var(--disabled-color);
  color: #a0a8bb;
}

.btn.-google::before {
  content: "";
  width: 15px;
  height: 15px;
  background: no-repeat url("./assets/google.png") 0 0 / cover;
  margin-right: 6px;
}

.btn.-apple::before {
  content: "";
  width: 15px;
  height: 15px;
  background: no-repeat url("./assets/apple.png") 0 0 / cover;
  margin-right: 6px;
}

.signup.fadein {
  display: flex;
}

.signup.fadein .logo,
.signup.fadein .desc {
  animation: fadein 0.5s ease-in-out forwards;
}

.signup.fadein .form_item,
.signup.fadein .btn,
.signup.fadein .divide {
  opacity: 0;
  animation: slideFadein 0.5s 0.5s ease-in-out forwards;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes slideFadein {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### js

<GoogleAd/>

```js
const startButton = document.querySelector("#start");
const onBoarding = document.querySelector("#onboarding");
const signup = document.querySelector("#signup");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const continueButton = document.querySelector("#continue");
const showButton = document.querySelector("#show");

startButton.addEventListener("click", (e) => {
  onBoarding.classList.add("fadeout");
  setTimeout(() => {
    signup.classList.add("fadein");
  }, 800);
});

password.addEventListener("input", () => {
  if (password.value !== "" && email.value !== "") {
    continueButton.removeAttribute("disabled");
  }
});

email.addEventListener("input", () => {
  if (password.value !== "" && email.value !== "") {
    continueButton.removeAttribute("disabled");
  }
});

showButton.addEventListener("click", (e) => {
  const type = password.getAttribute("type");
  if (type === "text") {
    password.setAttribute("type", "password");
  } else {
    password.setAttribute("type", "text");
  }
});
```
