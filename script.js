const cards = [
  {
    name: "fries",
    img: "./images/fries.png",
  },
  {
    name: "cheesburger",
    img: "./images/cheeseburger.png",
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
    img: "./images/cheeseburger.png",
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
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosedIDs = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "./images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.append(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll(".grid img");
  const cardOneID = cardsChosedIDs[0];
  const cardTwoID = cardsChosedIDs[1];

  if (cardsChosen[0] == cardsChosen[1]) {
    cards[cardOneID].setAttribute("src", "./images/white.png");
    cards[cardTwoID].setAttribute("src", "./images/white.png");
    cards[cardOneID].removeEventListener("click", flipCard);
    cards[cardTwoID].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[cardOneID].setAttribute("src", "./images/blank.png");
    cards[cardTwoID].setAttribute("src", "./images/blank.png");
  }

  if (cardOneID == cardTwoID) {
    alert("You clicked the same card");
    cards[cardOneID].setAttribute("src", "./images/blank.png");
  }

  cardsChosen = [];
  cardsChosedIDs = [];
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cards.length / 2) {
    resultDisplay.textContent = "Congratulations!";
  }
}

function flipCard() {
  let cardID = this.getAttribute("data-id");
  cardsChosen.push(cards[cardID].name);
  cardsChosedIDs.push(cardID);
  this.setAttribute("src", cards[cardID].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
