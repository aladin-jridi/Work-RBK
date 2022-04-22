const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const startscreen = document.querySelector(".startscreen");
const gamearea = document.querySelector(".gamearea");
const clicktostart = document.querySelector(".clicktostart");
clicktostart.addEventListener("click", Start);
document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);

let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};

let player = {
  speed: 5,
  score: 0,
  highscore: 0,
};

function keydown(e) {
  keys[e.key] = true;
}

function keyup(e) {
  keys[e.key] = false;
}

function Start() {
  gamearea.innerHTML = "";
  startscreen.classList.add("hide");
  player.isStart = true;
  player.score = 0;
  window.requestAnimationFrame(play);
  for (var i = 0; i < 5; i++) {
    let roadlines = document.createElement("div");
    roadlines.setAttribute("class", "roadlines");
    roadlines.style.top = roadlines.y + "px";
    gamearea.appendChild(roadlines);
  }
  for (var i = 0; i < 3; i++) {
    let opponents = document.createElement("div");
    opponents.setAttribute("class", "opponents");
    opponents.y = i * -300;
    opponents.style.top = opponents.y + "px";
    gamearea.appendChild(opponents);
    opponents.style.left = Math.floor(Math.random() * 350) + "px";
    opponents.style.backgroundColor = randomcolor();
  }

  let car = document.createElement("div");
  car.setAttribute("class", "car");
  gamearea.appendChild(car);
  player.x = car.offsetLeft;
  player.y = car.offsetTop;
}

function randomcolor() {
  function c() {
    let hex = Math.floor(Math.random() * 256).toString(16);
    return ("0" + String(hex)).substring(-2);
  }
  return "#" + c() + c();
}

function play() {
  let car = document.querySelector(".car");
  let road = gamearea.getBoundingClientRecta();
  if (player.isStart) {
    moveLines();
    moveopponents(car);
  }
  if (keys.ArrowUp && player.y > road.top + 70) {
    player.y -= player.speed;
  }
  if (keys.ArrowDown && player.y < road.height - 75) {
    player.y += player.speed;
  }
  if (keys.ArrowRight && player.x < 350) {
    player.x += player.speed;
  }
  if (keys.ArrowLeft && player.x > 0) {
    player.x -= player.speed;
  }
}
