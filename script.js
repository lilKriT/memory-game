const cards = [
  {
    name: "fries",
    img: "./images/fries.png",
  },
  {
    name: "cheesburger",
    img: "./images/cheesburger.png",
  },
  {
    name: "hotdog",
    img: "./images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "./images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "./images/milkshake.png",
  },
  {
    name: "pizza",
    img: "./images/pizza.png",
  },
  {
    name: "fries",
    img: "./images/fries.png",
  },
  {
    name: "cheesburger",
    img: "./images/cheesburger.png",
  },
  {
    name: "hotdog",
    img: "./images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "./images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "./images/milkshake.png",
  },
  {
    name: "pizza",
    img: "./images/pizza.png",
  },
];

cards.sort(() => 0.5 - Math.random());

// console.log(cards);

const grid = document.querySelector(".grid");

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "./images/blank.png");
    card.setAttribute("data-id", i);
    grid.append(card);
  }
}

createBoard();
