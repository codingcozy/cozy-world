---
title: "Netflix Landing"
description: "Netflix Landing made with html, css, js"
url: "https://making-challenge.netlify.app/29-netflix-landing/"
coverImage: "/assets/projects/29-netflix-landing.png"
youtubeUrl: "https://www.youtube.com/watch?v=a3QeiBbQzRA"
date: "2023-11-09"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/29-netflix-landing.png"
---

### Youtube Link

<a class="youtube" target="_blank" href="https://www.youtube.com/watch?v=a3QeiBbQzRA"><img src="https://img.youtube.com/vi/a3QeiBbQzRA/hqdefault.jpg" width="600" height="300" /></a>

<GoogleAd />

### html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Netflix</title>
  </head>
  <body>
    <div class="wrap">
      <header class="header">
        <h1 class="logo">
          <span class="blind">netflix</span>
          <img src="./assets/logo.png" alt="" width="89" />
        </h1>
        <div class="menu">
          <div class="select_wrap">
            <img src="./assets/translate.png" alt="" class="translate" />
            <select class="lang" name="" id="">
              <option value="ko">한국어</option>
              <option value="en">English</option>
            </select>
            <img src="./assets/dropdown.png" alt="" />
          </div>
          <a class="signin" href="">Sign In</a>
        </div>
      </header>
      <div class="banner">
        <div class="content">
          <h2 class="title">Unlimited movies, TV shows, and more</h2>
          <p class="desc">Watch anywhere. Cancel anytime.</p>
          <h3 class="email_title">Ready to watch? Enter your email to create or restart your membership.</h3>
          <div class="email_wrap">
            <div class="input_wrap">
              <input type="text" class="email_input" id="email" />
              <label for="email" class="email_label">Email address</label>
              <em class="notice">
                <img src="./assets/danger_icon.png" alt="" />
                Email is required
              </em>
            </div>
            <button class="start_button">
              Get Started
              <img src="./assets/start_right_arrow.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div class="ads">
        <div class="content">
          <img src="./assets/popcorn.png" alt="" class="popcorn" />
          <div class="textarea">
            <strong class="ad_title">The Netflix you love for just KRW5,500.</strong>
            <p class="desc">Get the Standard with ads plan.</p>
            <a href="#" class="more">Learn More</a>
          </div>
        </div>
      </div>
      <div class="section -tv">
        <div class="inner">
          <div class="textarea">
            <h2 class="title">Enjoy on your TV</h2>
            <p class="desc">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <div class="tv_wrap">
            <video src="./assets/video1.m4v" class="tv_video" autoplay loop></video>
            <img class="tv" src="./assets/tv.png" alt="" />
          </div>
        </div>
      </div>
      <div class="section -watch">
        <div class="inner">
          <div class="textarea">
            <h2 class="title">Watch everywhere</h2>
            <p class="desc">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <div class="device_wrap">
            <video src="./assets/video-devices.m4v" class="device_video" autoplay loop></video>
            <img class="tv" src="./assets/device.png" alt="" />
          </div>
        </div>
      </div>
      <div class="section -kids">
        <div class="inner">
          <div class="textarea">
            <h2 class="title">Create profiles for kids</h2>
            <p class="desc">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
          </div>
          <img src="./assets/kid.png" alt="" class="kids_img" />
        </div>
      </div>
      <div class="section -download">
        <div class="inner">
          <div class="textarea">
            <h2 class="title">Download your shows to watch offline</h2>
            <p class="desc">Watch on a plane, train, or submarine...</p>
          </div>
          <div class="download_area">
            <img src="./assets/download.jpg" alt="" class="download_img" width="640" />
            <div class="download_wrap">
              <img src="./assets/boxshot.png" alt="" class="download_poster" />
              <div class="info">
                <strong class="download_title">Stranger Things</strong>
                <span class="download_text">Downloading...</span>
              </div>
              <img src="./assets/download-icon.gif" alt="" width="48" height="48" />
            </div>
          </div>
        </div>
      </div>
      <div class="section -faq">
        <div class="inner">
          <h2 class="title">Frequently Asked Questions</h2>
          <ul class="faq_list">
            <li class="faq_item">
              <button type="button" class="question" aria-expanded="false">What can I watch on Netflix?</button>
              <div class="answer">
                <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                <a href="#" class="answer_link">Check out some of our content.</a>
              </div>
            </li>
            <li class="faq_item">
              <button type="button" class="question" aria-expanded="false">What is Netflix?</button>
              <div class="answer">
                <p>
                  Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch
                  as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                </p>
              </div>
            </li>
            <li class="faq_item">
              <button type="button" class="question" aria-expanded="false">What can I watch on Netflix?</button>
              <div class="answer">
                <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                <a href="#" class="answer_link">Check out some of our content.</a>
              </div>
            </li>
            <li class="faq_item">
              <button type="button" class="question" aria-expanded="false">What is Netflix?</button>
              <div class="answer">
                <p>
                  Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch
                  as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                </p>
              </div>
            </li>
            <li class="faq_item">
              <button type="button" class="question" aria-expanded="false">What can I watch on Netflix?</button>
              <div class="answer">
                <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                <a href="#" class="answer_link">Check out some of our content.</a>
              </div>
            </li>
            <li class="faq_item">
              <button type="button" class="question" aria-expanded="false">What is Netflix?</button>
              <div class="answer">
                <p>
                  Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch
                  as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <footer class="footer">
        <div class="inner">
          <div class="link_list">
            <div class="link_item"><a href="#" class="link"> Questions? Contact us. </a></div>
            <div class="link_item"><a href="#" class="link"> FAQ </a></div>
            <div class="link_item"><a href="#" class="link"> Help Center </a></div>
            <div class="link_item"><a href="#" class="link"> Account </a></div>
            <div class="link_item"><a href="#" class="link"> Media Center </a></div>
            <div class="link_item"><a href="#" class="link"> Investor Relations </a></div>
            <div class="link_item"><a href="#" class="link"> Jobs </a></div>
            <div class="link_item"><a href="#" class="link"> Ways to Watch </a></div>
            <div class="link_item"><a href="#" class="link"> Terms of Use </a></div>
            <div class="link_item"><a href="#" class="link"> Privacy Statement </a></div>
            <div class="link_item"><a href="#" class="link"> Cookie Preferences </a></div>
            <div class="link_item"><a href="#" class="link"> Corporate Information </a></div>
            <div class="link_item"><a href="#" class="link"> Contact Us </a></div>
            <div class="link_item"><a href="#" class="link"> Speed Test </a></div>
            <div class="link_item"><a href="#" class="link"> Legal Notices </a></div>
            <div class="link_item"><a href="#" class="link"> Only on Netflix </a></div>
          </div>
          <div class="select_wrap">
            <img class="translate" src="./assets/translate.png" alt="" />
            <select name="lang" id="" class="lang">
              <option value="ko">한국어</option>
              <option value="en">English</option>
            </select>
            <img src="./assets/dropdown.png" alt="" />
          </div>
          <span class="company">Netflix South Korea</span>
        </div>
      </footer>
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
  --theme-color: #e50914;
  --green-color: #2cb871;
  --link-color: #448ef4;
}

