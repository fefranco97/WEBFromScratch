const lines = [
  [0, 1, 2], // Linha 1
  [3, 4, 5], // Linha 2
  [6, 7, 8], // Linha 3
  [0, 3, 6], // Coluna 1
  [1, 4, 7], // Coluna 2
  [2, 5, 8], // Coluna 3
  [0, 4, 8], // Diagonal 1
  [2, 4, 6], // Diagonal 2
];

let board = ["", "", "", "", "", "", "", "", ""];

window.onload = () => {
  let isXnext = true;

  const tabuleiro = document.querySelector("#tabuleiro");
  const quadrados = Array.from(tabuleiro.children);

  const button = document.querySelector("#reset-game");
  button.addEventListener("click", () => {
    limpaTabuleiro();
    isXnext = true;
  });

  quadrados.forEach((quadrado) => {
    quadrado.addEventListener("click", (e) => {
      verificaJogador(e.target);
    });
  });

  function verificaJogador(quadrado) {
    if (!isXnext) {
      try {
        quadrado.children[0].classList.add("o");
        isXnext = !isXnext;
        board[quadrado.id] = "o";
      } catch (error) {
        alert("Já existe um item nessa posição");
      }
    } else {
      try {
        quadrado.children[0].classList.add("x");
        isXnext = !isXnext;
        board[quadrado.id] = "x";
      } catch (error) {
        alert("Já existe um item nessa posição");
      }
    }
    console.log(verificaVencedor(board));
  }

  function verificaVencedor(board) {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  function limpaTabuleiro() {
    quadrados.forEach((quadrado) => {
      quadrado.children[0].classList.remove("o");
      quadrado.children[0].classList.remove("x");
    });
    board = ["", "", "", "", "", "", "", "", ""];
  }
};
