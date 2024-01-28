document.addEventListener("DOMContentLoaded", () => {
  startGame();
  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", clickHandler);
  });
});

function startGame() {
  cards = createCardsFromTechs(techs);
  suffleCards(cards);
  createBoardWithSuffledCards(cards);
}

function restartGame() {
  let gameBoard = document.querySelector(".gameBoard");
  gameBoard.innerHTML = "";
  clearCards();
  startGame();
  let gameOverLayer = document.getElementById("gameOver");
  gameOverLayer.style.display = "none";
  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", clickHandler);
  });
}

function createBoardWithSuffledCards(cards) {
  cards.forEach((card) => {
    renderCardOnGameBoard(card);
  });
}

function clickHandler() {
  if (setCard(cards, this.id)) {
    this.classList.add("flip");
    if (secondCard) {
      if (checkMatch()) {
        clearCards();
        if (checkGameOver()) {
          let gameOverLayer = document.getElementById("gameOver");
          gameOverLayer.style.display = "flex";
        }
      } else {
        setTimeout(() => {
          let fristCardView = document.getElementById(fristCard.id);
          let secondCardView = document.getElementById(secondCard.id);
          fristCardView.classList.remove("flip");
          secondCardView.classList.remove("flip");
          unflipCards();
        }, 600);
      }
    }
  }
}

function renderCardOnGameBoard(card) {
  let container = document.querySelector(".gameBoard");
  let cardHtml = `
    <div id="${card.id}" class="card" data-icon="${card.name}">
        <div class="card_front">
            <img class="icon" src="${card.path}">
        </div>
        <div class="card_back">
            &lt/&gt
        </div>
    </div>`;

  container.innerHTML += cardHtml;
}
