---
title: "Instagram SignIn"
description: "Instagram SignIn made with html, css, js"
url: "https://making-challenge.netlify.app/9-Instagram_signin/"
coverImage: "/assets/projects/09_Instagram_signin-thumbnail.png"
youtubeUrl: "https://www.youtube.com/watch?v=HIUh64cPRtw"
date: "2023-05-20"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/09_Instagram_signin-thumbnail.png"
---

### Youtube Link

<a class="youtube" target="_blank" href="https://www.youtube.com/watch?v=HIUh64cPRtw"><img src="https://img.youtube.com/vi/HIUh64cPRtw/hqdefault.jpg" width="600" height="300" /></a>

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
    <link rel="stylesheet" href="./base.css" />
    <link rel="stylesheet" href="./style.css" />
  </head>
  <title>Instagram Signin</title>
  <body>
    <div class="wrap">
      <div class="content">
        <div class="img_area">
          <img src="./assets/home_phone.png" alt="" class="home_phone" width="442" />
          <div class="screenshot_area" id="screenshot"></div>
        </div>
        <div class="signin_area">
          <div class="signin_wrap">
            <h1 class="logo">
              <img src="./assets/logo.png" alt="instagram" width="171" height="51" />
            </h1>
            <div class="input_wrap">
              <label for="email" class="label">Phone number, username, or email</label>
              <input type="text" id="email" class="input" />
            </div>
            <div class="input_wrap">
              <label for="password" class="label">Password</label>
              <input type="password" id="password" class="input" />
            </div>

            <button class="login_button" type="submit">Log in</button>
            <span class="or">
              <span class="or_text">OR</span>
            </span>
            <a href="#" class="facebook_link">Log in with Facebook</a>
            <div class="find_password">
              <a href="#" class="find_link">Forgot password?</a>
            </div>
          </div>
          <div class="signup_box">
            <p class="signup_text">Don't have an account? <a href="#" class="signup_link">Sign up</a></p>
          </div>
          <span class="app_text">Get the app.</span>
          <div class="store_area">
            <a href="#" class="store_link">
              <img src="./assets/appstroe.png" alt="appstore" width="136" height="40" />
            </a>
            <a href="#" class="store_link">
              <img src="./assets/google_play.png" alt="google play" width="136" height="40" />
            </a>
          </div>
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
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.content {
  display: flex;
}

.img_area {
  position: relative;
  width: 442px;
}

.screenshot_area {
  width: 244px;
  height: 520px;
  background: url("./assets/screenshot0.png") 0 0 / 100% 100%;
  position: absolute;
  top: 22px;
  right: 53px;
  transition: 1s ease-in-out;
}

.home_phone {
  width: 100%;
  height: auto;
}

.signin_area {
  width: 350px;
}

.signin_wrap {
  border: 1px solid #dbdbdb;
  padding: 40px 30px 20px;
  text-align: center;
}

.logo {
  margin-bottom: 30px;
}

.input_wrap {
  position: relative;
  background-color: #fafafa;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  font-size: 12px;
  overflow: hidden;
}

.input_wrap.is_active .label {
  top: 3px;
  font-size: 10px;
}

.input_wrap.is_active .input {
  padding: 14px 8px 6px;
  font-size: 12px;
  color: #444;
}

.label {
  position: absolute;
  top: 12px;
  left: 8px;
  color: #737373;
  transition: 0.2s ease-in-out;
}

.input {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: transparent;
  box-sizing: border-box;
  padding: 10px 8px;
}

.input_wrap + .input_wrap {
  margin-top: 8px;
}

.login_button {
  display: block;
  width: 100%;
  background-color: rgba(0, 149, 246, 0.7);
  color: #fff;
  margin-top: 16px;
  border-radius: 8px;
  height: 32px;
  font-weight: 700;
}

.or {
  position: relative;
  display: block;
  text-align: center;
  color: #737373;
  margin-top: 20px;
  font-size: 13px;
  font-weight: 700;
}

.or::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #dbdbdb;
}

.or_text {
  position: relative;
  padding: 0 20px;
  background-color: #fff;
}

.facebook_link {
  display: inline-flex;
  justify-content: center;
  column-gap: 8px;
  color: #385185;
  margin-top: 30px;
  font-weight: 700;
}

.facebook_link::before {
  content: "";
  background: url("./assets/facebook.png") 0 0 / contain;
  width: 16px;
  height: 16px;
}

.find_password {
  margin-top: 20px;
}

.find_link {
  color: #00367b;
  font-size: 13px;
  font-weight: 500;
}

.signup_box {
  border: 1px solid #dbdbdb;
  padding: 20px;
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 700;
}

.signup_link {
  color: #0095f6;
}

.app_text {
  padding: 16px 0;
  font-size: 14px;
  display: block;
  text-align: center;
}

.store_area {
  display: flex;
  justify-content: center;
  column-gap: 8px;
}
```

### js

<GoogleAd/>

```js
const inputList = document.querySelectorAll(".input");
const screenshot = document.getElementById("screenshot");

inputList.forEach((input) => {
  input.addEventListener("input", (e) => {
    const text = e.target.value;
    if (text.length > 0) {
      input.parentElement.classList.add("is_active");
    }
  });
});

let index = 2;

setInterval(() => {
  screenshot.style.backgroundImage = `url("./assets/screenshot${index}.png")`;
  index = (index + 1) % 3;
}, 4000);
```
