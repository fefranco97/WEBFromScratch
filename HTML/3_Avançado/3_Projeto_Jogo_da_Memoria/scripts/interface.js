document.addEventListener("DOMContentLoaded", () => {
  startGame();
  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", clickHandler);
  });
});

function clickHandler() {
  let card = this.classList;
  flipCard(card);
}

function flipCard(card) {
  if (card.value != "card") {
    card.remove("flip");
    return;
  }
  card.add("flip");
}

function renderCardOnGameBoard(card) {
  let container = document.querySelector(".gameBoard");
  let cardHtml = `
    <div id="${card.id}" class="card flip" data-icon="${card.name}">
        <div class="card_front">
            <img class="icon" src="${card.path}">
        </div>
        <div class="card_back">
            &lt/&gt
        </div>
    </div>`;

  container.innerHTML += cardHtml;
}
