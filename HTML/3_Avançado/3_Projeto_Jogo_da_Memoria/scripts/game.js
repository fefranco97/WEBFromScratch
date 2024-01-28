class Card {
  constructor(id, name, path, flipped) {
    this.id = id;
    this.name = name;
    this.path = path;
    this.flipped = flipped;
  }
}

const boardSize = 20;

let techs = [
  "bootstrap",
  "css",
  "electron",
  "firebase",
  "html",
  "javascript",
  "jquery",
  "mongo",
  "node",
  "react",
];

let cards = null;

function startGame() {
  cards = createCardsFromTechs(techs);
  suffleCards(cards);
  createBoardWithSuffledCards(cards);
}

function suffleCards(cards) {
  let currenteIndex = cards.length;
  let randomIndex = 0;

  while (currenteIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currenteIndex);
    currenteIndex--;

    [cards[randomIndex], cards[currenteIndex]] = [
      cards[currenteIndex],
      cards[randomIndex],
    ];
  }
}

function createBoardWithSuffledCards(cards) {
  cards.forEach((card) => {
    renderCardOnGameBoard(card);
  });
}

function createCardsFromTechs(techs) {
  let cards = [];
  techs.forEach((tech) => {
    cards.push(createPairFromTech(tech));
  });
  return cards.flatMap((pair) => pair);
}

function createCardFromTech(tech) {
  let randomId = createRandomUUID();
  return new Card(randomId, tech, `assets/${tech}.png`, false);
}

function createPairFromTech(tech) {
  return [createCardFromTech(tech), createCardFromTech(tech)];
}

function createRandomUUID() {
  return crypto.randomUUID();
}