* {
  margin: 0;
  padding: 0;
}

em {
  font-style: normal;
}

body {
  background-color: #000;
  font-family: Netflix Sans, Helvetica, sans-serif;
}

li {
  list-style-type: none;
}

button {
  cursor: pointer;
}

.blind {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  user-select: none;
}

.wrap {
  position: relative;
  color: #fff;
}

.header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  max-width: 1218px;
  margin: 0 auto;
  padding: 24px 32px;
  background-color: transparent;
  z-index: 10;
}

.menu {
  display: flex;
  column-gap: 10px;
  height: 32px;
}

.select_wrap {
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  border: 1px solid #ccc;
  padding: 0 10px;
  border-radius: 4px;
}

.translate {
  display: flex;
  align-items: center;
  margin-right: 8px;
}

.lang {
  background-color: transparent;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  color: #fff;
}

.lang:focus {
  outline: none;
}

.signin {
  background-color: var(--theme-color);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
}

.banner {
  position: relative;
  height: 700px;
  padding: 250px 60px;
  text-align: center;
  box-sizing: border-box;
  background: no-repeat url("./assets/banner.jpg") 0 0 / cover;
}

.banner::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);
}

.banner .content {
  position: relative;
}

.title {
  color: #fff;
  font-size: 48px;
  font-weight: 700;
}

.desc {
  font-size: 24px;
  margin: 18px 0 0;
  font-weight: 500;
}

.email_title {
  margin-top: 20px;
}

.email_wrap {
  display: flex;
  justify-content: center;
  max-width: 568px;
  width: 100%;
  margin: 16px auto 0;
  column-gap: 10px;
  height: 56px;
}

.input_wrap {
  position: relative;
  flex: 1;
}

.email_input {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 16px 16px 0;
  background: transparent;
  border: 1px solid var(--theme-color);
  border-radius: 4px;
  background: rgba(33, 33, 33, 0.5);
  color: #fff;
}

.email_input.is_writing {
  border-color: var(--green-color);
}

.email_input:focus {
  outline: none;
}

.email_input:focus + .email_label,
.email_input.is_writing + .email_label {
  top: 10%;
  font-size: 12px;
}

.email_label {
  position: absolute;
  top: 30%;
  left: 16px;
  color: #ccc;
  font-weight: 500;
  transition: all 0.1s ease-in-out;
}

.email_input.is_writing ~ .notice {
  display: none;
}

.notice {
  position: absolute;
  display: flex;
  align-items: center;
  column-gap: 4px;
  color: var(--theme-color);
  margin-top: 8px;
  font-size: 13px;
}

.start_button {
  display: flex;
  align-items: center;
  column-gap: 6px;
  background-color: var(--theme-color);
  border: 0;
  color: #fff;
  padding: 0 20px;
  border-radius: 4px;
  font-size: 24px;
  font-weight: bold;
}

