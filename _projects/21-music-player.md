---
title: "Youtube Music Player"
description: "Youtube Music Player made with html, css, js"
url: "https://making-challenge.netlify.app/21-music-player/"
coverImage: "/assets/projects/21-music-player.png"
youtubeUrl: "https://www.youtube.com/watch?v=m29A9clMZKs"
date: "2023-09-18"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/projects/21-music-player.png"
---

### Youtube Link

<a class="youtube" target="_blank" href="https://www.youtube.com/watch?v=m29A9clMZKs"><img src="https://img.youtube.com/vi/m29A9clMZKs/hqdefault.jpg" width="600" height="300" /></a>

<GoogleAd />

### html

<GoogleAd/>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Youtube Music Player</title>
    <link rel="stylesheet" href="./style.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.3.0/color-thief.umd.js"></script>
  </head>
  <body>
    <div class="iphone">
      <div class="music_player">
        <div class="cover_image">
          <img class="image" src="./cover1.png" alt="" width="200" height="200" />
        </div>
        <div class="song_details">
          <h2 class="song_title">Song Title</h2>
          <p class="artist">Artist name</p>
        </div>
        <div class="controls_wrap">
          <div class="controls">
            <div class="item">
              <div class="like_area">
                <button type="button" class="btn_like">
                  <span class="blind">like</span>
                </button>
                <span class="text">144M</span>
                <button type="button" class="btn_dislike">
                  <span class="blind">dislike</span>
                </button>
              </div>
            </div>
            <div class="item">
              <button type="button" class="btn_comment">
                <span class="blind">Comment</span>
              </button>
              <span class="text">2.1K</span>
            </div>
            <div class="item">
              <button type="button" class="btn_save">
                <span class="blind">Save</span>
              </button>
              <span class="text">Save</span>
            </div>
            <div class="item">
              <button class="btn_share" type="button">
                <span class="blind">Share</span>
              </button>
              <span class="text">Share</span>
            </div>
          </div>
        </div>
        <div class="progress_bar">
          <div class="progress"></div>
        </div>
        <div class="play_time">
          <span class="current">0:00</span>
          <span class="end">3:28</span>
        </div>
        <div class="play_controls">
          <button type="button" class="btn_shuffle">
            <span class="blind">Shuffle</span>
          </button>
          <button type="button" class="btn_prev">
            <span class="blind">Prev</span>
          </button>
          <button type="button" class="btn_play">
            <span class="blind">Play</span>
          </button>
          <button type="button" class="btn_next">
            <span class="blind">Next</span>
          </button>
          <button type="button" class="btn_repeat">
            <span class="blind">Repeat</span>
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
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url("./assets/background.png") 0 0 / cover;
}

button {
  border: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
}

.iphone {
  width: 375px;
  height: 667px;
  padding: 20px;
  box-sizing: border-box;
  background: url("./assets/iphone.png") 0 0 / 100% 100%;
}

.music_player {
  height: 100%;
  background-color: #000;
  border-radius: 8px;
  padding: 40px 20px 30px;
  border-radius: 28px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
}

.cover_image {
  width: 100%;
  aspect-ratio: 1/1;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
}

.cover_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.song_details {
  margin-top: 10px;
}

.song_title {
  margin: 20px 0 0;
  font-size: 28px;
  color: #fff;
}

.artist {
  color: #ddd;
  margin: 10px 0 0;
}

.controls_wrap {
  overflow-x: auto;
}

.controls_wrap::-webkit-scrollbar {
  display: none;
}

.controls {
  display: flex;
  align-items: center;
  margin: 10px 0 0;
  column-gap: 10px;
}

.item {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  display: flex;
  align-items: center;
  height: 35px;
  padding: 0 12px;
  color: #fff;
}

.like_area {
  display: flex;
  align-items: center;
}

.btn_like {
  width: 18px;
  height: 18px;
  background: no-repeat url("./assets/like.png") 0 0 / contain;
}

.btn_like.active {
  background-image: url("./assets/like-on.png");
}

.btn_dislike {
  position: relative;
  width: 18px;
  height: 18px;
  background: no-repeat url("./assets/dislike.png") 0 0 / contain;
  margin-left: 20px;
}

.btn_dislike.active {
  background-image: url("./assets/dislike-on.png");
}

.btn_dislike::before {
  content: "";
  position: absolute;
  left: -10px;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.2);
}

.btn_comment {
  width: 18px;
  height: 18px;
  background: no-repeat url("./assets/comment.png") 0 0 / contain;
}

.btn_share {
  width: 18px;
  height: 18px;
  background: no-repeat url("./assets/share.png") 0 0 / contain;
}

.btn_save {
  width: 18px;
  height: 10px;
  background: no-repeat url("./assets/save.png") 0 0 / contain;
}

.text {
  font-size: 14px;
  margin-left: 4px;
  font-weight: 500;
}

.progress_bar {
  height: 2px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  margin-top: 20px;
}

.progress {
  width: 0%;
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
}

.play_time {
  color: #ddd;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.play_controls {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
}

.btn_shuffle {
  width: 20px;
  height: 20px;
  background: no-repeat url("./assets/shuffle.png") 0 0 / contain;
}

.btn_prev {
  width: 20px;
  height: 20px;
  background: no-repeat url("./assets/prev.png") 0 0 / contain;
}

