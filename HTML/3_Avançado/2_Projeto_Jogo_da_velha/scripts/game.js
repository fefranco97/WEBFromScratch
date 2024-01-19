let estatisticas = {
  partida: {
    partidas: 0,
    empates: 0,
  },
  jogador1: {
    vitorias: 0,
    derrotas: 0,
  },
  jogador2: {
    vitorias: 0,
    derrotas: 0,
  },
};
let board = ["", "", "", "", "", "", "", "", ""];
let vezDoJogador = 0;
let jogadores = ["x", "o"];
let jogoEmAndamento = true;

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

function verificaJogador(position) {
  if (board[position] == "") {
    board[position] = jogadores[vezDoJogador];
    vezDoJogador = vezDoJogador === 0 ? 1 : 0;
  }
  renderizaTela();
}

function verificaVencedor() {
  for (let i = 0; i < lines.length; i++) {
    const [posicao1, posicao2, posicao3] = lines[i];
    if (
      board[posicao1] &&
      board[posicao1] === board[posicao2] &&
      board[posicao1] === board[posicao3]
    ) {
      return board[posicao1];
    }
  }
  return null;
}

function verificaJogo() {
  const vencedor = verificaVencedor();
  if (vencedor) {
    if (vencedor === "x") {
      setTimeout(() => {
        alert(`O jogador 1 venceu`);
      }, 100);
      jogoEmAndamento = false;
      estatisticas.partida.partidas++;
      estatisticas.jogador1.vitorias++;
      estatisticas.jogador2.derrotas++;
    } else {
      setTimeout(() => {
        alert(`O jogador 2 venceu`);
      }, 100);
      jogoEmAndamento = false;
      estatisticas.partida.partidas++;
      estatisticas.jogador2.vitorias++;
      estatisticas.jogador1.derrotas++;
    }
  } else if (verificaEmpate()) {
    jogoEmAndamento = false;
    setTimeout(() => {
      alert(`Deu velha!!!`);
    }, 100);
    estatisticas.partida.partidas++;
    estatisticas.partida.empates++;
  }
  renderizaEstatisticas();
}

function verificaEmpate() {
  if (!board.includes("")) {
    return true;
  }
  return false;
}
