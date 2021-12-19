const jokeEl = document.getElementById("joke");
const jokeCard = document.getElementById("joke-card");
const buttonEl = document.getElementById("btn");

const laughingArray = [
  "sitcom-laughing.mp3",
  "laughing-sound-2.mp3",
  "laughing-sound-3.mp3",
  "laughing-sound-4.mp3",
  "sitcom-laughing.mp3",
];

let joke = "";
function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => (joke = data.joke));

  jokeEl.classList.add("hide");
  setTimeout(() => {
    jokeEl.textContent = `${joke}`;
  }, 500);
  setTimeout(() => {
    jokeEl.classList.remove("hide");
  }, 500);

  buttonEl.disabled = true;

  var snd = new Audio(laughingArray[randomGen(4)]); // buffers automatically when created
  snd.play();

  setTimeout(() => {
    buttonEl.disabled = false;
    buttonEl.textContent = "Get new joke";
  }, 1500);

  jokeCard.style.background = `rgba(${randomGen(255)} , ${randomGen(
    255
  )} , ${randomGen(255)})`;
}

function randomGen(num) {
  return Math.floor(Math.random() * num + 1);
}