.btn_next {
  width: 20px;
  height: 20px;
  background: no-repeat url("./assets/next.png") 0 0 / contain;
}

.btn_play {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
}

.btn_play::before {
  content: "";
  width: 18px;
  height: 25px;
  background: no-repeat url("./assets/play.png") 0 0 / contain;
  margin-left: 6px;
}

.btn_play.pause::before {
  background: no-repeat url("./assets/pause.png") 0 0 / contain;
  margin-left: 0;
}

.btn_repeat {
  width: 20px;
  height: 20px;
  background: no-repeat url("./assets/repeat.png") 0 0 / contain;
}

.btn_repeat.active {
  background-image: url("./assets/repeat-on.png");
}
```

### js

<GoogleAd/>

```js
const colorThief = new ColorThief();
const player = document.querySelector(".music_player");
const coverImage = player.querySelector(".image");
const songTitle = player.querySelector(".song_title");
const artist = player.querySelector(".artist");
const likeBtn = player.querySelector(".btn_like");
const dislikeBtn = player.querySelector(".btn_dislike");
const playBtn = player.querySelector(".btn_play");
const prevBtn = player.querySelector(".btn_prev");
const nextBtn = player.querySelector(".btn_next");
const shuffleBtn = player.querySelector(".btn_shuffle");
const repeatBtn = player.querySelector(".btn_repeat");
const progressBar = player.querySelector(".progress_bar");
const progress = player.querySelector(".progress");
const current = player.querySelector(".current");
const end = player.querySelector(".end");
const img = player.querySelector(".image");

img.addEventListener("load", () => {
  let color = colorThief.getColor(img);

  const player = document.querySelector(".music_player");
  player.style.backgroundColor = `rgb(${color[0]} , ${color[1]} , ${color[2]})`;
});

const songs = [
  { title: "Clean My Room", artist: "Ben Wagner", cover: "cover1.png", fileName: "1.mp3" },
  { title: "Night Skies", artist: "Paper Planes", cover: "cover2.png", fileName: "2.mp3" },
  { title: "Friend Till the End", artist: "Gabe Price", cover: "cover3.png", fileName: "3.mp3" },
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

function loadSong(songIndex) {
  const song = songs[songIndex];

  coverImage.src = song.cover;
  songTitle.textContent = song.title;
  artist.textContent = song.artist;

  const prevAudio = document.querySelector("audio");
  if (prevAudio) prevAudio.remove();

  const audio = new Audio();
  document.querySelector("body").appendChild(audio);

  audio.src = "./" + song.fileName;
  audio.addEventListener("loadedmetadata", () => {
    progressBar.max = audio.duration;

    const minute = Math.floor(audio.duration / 60);
    const second = Math.floor(audio.duration % 60);

    end.textContent = `${minute}:${second}`;
  });

  audio.addEventListener("timeupdate", () => {
    const minute = Math.floor(audio.currentTime / 60);
    const second = String(Math.floor(audio.currentTime % 60)).padStart(2, "0");

    current.textContent = `${minute}:${second}`;
    progress.style.width = `${Math.floor((audio.currentTime / audio.duration) * 100)}%`;
  });

  audio.addEventListener("ended", () => {
    if (isRepeat) {
      audio.currentTime = 0;
      audio.play();
    } else {
      // nextSong();
    }
  });

  audio.play();
}

function playSong() {
  isPlaying = true;
  playBtn.classList.add("pause");

  const audio = document.querySelector("audio");
  audio.play();
}

function pauseSong() {
  isPlaying = false;
  playBtn.classList.remove("pause");
  const audio = document.querySelector("audio");
  audio.pause();
}

function nextSong() {
  currentSongIndex = isShuffle ? getRandomSongIndex() : (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  if (!isPlaying) playSong();
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  if (!isPlaying) playSong();
}

function shuffleSongs() {
  isShuffle = !isShuffle;
  if (isShuffle) {
    const currentIndex = currentSongIndex;
    let shuffledSongs = [...songs];

    for (let i = shuffledSongs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleSongs[i], shuffleSongs[j]] = [shuffledSongs[j], shuffledSongs[i]];
    }
    currentSongIndex = shuffledSongs.findIndex((song) => (song.title = songs[currentIndex].title));
    songs.splice(currentIndex, 1, ...shuffledSongs);
    loadSong(currentSongIndex);
  } else {
    songs.splice(currentSongIndex, 1, ...songs.splice(0, currentSongIndex));
    loadSong(currentSongIndex);
  }
}

function repeatSong() {
  isRepeat = !isRepeat;
  repeatBtn.classList.toggle("active", isRepeat);
}

function getRandomSongIndex() {
  return Math.floor(Math.random() * songs.length);
}

function likeSong() {
  likeBtn.classList.add("active");
  dislikeBtn.classList.remove("active");
}

function dislikeSong() {
  likeBtn.classList.remove("active");
  dislikeBtn.classList.add("active");
}

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

nextBtn.addEventListener("click", () => {
  nextSong();
});

prevBtn.addEventListener("click", () => {
  prevSong();
});

shuffleBtn.addEventListener("click", () => {
  shuffleSongs();
});

repeatBtn.addEventListener("click", () => {
  repeatSong();
});

likeBtn.addEventListener("click", () => {
  likeSong();
});

dislikeBtn.addEventListener("click", () => {
  dislikeSong();
});

loadSong(currentSongIndex);
```
