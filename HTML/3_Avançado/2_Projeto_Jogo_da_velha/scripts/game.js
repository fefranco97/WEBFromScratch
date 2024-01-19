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
  let jogoEmAndamento = true;

  const tabuleiro = document.querySelector("#tabuleiro");
  const quadrados = Array.from(tabuleiro.children);

  const restGame = document.querySelector("#reset-game");
  restGame.addEventListener("click", () => {
    limpaTabuleiro();
    isXnext = true;
  });

  const restStats = document.querySelector("#rest-stats");
  restStats.addEventListener("click", () => {
    limpaTabuleiro();
    limpaEstatisticas();
    isXnext = true;
  });

  quadrados.forEach((quadrado) => {
    quadrado.addEventListener("click", (e) => {
      if (!jogoEmAndamento) {
        alert("Jogo finalizado! Inicie um novo jogo");
        return;
      }
      verificaJogador(e.target);
      verificaJogo(board);
    });
  });

  function verificaJogador(quadrado) {
    if (!isXnext) {
      try {
        quadrado.children[0].classList.add("o");
        board[quadrado.id] = "O";
        isXnext = !isXnext;
      } catch (error) {
        alert("Já existe uma jogada nesse posição");
      }
    } else {
      try {
        quadrado.children[0].classList.add("x");
        board[quadrado.id] = "X";
        isXnext = !isXnext;
      } catch (error) {
        alert("Já existe uma jogada nesse posição");
      }
    }
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

  function verificaJogo(board) {
    const vencedor = verificaVencedor(board);
    if (vencedor) {
      if (vencedor === "X") {
        alert(`O jogador 1 venceu`);
        jogoEmAndamento = false;
        estatisticas.partida.partidas++;
        estatisticas.jogador1.vitorias++;
        estatisticas.jogador2.derrotas++;
      } else {
        alert(`O jogador 2 venceu`);
        jogoEmAndamento = false;
        estatisticas.partida.partidas++;
        estatisticas.jogador2.vitorias++;
        estatisticas.jogador1.derrotas++;
      }
    } else if (verificaEmpate(board)) {
      jogoEmAndamento = false;
      alert(`Deu velha!!!`);
      estatisticas.partida.partidas++;
      estatisticas.partida.empates++;
    }
    renderizaEstatisticas();
  }

  function limpaTabuleiro() {
    quadrados.forEach((quadrado) => {
      quadrado.children[0].classList.remove("o");
      quadrado.children[0].classList.remove("x");
    });
    board = ["", "", "", "", "", "", "", "", ""];
    jogoEmAndamento = true;
  }

  function limpaEstatisticas() {
    estatisticas.partida.partidas = 0;
    estatisticas.partida.empates = 0;
    estatisticas.jogador1.vitorias = 0;
    estatisticas.jogador1.derrotas = 0;
    estatisticas.jogador2.vitorias = 0;
    estatisticas.jogador2.derrotas = 0;
    renderizaEstatisticas();
  }

  function verificaEmpate(board) {
    if (!board.includes("")) {
      return true;
    }
    return false;
  }
};
