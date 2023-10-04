---
title: "Chat GPT App"
description: "Chat GPT App made with html, css, js"
url: "https://making-challenge.netlify.app/22-chatgpt/"
coverImage: "/assets/projects/22-chatgpt.png"
youtubeUrl: "https://www.youtube.com/watch?v=8rV_pMaq1Oc"
date: "2023-10-03"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/22-chatgpt.png"
---

### Youtube Link

<a class="youtube" target="_blank" href="https://www.youtube.com/watch?v=8rV_pMaq1Oc"><img src="https://img.youtube.com/vi/8rV_pMaq1Oc/hqdefault.jpg" width="600" height="300" /></a>

### html

<GoogleAd/>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>chat gpt</title>
    <link rel="stylesheet" href="./style.css" />
    <script src="https://unpkg.com/typeit@8.7.1/dist/index.umd.js"></script>
  </head>
  <body>
    <div class="gpt_wrap">
      <header>
        <h1 class="title">Cozy Coding Chat GPT</h1>
      </header>
      <div class="content" id="content">
        <!-- <div class="message">
          <div class="profile">
            <img src="./assets/user.png" alt="" width="50" height="50" />
          </div>
          <div class="textarea">
            <p class="text">hello</p>
            <div class="meta">
              <button class="btn" type="button">
                <svg stroke="#A0A0B1" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                <span class="blind">edit</span>
              </button>
            </div>
          </div>
        </div>
        <div class="message -bot">
          <div class="profile">
            <img src="./assets/bot.png" alt="" width="50" height="50" />
          </div>
          <div class="textarea">
            <p class="text">hello</p>
            <div class="meta">
              <button class="btn" type="button">
                <svg stroke="#A0A0B1" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
                <span class="blind">copy</span>
              </button>
              <button class="btn" type="button">
                <svg stroke="#A0A0B1" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
                <span class="blind">like</span>
              </button>
              <button class="btn" type="button">
                <svg stroke="#A0A0B1" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                </svg>
                <span class="blind">dislike</span>
              </button>
            </div>
          </div>
        </div> -->
      </div>
      <div class="input_area">
        <div class="input_wrap">
          <label for="chat_input" class="chat_label">
            <span class="blind">chat input</span>
            <input type="text" id="chat_input" class="chat_input" placeholder="Send a message" />
          </label>
          <button class="btn_send" type="button" id="btn_send" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="send_icon">
              <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="#6F7181"></path>
            </svg>
            <span class="blind">send</span>
          </button>
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
* {
  padding: 0;
  margin: 0;
}

html {
  height: 100%;
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

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(277deg, #daaad2 20.04%, #9dd8fb 78.23%);
}

.gpt_wrap {
  background-color: #343541;
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 624px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px;
}

header {
  border-bottom: 1px solid #62636c;
  padding: 20px;
}

.title {
  color: #d9d9e3;
  font-size: 20px;
  text-align: center;
}

.content {
  flex-grow: 1;
  overflow: auto;
}

.message {
  display: flex;
  column-gap: 10px;
  padding: 16px;
  border-bottom: 1px solid #2a2b32;
}

.message.last-child {
  border-bottom: 0;
}

.message.-bot {
  background-color: #444654;
}

.profile {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 6px;
  overflow: hidden;
}

.textarea {
  color: #ccc;
  padding-top: 6px;
}

.text {
  white-space: pre-wrap;
}

.meta {
  display: flex;
  column-gap: 10px;
  margin-top: 10px;
}

.btn {
  background-color: transparent;
  border: 0;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #40414f;
}

.btn svg {
  display: block;
}

.input_area {
  border-top: 1px solid #5b5c65;
  padding: 10px;
}

.input_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 16px;
  background-color: #404150;
  border-radius: 8px;
  padding: 6px 12px;
}

.chat_label {
  flex-grow: 1;
}

.chat_input {
  background-color: transparent;
  border: 0;
  font-size: 20px;
  color: #fff;
  width: 100%;
}

