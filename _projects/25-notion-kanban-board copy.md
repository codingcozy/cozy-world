---
title: "Notion Kanban Board"
description: "Notion Kanban Board made with html, css, js"
url: "https://making-challenge.netlify.app/25-notion-kanban-board/"
coverImage: "/assets/projects/25-notion-kanban-board.png"
youtubeUrl: "https://www.youtube.com/watch?v=9Sm_NxFgR3M"
date: "2023-10-18"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/25-notion-kanban-board.png"
---

### Youtube Link

<a class="youtube" target="_blank" href="https://www.youtube.com/watch?v=9Sm_NxFgR3M"><img src="https://img.youtube.com/vi/9Sm_NxFgR3M/hqdefault.jpg" width="600" height="300" /></a>

### html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Notion Kanban Board</title>
  </head>
  <body>
    <h1>
      <img src="./assets/notion.png" alt="" width="200" />
    </h1>
    <div class="board">
      <div class="column" id="todo">
        <h3 class="title">Not Started</h3>
        <button type="button" class="btn_add" data-type="todo">New</button>
        <!-- <div class="item">
          <span class="text" contenteditable="true">Untitled</span>
        </div> -->
      </div>
      <div class="column" id="progress">
        <h3 class="title">Progress</h3>
        <button type="button" class="btn_add" data-type="progress">New</button>
      </div>
      <div class="column" id="complete">
        <h3 class="title">Complete</h3>
        <button type="button" class="btn_add" data-type="complete">New</button>
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
body {
  height: 100vh;
  padding: 50px;
}

* {
  padding: 0;
  margin: 0;
}

.board {
  display: flex;
  height: 100%;
}

.column {
  position: relative;
  flex: 1;
  margin: 10px;
  padding: 40px 0;
}

#todo .title {
  background-color: #fae3de;
  color: #5a221e;
}

#progress .title {
  background-color: #faedcc;
  color: #4c3c2b;
}

#complete .title {
  background-color: #deecdc;
  color: #314538;
}

.title {
  position: absolute;
  top: 0;
  left: 5px;
  padding: 4px 6px;
  border-radius: 4px;
}

.item {
  padding: 5px;
  margin: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: grab;
}

.item:active {
  cursor: grabbing;
}

.item {
  position: relative;
  margin: 0 -3px;
  padding: 14px 30px 14px 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.item + .item {
  margin-top: 8px;
}

.text {
  position: relative;
  display: inline-block;
  vertical-align: top;
  min-width: 20px;
  font-size: 18px;
  line-height: 24px;
  min-height: 24px;
  color: #222;
  white-space: pre-wrap;
}

.text::before {
  content: "";
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.text:hover {
  cursor: text;
}

.text:hover::before {
  position: absolute;
  opacity: 1;
  top: 2px;
  right: -24px;
  width: 25px;
  height: 25px;
  background: no-repeat url("./assets/edit.png") 0 0 / cover;
}

.text:focus {
  outline: none;
}

.btn_add {
  display: flex;
  align-items: center;
  column-gap: 8px;
  width: 100%;
  border: 0;
  background: transparent;
  font-size: 20px;
  color: #a1a09e;
  padding: 10px 5px;
  margin-bottom: 10px;
  cursor: pointer;
}

.btn_add:hover {
  border-radius: 8px;
  background-color: #f1f1f0;
}

.btn_add::before {
  content: "";
  background: no-repeat url("./assets/plus.png") 0 0 / cover;
  width: 18px;
  height: 18px;
}
```

### js

<GoogleAd/>

```js
const columnList = document.querySelectorAll(".column");
const addButtonList = document.querySelectorAll(".btn_add");

columnList.forEach((column) => {
  column.addEventListener("drop", drop);
  column.addEventListener("dragover", allowDrop);
});

addButtonList.forEach((addButton) => {
  addButton.addEventListener("click", (e) => {
    addItem(e.target.dataset.type);
  });
});

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  if (event.currentTarget !== event.target) return;
  event.preventDefault();
  const itemId = event.dataTransfer.getData("text");
  const targetColumn = event.target;
  targetColumn.appendChild(document.getElementById(itemId));
}

function addItem(columnId) {
  const column = document.getElementById(columnId);
  const newItem = document.createElement("div");
  newItem.className = "item";
  newItem.innerHTML = '<span class="text" contenteditable="true">Untitled</span>';
  newItem.draggable = true;
  newItem.id = "item" + Date.now();
  newItem.addEventListener("dragstart", drag);

  column.appendChild(newItem);
}
```