.ads {
  position: relative;
  margin: -50px 74px 0;
}

.ads .content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  column-gap: 25px;
  background: radial-gradient(51.39% 511.66% at 47.68% -217.91%, #ff9900 0%, #e50914 17.27%, #0e1b4f 79.44%, #000413 100%);
}

.ad_title {
  font-size: 20px;
  line-height: 24px;
}

.ads .desc {
  margin-top: 10px;
  font-size: 16px;
}

.more {
  color: var(--link-color);
}

.more::after {
  content: "";
}

.section {
  padding: 72px 0;
}

.section + .section {
  border-top: 8px solid #232323;
}

.inner {
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  max-width: 1188px;
  padding: 0 20px;
  box-sizing: border-box;
}

.inner .textarea {
  text-align: left;
}

.inner .textarea .desc {
  margin-top: 16px;
}

.-tv .inner {
  display: flex;
}

.tv_wrap {
  position: relative;
}

.tv {
  position: relative;
  width: 100%;
}

.tv_video {
  position: absolute;
  max-width: 73%;
  max-height: 54%;
  overflow: hidden;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.-watch .textarea {
  order: 2;
}

.device_wrap {
  position: relative;
}

.device {
  width: 100%;
}

.device_video {
  z-index: -1;
  max-width: 63%;
  max-height: 47%;
  position: absolute;
  top: 34%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.kids_img {
  width: 100%;
}

.-download .inner {
  display: flex;
}

.-download .textarea {
  order: 2;
}

.download_img {
  margin: 0 auto;
  width: 100%;
}

.download_wrap {
  position: relative;
  display: flex;
  align-items: center;
  max-width: 80%;
  width: 100%;
  height: 84px;
  border: 2px solid rgba(128, 128, 128, 0.7);
  border-radius: 8px;
  margin: -120px auto 0;
  overflow: hidden;
  padding: 4px 10px;
  box-sizing: border-box;
  background-color: #000;
}

.download_poster {
  width: 45px;
  height: auto;
}

.-download .info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 16px;
}

.download_title {
  display: block;
}

.download_text {
  display: block;
  margin-top: 4px;
  color: var(--link-color);
}

.-faq .inner {
  flex-direction: column;
}

.faq_list {
  width: 100%;
  margin: 20px auto 0;
}

.faq_item {
  background-color: #2d2d2d;
  color: #fff;
}

.faq_item + .faq_item {
  margin-top: 8px;
}

.question {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
  background: transparent;
  border: 0;
  color: #fff;
  text-align: left;
  font-size: 18px;
}

.question::after {
  content: "";
  width: 24px;
  height: 24px;
  background: no-repeat url("./assets/faq_plus.png") 0 0 / cover;
  transition: all 0.1s ease-in-out;
}

.question.expanded::after {
  transform: rotate(45deg);
}
.question:hover {
  background-color: #414141;
}

.question.expanded + .answer {
  display: block;
}

.answer {
  display: none;
  padding: 24px;
  font-size: 18px;
  text-align: left;
  border-top: 1px solid #000;
}

.answer_link {
  color: #fff;
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
}

.footer {
  border-top: 8px solid #232323;
  color: rgba(255, 255, 255, 0.7);
}

.footer .inner {
  padding: 36px 24px;
  flex-direction: column;
  align-items: flex-start;
}

.link_list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.link_item {
  width: 40%;
  text-align: left;
}

.link {
  color: rgba(255, 255, 255, 0.7);
}

.footer .select_wrap {
  height: 32px;
  margin-top: 30px;
}

.company {
  margin-top: 30px;
}

@media screen and (max-width: 960px) {
  .banner {
    padding: 150px 20px;
    height: 570px;
  }

  .inner {
    flex-direction: column;
  }

  .inner .textarea {
    text-align: center;
    order: 0;
  }

  .title {
    font-size: 32px;
  }

  .desc {
    font-size: 18px;
  }
}

@media screen and (max-width: 600px) {
  .email_wrap {
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  .input_wrap {
    width: 100%;
  }

  .email_label {
    top: 20%;
  }

  .email_input {
    height: 48px;
  }

  .notice {
    position: relative;
  }

  .start_button {
    height: 48px;
    margin-top: 20px;
  }

  .ads .content {
    flex-direction: column;
    align-items: flex-start;
    background: radial-gradient(120.35% 220% at 49.86% -6.29%, #e50914 0%, #0e1b4f 46.15%, #0d1121 100%);
    padding: 20px;
    box-sizing: border-box;
  }

  .popcorn {
    margin-top: -70px;
    width: 80px;
  }
}
```

### js

<GoogleAd/>

```js
const emailInput = document.querySelector(".email_input");
const faqList = document.querySelector(".faq_list");

emailInput.addEventListener("input", (e) => {
  if (e.target.value.trim() !== "") {
    emailInput.classList.add("is_writing");
  } else {
    emailInput.classList.remove("is_writing");
  }
});

faqList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.classList.toggle("expanded");
  }
});
```
