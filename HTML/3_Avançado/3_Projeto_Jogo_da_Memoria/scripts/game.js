class Card {
  constructor(id, name, path, flipped) {
    this.id = id;
    this.name = name;
    this.path = path;
    this.flipped = flipped;
  }
}

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
let lockMode = false;

let fristCard = null;
let secondCard = null;

function setCard(cards, idCard) {
  let card = cards.filter((card) => card.id === idCard)[0];
  if (card.flipped || lockMode) {
    return false;
  }

  if (!fristCard) {
    fristCard = card;
    fristCard.flipped = true;
    return true;
  } else {
    secondCard = card;
    secondCard.flipped = true;
    lockMode = true;
    return true;
  }
}

function checkMatch() {
  if (!fristCard || !secondCard) {
    return false;
  }
  return fristCard.name === secondCard.name;
}

function clearCards() {
  fristCard = null;
  secondCard = null;
  lockMode = false;
}

function unflipCards() {
  fristCard.flipped = false;
  secondCard.flipped = false;
  clearCards();
}

function checkGameOver() {
  return cards.filter((card) => !card.flipped).length === 0;
}

function createCardsFromTechs(techs) {
  let cards = [];
  techs.forEach((tech) => {
    cards.push(createPairFromTech(tech));
  });
  return cards.flatMap((pair) => pair);
}

function createPairFromTech(tech) {
  return [createCardFromTech(tech), createCardFromTech(tech)];
}

function createCardFromTech(tech) {
  let randomId = createRandomUUID();
  return new Card(randomId, tech, `assets/${tech}.png`, false);
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

function createRandomUUID() {
  return crypto.randomUUID();
}