.chat_input::placeholder {
  color: #868697;
}

.chat_input:focus {
  outline: none;
}

.btn_send {
  background-color: transparent;
  border: 0;
  width: 32px;
  height: 32px;
  padding: 7px;
  background-color: #19c37d;
  border-radius: 6px;
  margin-right: -4px;
  cursor: pointer;
}

.send_icon path {
  fill: #fff;
}

.btn_send:disabled {
  background-color: transparent;
}

.btn_send:disabled path {
  fill: #6f7181;
}
```

### js

<GoogleAd/>

```js
const chatInput = document.getElementById("chat_input");
const btnSend = document.getElementById("btn_send");
const content = document.getElementById("content");

let chatCnt = 0;

btnSend.addEventListener("click", () => {
  // send Chat;
  sendChat();
});

chatInput.addEventListener("input", (e) => {
  const msg = e.target.value;

  if (msg !== "") {
    btnSend.removeAttribute("disabled");
  } else {
    btnSend.setAttribute("disabled", "true");
  }
});

chatInput.addEventListener("keydown", (e) => {
  if (e.target.value !== "" && e.key === "Enter") {
    // send Chat
    sendChat();
  }
});

const userMessage = (message) => `
<div class="message">
          <div class="profile">
            <img src="./assets/user.png" alt="" width="50" height="50" />
          </div>
          <div class="textarea">
            <p class="text">${message}</p>
            <div class="meta">
              <button class="btn" type="button">
                <svg stroke="#A0A0B1" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                <span class="blind">edit</span>
              </button>
            </div>
          </div>
        </div>`;

const botMessage = (message, id) =>
  `<div class="message -bot">
				<div class="profile">
					<img src="./assets/bot.png" alt="" width="50" height="50" />
				</div>
				<div class="textarea">
					<p class="text" id="reply-${id}">${message}</p>
					<div class="meta">
						<button class="btn" type="button">
							<svg stroke="#A0A0B1" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
								<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
								<rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
							</svg>
							<span class="blind">copy</span>
						</button>
						<button class="btn" type="button">
							<svg stroke="#A0A0B1" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
								<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
							</svg>
							<span class="blind">like</span>
						</button>
						<button class="btn" type="button">
							<svg stroke="#A0A0B1" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
								<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
							</svg>
							<span class="blind">dislike</span>
						</button>
					</div>
				</div>
			</div>`;

function addMessage(type, message, id) {
  if (type === "user") {
    content.innerHTML += userMessage(message);
  } else if (type === "bot") {
    content.innerHTML += botMessage(message, id);
  }
}

// sample bot message
const helloMsg = "Hello! How can I assist you today?";
const cozycodingMsg = `As of my last knowledge update in September 2021, I don't have specific information about "cozycoding" as it may be a term or entity that emerged after my training data. If "cozycoding" is a programming-related term, framework, or community that has gained prominence after my last update, I won't have details about it.

If you provide more context or specific questions about "cozycoding," I'll do my best to assist you based on the information available up to my last update.`;

function sendChat() {
  // add Message
  addMessage("user", chatInput.value);

  const userMsg = chatInput.value;

  setTimeout(() => {
    let botMsg = helloMsg;
    if (String(userMsg).includes("cozycoding")) botMsg = cozycodingMsg;
    addMessage("bot", "", chatCnt);

    new TypeIt(`#reply-${chatCnt}`, {
      strings: [botMsg],
      speed: 15,
    }).go();
  }, 2000);

  // real api
  // fetch("https://api.openai.com/v1/chat/completions", {
  //   method: "POST",
  //   headers: {
  //     Authorization: ` `,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     model: "gpt-3.5-turbo",
  //     messages: [{ role: "user", content: "hello" }],
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(JSON.stringify(data, null, 2)));

  chatInput.value = "";
  btnSend.setAttribute("disabled", "true");
  chatCnt++;
}
```
